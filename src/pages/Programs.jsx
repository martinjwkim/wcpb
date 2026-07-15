import Reveal from '../components/Reveal.jsx'
import StatusChip from '../components/StatusChip.jsx'
import PaddleMark from '../components/PaddleMark.jsx'
import { LINKS, CONTACT, LESSONS, CLINIC_TOPICS } from '../data.js'

export default function Programs() {
  return (
    <>
      {/* header */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 pb-20 pt-24 lg:pb-28 lg:pt-32">
        <PaddleMark />
        <div className="court-frame" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <p className="eyebrow rise text-cream-100" style={{ '--rise-delay': '60ms' }}>
            Your game, your way
          </p>
          <h1 className="display rise mt-4 text-[clamp(3.2rem,8vw,7.5rem)] text-cream-50" style={{ '--rise-delay': '140ms' }}>
            Lessons <span className="text-sun-400">&amp; programs</span>
          </h1>
          <p className="rise mt-6 max-w-[62ch] font-body text-lg text-cream-100/80" style={{ '--rise-delay': '240ms' }}>
            No matter where you are on your pickleball journey, we&rsquo;ve got the perfect lesson to help you step
            up your game. Our professional instructors are dedicated to breaking down the game and building up your
            skills, all while keeping it fun, competitive, and packed with valuable insights.
          </p>
        </div>
      </section>

      {/* group lessons */}
      <section id="lessons" className="scroll-mt-24 bg-cream-50 py-20 lg:py-28" aria-label="Group lessons">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-green-800">Group lessons · live now</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-green-950">
                  Four sessions. <span className="text-sun-600">One level up.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <a href={LINKS.groupLessons} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                See lesson schedule
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {LESSONS.map((lesson, i) => (
              <Reveal key={lesson.level} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-green-800/10 bg-cream-100 p-8 shadow-card transition-transform duration-300 ease-spring hover:-translate-y-1.5">
                  <h3 className="display text-4xl text-green-800">{lesson.level}</h3>
                  <p className="mt-1 font-body font-semibold text-sun-600">{lesson.tagline}</p>
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-green-950/75">
                    <strong className="text-green-950">Good for:</strong> {lesson.goodFor}
                  </p>
                  {/* numbered because sessions are a real 1→4 sequence */}
                  <ol className="mt-6 flex-1 space-y-3 border-t border-green-800/10 pt-6">
                    {lesson.sessions.map((session, n) => (
                      <li key={session} className="flex gap-4">
                        <span className="display tabular flex-none pt-0.5 text-2xl text-sun-600">0{n + 1}</span>
                        <span className="font-body text-[15px] leading-relaxed text-green-950/80">{session}</span>
                      </li>
                    ))}
                  </ol>
                  <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun mt-8 w-full !text-base">
                    Book now
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* free 101 */}
      <section id="pickleball-101" className="scroll-mt-24 relative overflow-hidden bg-sun-500 py-20 lg:py-28" aria-label="Free Pickleball 101">
        <img
          src="/images/icon-pickleball-ball.png"
          alt=""
          aria-hidden="true"
          className="absolute -left-16 top-10 h-64 w-64 opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <p className="eyebrow text-green-900">Ready to learn the fastest-growing sport in the U.S.?</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.8rem,6vw,5.5rem)] !leading-[1.04] text-green-950">
                  Free Pickleball 101 class package{' '}
                  <span className="inline-block whitespace-nowrap rounded-2xl bg-green-950 px-4 pb-1 text-sun-400">
                    $90 value
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[60ch] font-body text-lg text-green-950/85">
                  Experience and learn the game from our PPR certified coaches—completely free. Whether you&rsquo;re
                  a total beginner or just curious to see what the hype is about, our Pickleball 101 Class Package
                  will get you ready to play, enjoy, and connect.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={LINKS.free101}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-950 text-cream-50 shadow-card hover:-translate-y-0.5 hover:bg-green-900 !px-8 !py-4 !text-xl"
                >
                  Book free class now
                </a>
                <p className="font-body text-sm font-semibold text-green-950/70">
                  Text us: {CONTACT.phone} · {CONTACT.email}
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <ul className="space-y-4 rounded-card bg-green-950 p-8 shadow-float">
                {[
                  ['Pickleball basics', 'Learn the rules, scoring, and positioning.'],
                  ['Technique tips', 'Master the fundamentals: serving, returning, and dinking drills.'],
                  ['Group gameplay', 'Put it all into action with fun and friendly matches.'],
                  ['Everything provided', 'Paddles, balls, and courts included — just show up. Ages 16+.'],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-sun-500" aria-hidden="true" />
                    <p className="font-body text-cream-100/85">
                      <strong className="display block text-xl tracking-wide text-cream-50">{title}</strong>
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* open play + leagues */}
      <section id="leagues" className="scroll-mt-24 grain glow-dark relative overflow-hidden bg-green-950 py-20 lg:py-28" aria-label="Open play, leagues and tournaments">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-cream-100">Leagues &amp; tournaments</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.5rem)] text-cream-50">
              Challenge yourself. <span className="text-sun-400">Compete to win.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              {/* mobile: photo stacked over a solid block; md+: text overlays the photo */}
              <article className="flex h-full flex-col overflow-hidden rounded-photo bg-green-950 shadow-float md:relative md:block md:min-h-[26rem]">
                <div className="photo-tint relative h-52 flex-none sm:h-64 md:absolute md:inset-0 md:h-full">
                  <img
                    src="/images/action-open-play.jpg"
                    alt="Players meeting at the net during open play"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {/* extra scrim so overlaid copy stays readable over the bright photo (md+) */}
                  <div
                    className="hidden md:block absolute inset-0 z-[2] bg-gradient-to-t from-green-950/95 via-green-950/70 to-green-950/10"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative p-7 md:absolute md:inset-x-0 md:bottom-0 md:z-10 md:p-8">
                  <StatusChip live>Drop in anytime</StatusChip>
                  <h3 className="display mt-4 text-5xl text-cream-50">Open play</h3>
                  <p className="mt-3 max-w-[58ch] font-body text-cream-100/85">
                    Sessions for players of all levels, with separate courts based on skill so everyone gets a
                    great game. No registration required—simply show up during open play hours and join the action.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-6 font-body text-sm text-cream-100/75">
                    <p>
                      <strong className="display block text-lg tracking-wide text-sun-400">Morning sessions</strong>
                      Practice or a friendly match before noon.
                    </p>
                    <p>
                      <strong className="display block text-lg tracking-wide text-sun-400">Evening sessions</strong>
                      A fun, competitive game under the lights.
                    </p>
                  </div>
                  <a
                    href={LINKS.schedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sun mt-6 !text-base"
                  >
                    Open play schedule
                  </a>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={120}>
                <article className="h-full rounded-card bg-green-900 p-7 shadow-card">
                  <StatusChip>Coming soon</StatusChip>
                  <h3 className="display mt-4 text-3xl text-cream-50">Tournaments</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-cream-100/75">
                    Skill-based tournaments with divisions for beginners, intermediate, and advanced players —
                    friendly competition, prizes, and a blast with the pickleball community.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article className="h-full rounded-card bg-green-900 p-7 shadow-card">
                  <StatusChip>Coming soon</StatusChip>
                  <h3 className="display mt-4 text-3xl text-cream-50">Leagues</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-cream-100/75">
                    Organized by rating and structured for every skill level — the perfect opportunity to challenge
                    yourself, improve, and meet players at your level.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* clinics + junior academy */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="Clinics and Junior Academy">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal id="clinics" className="scroll-mt-24">
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-green-800/10 bg-cream-100 shadow-card">
              <div className="photo-tint relative">
                <img
                  src="/images/clinic-training.png"
                  alt="Player training on a backhand reach during a clinic"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="absolute left-4 top-4 z-10">
                  <StatusChip>Coming soon</StatusChip>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="display text-4xl text-green-950">Clinics</h2>
                <p className="mt-1 font-body font-semibold text-sun-600">Get ready for next-level training.</p>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-green-950/75">
                  An intense, focused learning experience that sharpens specific skills and strategies — from
                  beginner basics to advanced tactics, led by top instructors.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-green-800/10 pt-5">
                  {CLINIC_TOPICS.map((topic) => (
                    <li key={topic} className="flex gap-2.5 font-body text-[15px] text-green-950/80">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sun-500" aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal id="junior-academy" delay={120} className="scroll-mt-24">
            <article className="grain glow-dark relative flex h-full flex-col overflow-hidden rounded-card bg-green-950 p-8 shadow-card">
              <div className="relative flex h-full flex-col">
                <StatusChip>Coming soon</StatusChip>
                <h2 className="display mt-5 text-4xl text-cream-50">Junior Academy</h2>
                <p className="mt-1 font-body font-semibold text-sun-400">
                  Building future champions, one game at a time.
                </p>
                <p className="mt-4 max-w-[56ch] font-body text-[15px] leading-relaxed text-cream-100/80">
                  A dedicated program designed to introduce young players to the fun, fast-paced world of
                  pickleball. Whether your child is brand new to the game or already showing potential, our Junior
                  Academy will provide the coaching, support, and community to help them thrive both on and off the
                  court.
                </p>
                <p className="mt-4 font-body text-sm text-cream-100/60">
                  Under 16? This is your track — the free 101 class is for ages 16+.
                </p>
                <div className="mt-auto pt-8">
                  <img
                    src="/images/action-court-2.jpg"
                    alt="Paddles and pickleball resting against the net"
                    loading="lazy"
                    className="photo-tint relative aspect-[16/7] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* bottom CTA */}
      <section className="bg-cream-100 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] text-green-950">
              Check the daily programming <span className="text-sun-600">&amp; open play schedule</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={LINKS.schedule} target="_blank" rel="noopener noreferrer" className="btn btn-sun !px-9 !py-4 !text-xl">
              View live schedule
            </a>
            <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              Book a court
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
