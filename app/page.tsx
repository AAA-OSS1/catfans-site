import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata = {
  title: 'CatFans — Перезагрузка: Истоки',
  description:
    'Иммерсивный eco-retreat в Крыму: цифровой детокс, природа, восстановление и погружение в другой ритм жизни.',
  openGraph: {
    title: 'CatFans — Перезагрузка: Истоки',
    description:
      'Иммерсивный eco-retreat в Крыму: цифровой детокс, природа, восстановление и погружение в другой ритм жизни.',
    url: 'https://catfans.ru',
  },
}

const sections = [
  {
    icon: '🌿',
    title: 'Цифровой детокс',
    text: 'Полное отключение от информационного шума и возвращение к естественному ритму жизни.',
  },
  {
    icon: '⛰️',
    title: 'Жизнь степных культур',
    text: 'Погружение в атмосферу традиционного быта, природы и аутентичного опыта.',
  },
  {
    icon: '✨',
    title: 'Внутреннее восстановление',
    text: 'Не развлекательный отдых, а глубокая внутренняя перезагрузка.',
  },
]

const timeline = [
  {
    icon: '🌱',
    day: 'День 1',
    text: 'Отказ от цифровой среды и погружение в атмосферу проекта.',
  },
  {
    icon: '🥾',
    day: 'День 2–3',
    text: 'Жизнь в ритме природы, физическая активность и участие в повседневном быте.',
  },
  {
    icon: '🧘',
    day: 'День 4',
    text: 'Глубокое восстановление, осознанность и внутреннее замедление.',
  },
  {
    icon: '☀️',
    day: 'День 5',
    text: 'Возвращение в современный мир с новым состоянием и восприятием.',
  },
]

const audience = [
  '🌲 Усталость от города и информационного шума',
  '🕊️ Эмоциональное выгорание',
  '🌿 Потребность в восстановлении',
  '✨ Поиск осмысленного отдыха',
  '⛰️ Желание прожить уникальный опыт',
  '🍃 Интерес к природе и культуре Крыма',
]

