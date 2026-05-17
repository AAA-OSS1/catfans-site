import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata = {
  title: 'CatFans — Reboot: Origins',
  description:
    'Immersive eco-retreat in Crimea: digital detox, nature, recovery, and immersion into a different rhythm of life.',
  openGraph: {
    title: 'CatFans — Reboot: Origins',
    description:
      'Immersive eco-retreat in Crimea: digital detox, nature, recovery, and immersion into a different rhythm of life.',
    url: 'https://catfans.ru/en',
  },
}

const sections = [
  {
    icon: '🌿',
    title: 'Digital Detox',
    text: 'Complete disconnection from information noise and a return to the natural rhythm of life.',
  },
  {
    icon: '⛰️',
    title: 'Life of the Steppe Cultures',
    text: 'Immersion into the atmosphere of traditional lifestyle, nature, and authentic experiences.',
  },
  {
    icon: '✨',
    title: 'Inner Recovery',
    text: 'Not entertainment tourism, but a deep internal reset.',
  },
]

const timeline = [
  {
    icon: '🌱',
    day: 'Day 1',
    text: 'Leaving the digital environment and immersing into the atmosphere of the project.',
  },
  {
    icon: '🥾',
    day: 'Day 2–3',
    text: 'Living in rhythm with nature, physical activity and participation in everyday camp life.',
  },
  {
    icon: '🧘',
    day: 'Day 4',
    text: 'Deep restoration, mindfulness and internal slowing down.',
  },
  {
    icon: '☀️',
    day: 'Day 5',
    text: 'Returning to the modern world with a renewed state of mind and perception.',
  },
]

const audience = [
  '🌲 Exhaustion from city life and information overload',
  '🕊️ Emotional burnout',
  '🌿 Need for recovery',
  '✨ Search for meaningful rest',
  '⛰️ Desire to live through a unique experience',
  '🍃 Interest in the nature and culture of Crimea',
]

const faq = [
  {
    q: 'Do I need any special preparation?',
    a: 'No. The program is designed for ordinary people without special experience.',
  },
  {
    q: 'Will there be internet access?',
    a: 'The project is based on digital detox and minimizing contact with technology.',
  },
  {
    q: 'Is participation safe?',
    a: 'All activities are supervised by the project team.',
  },
  {
    q: 'What level of comfort should I expect?',
    a: 'We maintain a balance between authenticity, safety and basic comfort.',
  },
]

