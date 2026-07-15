// Paddle watermark for the dark green hero bands — mirrors the motif the
// sun-500 sections run off the left edge. The PNG is black, so it's inverted
// to read on green-950. Parent section must be relative + overflow-hidden.
export default function PaddleMark() {
  return (
    <img
      src="/images/icon-pickleball-ball.png"
      alt=""
      aria-hidden="true"
      className="absolute -right-14 bottom-[-2.5rem] h-52 w-52 opacity-[0.09] invert sm:h-64 sm:w-64 lg:-right-10 lg:bottom-[-3rem] lg:h-80 lg:w-80"
    />
  )
}