const faq = [
  {
    q: 'Нужна ли специальная подготовка?',
    a: 'Нет. Программа рассчитана на обычных людей без специального опыта.',
  },
  {
    q: 'Будет ли интернет?',
    a: 'Проект предполагает цифровой детокс и минимизацию контакта с технологиями.',
  },
  {
    q: 'Безопасно ли участие?',
    a: 'Все активности проходят под сопровождением команды проекта.',
  },
  {
    q: 'Какой уровень комфорта?',
    a: 'Мы сохраняем баланс между аутентичностью, безопасностью и базовым комфортом.',
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
            alt="Природа Крыма"
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
                href="/"
                className="text-3xl font-semibold text-[#e8e1d4] hover:text-[#c7d6a1] transition"
              >
                CatFans
              </Link>

              <div className="hidden md:flex items-center gap-10">
                <Link
                  href="/program"
                  className="uppercase tracking-[0.25em] text-sm text-[#9eb47d] hover:text-white transition"
                >
                  Программа
                </Link>

                <Link
                  href="/partners"
                  className="uppercase tracking-[0.25em] text-sm text-[#9eb47d] hover:text-white transition"
                >
                  Партнёрам
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-6 py-3 border border-[#8ea86d]/30 bg-[#6f8f3a]/10 hover:bg-[#6f8f3a]/20 rounded-xl uppercase tracking-[0.18em] text-xs text-[#dce8c6] transition"
                >
                  Подать заявку
                </a>

                <div className="flex gap-3 text-sm">
                  <Link href="/" className="text-[#dce8c6]">
                    RU
                  </Link>

                  <Link
                    href="/en"
                    className="text-[#6f7d67] hover:text-[#dce8c6] transition"
                  >
                    EN
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <div className="text-center max-w-5xl mx-auto pt-8">
            <p className="uppercase tracking-[0.35em] text-sm text-[#c7d6a1] mb-6">
              ЭКО • RETREAT • IMMERSIVE EXPERIENCE
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Перезагрузка: Истоки
            </h1>

            <p className="text-lg md:text-2xl text-[#d9e5d0] max-w-3xl mx-auto mb-10 leading-relaxed">
              Временный выход из современной реальности ради восстановления
              через природу, традиции и образ жизни степных народов Крыма.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#6f8f3a] text-white font-semibold hover:scale-105 transition shadow-xl shadow-[#6f8f3a]/20"
              >
                🌿 Подать заявку
              </a>

              <a
                href="#concept"
                className="px-8 py-4 rounded-2xl border border-[#8ea86d]/20 bg-[#102117]/50 backdrop-blur-sm hover:bg-[#1a3322] transition"
              >
                Узнать концепцию
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                🌿 5 дней погружения
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                📵 Цифровой детокс
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                ⛰️ Природа Крыма
              </div>

              <div className="border border-[#8ea86d]/15 rounded-2xl p-4 bg-[#102117]/55 backdrop-blur-sm">
                ✨ Ограниченные места
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
              alt="Программа"
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
              Программа
            </p>

            <h3 className="text-xl font-semibold leading-tight mb-2 text-[#f4f1e8]">
              5 дней степного аула
            </h3>

            <p className="text-sm leading-relaxed text-[#d9e5d0]/75 mb-3">
              Расписание, костры, игры и immersive-погружение.
            </p>

            <div className="text-sm text-[#c7d6a1] group-hover:translate-x-1 transition-transform">
              Смотреть →
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
              alt="Партнёрам"
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
              Партнёрам
            </p>

            <h3 className="text-xl font-semibold leading-tight mb-2 text-[#f4f1e8]">
              Инвестиции и сотрудничество
            </h3>

            <p className="text-sm leading-relaxed text-[#d9e5d0]/75 mb-3">
              Экономика проекта и возможности партнёрства.
            </p>

            <div className="text-sm text-[#c7d6a1] group-hover:translate-x-1 transition-transform">
              Открыть →
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
              Как проходит опыт
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Путь внутренней перезагрузки
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div
                key={item.day}
                className="border border-[#8ea86d]/15 rounded-3xl p-8 bg-[#102117]/60 backdrop-blur-sm"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <div className="text-[#c7d6a1] mb-4">{item.day}</div>

                <p className="text-[#d9e5d0] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
            Для кого проект
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Для тех, кто устал жить на скорости
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
              Что входит
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Полное погружение
            </h2>

            <div className="space-y-4 text-lg text-[#d9e5d0]">
              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Проживание в атмосферной локации
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Питание и сопровождение
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Физическая активность и природа
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Культурная и этническая программа
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Практики восстановления и осознанности
              </div>

              <div className="border-b border-[#8ea86d]/15 pb-4">
                ✓ Минимизация цифрового шума
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
<section className="py-24 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
      Локация
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      Крым • Пространство проекта
    </h2>

    <p className="text-[#d9e5d0] text-lg leading-relaxed max-w-3xl mx-auto mb-10">
      Природная локация вдали от городского шума и цифровой перегрузки.
    </p>

    {/* COORDINATES */}
    <div className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/65 p-8 backdrop-blur-sm shadow-xl inline-block mb-10">

      <div className="text-[#c7d6a1] text-sm uppercase tracking-[0.2em] mb-3">
        Координаты для навигатора
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

    {/* 3D SPACE */}
    <div className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/55 p-5 md:p-6 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">

      <div className="flex flex-col lg:flex-row items-center gap-6">

        {/* IMAGE */}
        <div className="relative w-full lg:w-[260px] h-[180px] rounded-2xl overflow-hidden shrink-0">

          <Image
            src="/images/space.png"
            alt="3D пространство"
            fill
            loading="lazy"
            className="object-cover"
          />

        </div>

        {/* CONTENT */}
        <div className="text-left flex-1">

          <p className="uppercase tracking-[0.25em] text-[#c7d6a1] text-xs mb-3">

            Интерактивная карта

          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">

            3D-модель пространства проекта
            <br />

          </h3>

          <p className="text-[#d9e5d0]/80 leading-relaxed mb-6 text-sm md:text-base max-w-xl">

            Интерактивная immersive-модель позволяет
            изучить атмосферу и архитектуру пространства
            ещё до приезда на проект.

          </p>

          <Link
            href="/space"
            className="inline-flex px-6 py-3 rounded-2xl bg-[#c7a57a] text-black font-semibold hover:scale-105 transition"
          >

            Открыть 3D-пространство

          </Link>

        </div>

      </div>

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
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-[#8ea86d]/15 bg-[#102117]/60 p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold mb-4">🍃 {item.q}</h3>

                <p className="text-[#d9e5d0] leading-relaxed">{item.a}</p>
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
            alt="Природа"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-45 select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 to-[#04140b]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-6">
            Финальный шаг
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Ты не отдыхаешь —
            <br />
            ты возвращаешься к себе
          </h2>

          <p className="text-xl text-[#e5eddc] mb-12 leading-relaxed">
            Количество мест ограничено. Оставьте заявку и получите информацию о
            ближайших заездах.
          </p>

          <a
            href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-5 rounded-2xl bg-[#6f8f3a] text-white text-lg font-semibold hover:scale-105 transition shadow-xl shadow-[#6f8f3a]/20"
          >
            🌿 Подать заявку
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© 2026 CatFans. Все права защищены.</div>

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

            <Link href="/privacy" className="hover:text-white transition">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}