export default function ImmersiveLanding() {
  return (
    <main className="bg-[#04140b] text-[#f4f1e8] min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0">

          <Image
            src="/images/hero.webp"
            alt="Nature of Crimea"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60 select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 via-[#0b2415]/70 to-[#04140b]/90" />

        </div>

        <div className="relative z-20 max-w-7xl w-full">

          <header className="mb-12">

            <div className="flex items-center justify-between border border-[#8ea86d]/15 bg-[#08150d]/80 backdrop-blur-md px-6 py-5 rounded-2xl">

              <Link
                href="/en"
                className="text-3xl font-semibold text-[#e8e1d4] hover:text-[#c7d6a1] transition"
              >
                CatFans
              </Link>

              <div className="hidden md:flex items-center gap-10">

                <Link
                  href="/program"
                  className="uppercase tracking-[0.25em] text-sm text-[#9eb47d] hover:text-white transition"
                >
                  Program
                </Link>

                <Link
                  href="/partners"
                  className="uppercase tracking-[0.25em] text-sm text-[#9eb47d] hover:text-white transition"
                >
                  Partners
                </Link>

              </div>

              <div className="flex items-center gap-4">

                <a
                  href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-6 py-3 border border-[#8ea86d]/30 bg-[#6f8f3a]/10 hover:bg-[#6f8f3a]/20 rounded-xl uppercase tracking-[0.18em] text-xs text-[#dce8c6] transition"
                >
                  Apply
                </a>

                <div className="flex gap-3 text-sm">

                  <Link
                    href="/"
                    className="text-[#6f7d67] hover:text-[#dce8c6] transition"
                  >
                    RU
                  </Link>

                  <Link
                    href="/en"
                    className="text-[#dce8c6]"
                  >
                    EN
                  </Link>

                </div>

              </div>

            </div>

          </header>

          <div className="text-center max-w-5xl mx-auto pt-8">

            <p className="uppercase tracking-[0.35em] text-sm text-[#c7d6a1] mb-6">
              ECO • RETREAT • IMMERSIVE EXPERIENCE
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Reboot: Origins
            </h1>

            <p className="text-lg md:text-2xl text-[#d9e5d0] max-w-3xl mx-auto mb-10 leading-relaxed">
              A temporary escape from modern reality for recovery
              through nature, traditions and the lifestyle
              of the steppe peoples of Crimea.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">

              <a
                href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#6f8f3a] text-white font-semibold hover:scale-105 transition shadow-xl shadow-[#6f8f3a]/20"
              >
                🌿 Apply Now
              </a>

              <a
                href="#concept"
                className="px-8 py-4 rounded-2xl border border-[#8ea86d]/20 bg-[#102117]/50 backdrop-blur-sm hover:bg-[#1a3322] transition"
              >
                Learn the Concept
              </a>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                🌿 5 days immersion
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                📵 Digital detox
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                ⛰️ Nature of Crimea
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                ✨ Limited spots
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}
      <section className="py-12 px-6 border-t border-[#8ea86d]/10 bg-[#06180e]">

        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-4">

            {/* PROGRAM */}
            <Link
              href="/program"
              className="group rounded-3xl border border-[#8ea86d]/10 bg-[#0d2015]/70 hover:border-[#8ea86d]/25 transition-all duration-300 overflow-hidden"
            >

              <div className="flex items-center gap-5 p-5">

                {/* IMAGE */}
                <div className="relative w-[92px] h-[92px] rounded-2xl overflow-hidden shrink-0">

                  <Image
                    src="/images/bizz.webp"
                    alt="Program"
                    fill
                    loading="lazy"
                    quality={62}
                    sizes="92px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">

                  <p className="uppercase text-[10px] tracking-[0.28em] text-[#c7d6a1] mb-2">
                    Program
                  </p>

                  <h3 className="text-xl font-semibold leading-tight mb-2 text-[#f4f1e8]">
                    5 days of a steppe aul
                  </h3>

                  <p className="text-sm leading-relaxed text-[#d9e5d0]/75 mb-3">
                    Schedule, campfires, games and immersive experience.
                  </p>

                  <div className="text-sm text-[#c7d6a1] group-hover:translate-x-1 transition-transform">
                    Explore →
                  </div>

                </div>

              </div>

            </Link>
                        {/* PARTNERS */}
            <Link
              href="/partners"
              className="group rounded-3xl border border-[#8ea86d]/10 bg-[#0d2015]/70 hover:border-[#8ea86d]/25 transition-all duration-300 overflow-hidden"
            >

              <div className="flex items-center gap-5 p-5">

                {/* IMAGE */}
                <div className="relative w-[92px] h-[92px] rounded-2xl overflow-hidden shrink-0">

                  <Image
                    src="/images/camni.webp"
                    alt="Partners"
                    fill
                    loading="lazy"
                    quality={62}
                    sizes="92px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">

                  <p className="uppercase text-[10px] tracking-[0.28em] text-[#c7d6a1] mb-2">
                    Partners
                  </p>

                  <h3 className="text-xl font-semibold leading-tight mb-2 text-[#f4f1e8]">
                    Investments & Partnerships
                  </h3>

                  <p className="text-sm leading-relaxed text-[#d9e5d0]/75 mb-3">
                    Project economics and partnership opportunities.
                  </p>

                  <div className="text-sm text-[#c7d6a1] group-hover:translate-x-1 transition-transform">
                    Open →
                  </div>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section
        id="concept"
        className="py-24 px-6 bg-[#072015]"
      >

        <div className="max-w-6xl mx-auto">

          <div className="mb-16 text-center">

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              How the experience unfolds
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              The path of inner reboot
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {timeline.map((item) => (

              <div
                key={item.day}
                className="border border-[#8ea86d]/15 rounded-3xl p-8 bg-[#102117]/60 backdrop-blur-sm"
              >

                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <div className="text-[#c7d6a1] mb-4">
                  {item.day}
                </div>

                <p className="text-[#d9e5d0] leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AUDIENCE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
            Who is this project for
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            For those tired of living at full speed
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {audience.map((item) => (

            <div
              key={item}
              className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/60 p-8 text-lg backdrop-blur-sm"
            >
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* INCLUDED */}
      <section className="py-24 px-6 bg-[#072015]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/bg.webp"
              alt="Immersive"
              width={1400}
              height={900}
              loading="lazy"
              className="rounded-3xl w-full h-[600px] object-cover shadow-xl select-none"
            />

          </div>

          <div>

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              What is included
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Full immersion
            </h2>

            <div className="space-y-4 text-lg text-[#d9e5d0]">

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Accommodation in an atmospheric location
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Meals and guidance
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Physical activity and nature
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Cultural and ethnic program
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Recovery and mindfulness practices
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Minimal digital noise
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* LOCATION */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
            Location
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crimea • Project Space
          </h2>

          <p className="text-[#d9e5d0] text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            A natural location far from urban noise and digital overload.
          </p>

          <div className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/65 p-8 backdrop-blur-sm shadow-xl inline-block">

            <div className="text-[#c7d6a1] text-sm uppercase tracking-[0.2em] mb-3">
              Coordinates for navigation
            </div>

            <a
              href="https://yandex.ru/maps/?pt=34.019500,44.707333&z=13&l=map"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold hover:text-[#c7d6a1] transition"
            >
              44°42.44'N, 34°1.17'E
            </a>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#072015]">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {faq.map((item) => (

              <div
                key={item.q}
                className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/60 p-8 backdrop-blur-sm"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  🍃 {item.q}
                </h3>

                <p className="text-[#d9e5d0] leading-relaxed">
                  {item.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/cat1.webp"
            alt="Nature"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-45 select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 to-[#04140b]/90" />

        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-6">
            Final Step
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

            You are not taking a vacation —
            <br />
            you are returning to yourself

          </h2>

          <p className="text-xl text-[#e5eddc] mb-12 leading-relaxed">

            The number of spots is limited.
            Leave an application and receive information
            about upcoming sessions.

          </p>

          <a
            href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-5 rounded-2xl bg-[#6f8f3a] text-white text-lg font-semibold hover:scale-105 transition shadow-xl shadow-[#6f8f3a]/20"
          >
            🌿 Apply Now
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

          <div>
            © 2026 CatFans. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <a
              href="mailto:no_the_cat@vk.com"
              className="hover:text-white transition"
            >
              no_the_cat@vk.com
            </a>

            <a
              href="https://t.me/alinaswede"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Telegram
            </a>

            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </footer>

    </main>
  )
}