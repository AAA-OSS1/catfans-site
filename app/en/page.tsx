import Image from 'next/image'

export const dynamic = 'force-static'

export const metadata = {
  title: 'CatFans — Reboot: Origins',
  description:
    'Immersive eco-retreat in Crimea: digital detox, nature, recovery, and a return to a slower rhythm of life.',
}

const sections = [
  {
    icon: '🌿',
    title: 'Digital Detox',
    text: 'Complete disconnection from information overload and a return to a natural rhythm of life.',
  },
  {
    icon: '⛰️',
    title: 'Ancient Lifestyle',
    text: 'Immersion in traditional living, nature, and authentic experiences.',
  },
  {
    icon: '✨',
    title: 'Inner Recovery',
    text: 'Not entertainment-based relaxation, but a deep internal reset.',
  },
]

const timeline = [
  {
    icon: '🌱',
    day: 'Day 1',
    text: 'Disconnecting from the digital world and entering the atmosphere of the project.',
  },
  {
    icon: '🥾',
    day: 'Day 2–3',
    text: 'Living in rhythm with nature, physical activity, and participation in everyday routines.',
  },
  {
    icon: '🧘',
    day: 'Day 4',
    text: 'Deep recovery, mindfulness, and inner slowing down.',
  },
  {
    icon: '☀️',
    day: 'Day 5',
    text: 'Returning to modern life with a renewed state of mind and perspective.',
  },
]

const audience = [
  '🌲 Tired of city life and information overload',
  '🕊️ Emotional burnout',
  '🌿 Need for recovery',
  '✨ Searching for meaningful rest',
  '⛰️ Desire to experience something unique',
  '🍃 Interest in nature and Crimean culture',
]

const faq = [
  {
    q: 'Do I need special training?',
    a: 'No. The program is designed for ordinary people without special experience.',
  },
  {
    q: 'Will there be internet access?',
    a: 'The project is based on digital detox and minimizing contact with technology.',
  },
  {
    q: 'Is it safe?',
    a: 'All activities are supervised by the project team.',
  },
  {
    q: 'What level of comfort should I expect?',
    a: 'We maintain a balance between authenticity, safety, and basic comfort.',
  },
]

export default function ImmersiveLandingEN() {
  return (
    <main className="bg-[#04140b] text-[#f4f1e8] min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0">

          <Image
            src="/images/hero.webp"
            alt="Nature"
            fill
            priority
            quality={72}
            sizes="100vw"
            className="object-cover opacity-60 select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 via-[#0b2415]/70 to-[#04140b]/90" />

        </div>

        <div className="relative z-10 max-w-5xl w-full text-center">

          {/* LANGUAGE SWITCHER */}
          <div className="absolute top-0 right-0 flex gap-3 text-sm">

            <a
              href="/"
              className="px-4 py-2 rounded-xl border border-[#8ea86d]/25 bg-[#102117]/40 hover:bg-[#1a3322] transition"
            >
              RU
            </a>

            <a
              href="/en"
              className="px-4 py-2 rounded-xl bg-[#6f8f3a] text-white"
            >
              EN
            </a>

          </div>

          <p className="uppercase tracking-[0.35em] text-sm text-[#c7d6a1] mb-6">
            ECO • RETREAT • IMMERSIVE EXPERIENCE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Reboot: Origins
          </h1>

          <p className="text-lg md:text-2xl text-[#d9e5d0] max-w-3xl mx-auto mb-10 leading-relaxed">
            A temporary escape from modern reality for recovery through nature,
            traditions, and the lifestyle of ancient cultures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

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
              Explore the Concept
            </a>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-sm">

            <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
              🌿 5 Days Immersion
            </div>

            <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
              📵 Digital Detox
            </div>

            <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
              ⛰️ Nature of Crimea
            </div>

            <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
              ✨ Limited Spots
            </div>

          </div>

        </div>
      </section>

      {/* CONCEPT */}
      <section
        id="concept"
        className="py-24 px-6 max-w-7xl mx-auto"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/hero.webp"
              alt="Nature"
              width={1200}
              height={800}
              quality={68}
              loading="lazy"
              className="rounded-3xl shadow-xl mb-10 select-none"
            />

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              About the Project
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              This is not tourism.
              <br />
              This is living inside another reality.
            </h2>

            <p className="text-[#d9e5d0] text-lg leading-relaxed">
              The project combines elements of ethnocultural immersion,
              natural recovery, and digital detox.
            </p>

          </div>

          <div className="grid gap-6">

            {sections.map((item) => (
              <div
                key={item.title}
                className="border border-[#8ea86d]/15 bg-[#102117]/60 rounded-3xl p-8 backdrop-blur-sm"
              >

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-[#d9e5d0] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 bg-[#072015]">

        <div className="max-w-6xl mx-auto">

          <div className="mb-16 text-center">

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              How the Experience Works
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              The Path of Inner Reboot
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
            Who This Project Is For
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            For Those Tired of Living at Full Speed
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
              alt="Immersive Experience"
              width={1400}
              height={900}
              quality={68}
              loading="lazy"
              className="rounded-3xl w-full h-[600px] object-cover shadow-xl select-none"
            />

          </div>

          <div>

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              What’s Included
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Full Immersion
            </h2>

            <div className="space-y-4 text-lg text-[#d9e5d0]">

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Accommodation in an atmospheric location
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Meals and guidance
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Physical activity and nature immersion
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
            Crimea • Natural Retreat Area
          </h2>

          <p className="text-[#d9e5d0] text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            The project takes place in a natural area of Crimea far from city
            noise and digital overload.
          </p>

          <div className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/65 p-8 backdrop-blur-sm shadow-xl inline-block">

            <div className="text-[#c7d6a1] text-sm uppercase tracking-[0.2em] mb-3">
              Navigation Coordinates
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

      {/* CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/cat1.webp"
            alt="Nature"
            fill
            quality={65}
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-50 select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 to-[#04140b]/90" />

        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-6">
            Final Step
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            You are not escaping —
            <br />
            you are returning to yourself
          </h2>

          <p className="text-xl text-[#e5eddc] mb-12 leading-relaxed">
            Places are limited. Leave an application and receive information
            about upcoming retreats.
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
              Сontacts: no_the_cat@vk.com
            </a>

            <a
              href="https://t.me/alinaswede"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Telegram
            </a>

            <a
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

          </div>

        </div>
      </footer>

    </main>
  )
}