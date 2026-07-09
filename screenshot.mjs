import puppeteer from 'puppeteer'
import { existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

// usage: node screenshot.mjs [url] [label] [width]
// auto-scrolls before capture so scroll-reveal sections and lazy images render.
const url = process.argv[2] || 'http://localhost:5173'
const label = process.argv[3] || ''
const width = parseInt(process.argv[4] || '1440', 10)

const dir = './temporary screenshots'
if (!existsSync(dir)) mkdirSync(dir)

const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(Boolean)
const next = nums.length ? Math.max(...nums) + 1 : 1

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`
const path = join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 })
await new Promise(r => setTimeout(r, 1200))

// scroll through the page to trigger reveals + lazy images, then return to top
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto'
  const step = window.innerHeight * 0.7
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise(r => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
  // safety net: force any straggler reveals so full-page captures show real content
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'))
})
await new Promise(r => setTimeout(r, 900))

// Chrome's capture surface maxes out near 16384px — drop to 1x scale for
// very tall pages so full-page captures don't tile/duplicate.
const pageHeight = await page.evaluate(() => document.body.scrollHeight)
if (pageHeight * 2 > 16000) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 })
  await new Promise(r => setTimeout(r, 600))
}

await page.screenshot({ path, fullPage: true })
await browser.close()

console.log(`Saved: ${path}`)
