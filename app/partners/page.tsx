import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Партнёрам и инвесторам — Перезагрузка: Истоки',
  description:
    'Иммерсивный этнокультурный проект в Крыму. Инвестиции в рынок цифрового детокса, slow tourism и эмоционального восстановления.',
  openGraph: {
    title: 'Партнёрам — CatFans · Перезагрузка: Истоки',
    description:
      'Первый в Крыму иммерсивный проект восстановления через культурное погружение. Открыт для партнёрства и инвестиций.',
    url: 'https://catfans.ru/partners',
  },
}

const marketItems = [
  {
    title: 'Тренд на «тихий туризм»',
    text: 'Путешественники выбирают изоляцию от шума и массовых маршрутов.',
  },
  {
    title: 'Цифровое выгорание',
    text: 'Растёт спрос на временный выход из алгоритмической среды.',
  },
  {
    title: 'Свободная ниша',
    text: 'В Крыму почти нет проектов культурного многодневного погружения.',
  },
]

const ecoStats = [
  { num: '9,4 млн ₽', desc: 'Инвестиции на запуск' },
  {
    num: '2 млн ₽',
    desc: 'Потенциальная выручка в месяц при самом консервативном подходе',
  },
  { num: '3-4 года', desc: 'Срок окупаемости' },
  { num: '5 дней', desc: 'Длительность иммерсивного заезда' },
]

const roadmap = [
  {
    stage: '01',
    title: 'Подготовка',
    text: 'Юридическое оформление и проектирование пространства',
  },
  {
    stage: '02',
    title: 'Строительство',
    text: 'Создание этно-локации и инженерных систем',
  },
  {
    stage: '03',
    title: 'Пилот',
    text: 'Первые группы и адаптация сценариев погружения',
  },
  {
    stage: '04',
    title: 'Масштаб',
    text: 'Развитие сезонных программ и партнёрской сети',
  },
]

export default function PartnersPage() {
  return (
    <main className="bg-[#14110d] text-[#f5efe6] min-h-screen">

      {/* HERO */}
      <section className="grid lg:grid-cols-2 min-h-[90vh] border-b border-[#33271e]">

        {/* LEFT */}
        <div className="relative flex flex-col justify-end p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#33271e] overflow-hidden min-h-[50vh]">

          <Image
            src="/images/hero.webp"
            alt="Крым"
            fill
            priority
            quality={72}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#14110d] via-[#14110d]/70 to-transparent" />

          <div className="relative z-10">

            <p className="text-[11px] tracking-[0.25em] uppercase text-[#d7b78a] mb-4">
              Перезагрузка: Истоки
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-[#fffaf3]">
              Первый в Крыму
              <br />
              иммерсивный проект
              <br />
              восстановления через
              <br />
              культурное погружение
            </h1>

            <div className="flex flex-col gap-3">
              {[
                '5-дневные immersive-заезды',
                'Полный digital detox',
                'Горный Крым · Этно-глэмпинг',
              ].map((t) => (
                <div
                  key={t}
                  className="text-sm text-[#d1c1ae] border-l-2 border-[#7f6542] pl-3"
                >
                  {t}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between p-8 lg:p-14">

          <div>

            <div className="w-10 h-px bg-[#c8a97e] mb-6" />

            <p className="text-base leading-relaxed text-[#d6c7b4] mb-6">
              Проект объединяет цифровой детокс, slow tourism и элементы{' '}
              <span className="text-[#f0c995] font-medium">
                ногайской культуры Крыма
              </span>{' '}
              в формате многодневного проживания альтернативной реальности.
            </p>

            <p className="text-sm leading-relaxed text-[#bca892]">
              Проект находится на этапе раннего запуска и открыт для партнёрства,
              инвестиций и стратегического сотрудничества.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">

            <a
              href="https://disk.yandex.ru/d/2QMV9ptqfBD1zA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs tracking-[0.2em] uppercase border border-[#c8a97e] bg-[#c8a97e]/10 hover:bg-[#c8a97e]/20 transition px-6 py-4 text-[#f3d4ac]"
            >
              Получить презентацию
            </a>

            <Link
              href="/"
              className="flex-1 text-center text-xs tracking-[0.2em] uppercase border border-[#4b3a2c] hover:bg-[#241c16] transition px-6 py-4 text-[#d7c5b0]"
            >
              ← Основной сайт
            </Link>

          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="grid lg:grid-cols-[1fr_2fr] border-b border-[#33271e]">

        <div className="flex flex-col items-center justify-center p-10 bg-[#100d09] border-b lg:border-b-0 lg:border-r border-[#33271e] text-center gap-3">

          <span className="text-2xl text-[#7a6246]">✦</span>

          <p className="text-[11px] tracking-[0.22em] uppercase text-[#d7b78a]">
            Культурная основа
          </p>

          <p className="text-sm text-[#b79b7a] mt-1">
            Степной Крым
          </p>

        </div>

        <div className="p-8 lg:p-14">

          <blockquote className="text-xl italic leading-relaxed text-[#f1e5d7] border-l-2 border-[#c8a97e] pl-5 mb-6">
            Архитектура горных поселений, изоляция и традиционный уклад жизни
            становятся частью immersive-опыта — не декорацией, а средой.
          </blockquote>

          <p className="text-base text-[#c7b49c] leading-relaxed">
            Проект вдохновлён наследием степных народов региона. Связь с природной
            средой, аутентичный быт и изоляция от городского шума —
            основа атмосферы проекта.
          </p>

        </div>
      </section>

      {/* MARKET */}
      <section className="grid lg:grid-cols-[3fr_2fr] border-b border-[#33271e]">

        <div className="p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#33271e]">

          <p className="text-[11px] tracking-[0.22em] uppercase text-[#d7b78a] mb-3">
            Рынок
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#fff8ef]">
            Люди больше не покупают
            <br />
            массовый туризм
          </h2>

          <div className="w-10 h-px bg-[#c8a97e] mb-8" />

          <div className="flex flex-col gap-6">
            {marketItems.map((item) => (
              <div key={item.title} className="border-l border-[#6d5539] pl-4">

                <p className="text-base font-semibold mb-2 text-[#f1e4d3]">
                  {item.title}
                </p>

                <p className="text-sm text-[#c7b49c] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}
          </div>

        </div>

        {/* STATS */}
        <div className="flex flex-col justify-around p-8 lg:p-12 bg-[#100d09] gap-8">

          {[
            { n: '+20%', l: 'рост рынка wellness-туризма в год' },
            { n: '3–4', l: 'заезда в месяц' },
            { n: '20+', l: 'участников за заезд' },
          ].map((s) => (
            <div key={s.l}>

              <div className="text-5xl font-bold text-[#e7c08e] leading-none">
                {s.n}
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-[#b79872] mt-2">
                {s.l}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PRODUCT */}
      <section className="grid lg:grid-cols-2 border-b border-[#33271e]">

        <div className="relative min-h-[300px]">
          <Image
            src="/images/bg.webp"
            alt="Юрты в Крыму"
            fill
            quality={68}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="p-8 lg:p-14 flex flex-col justify-center bg-[#1a1510]">

          <p className="text-[11px] tracking-[0.22em] uppercase text-[#d7b78a] mb-3">
            Формат проекта
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#fff8ef]">
            Не наблюдение —
            <br />
            а проживание
            <br />
            другой реальности
          </h2>

          <div className="w-10 h-px bg-[#c8a97e] mb-8" />

          <div className="flex flex-col gap-4 text-base text-[#e4d7c7]">

            {[
              'Проживание в этно-локации',
              'Культурное погружение',
              'Цифровой детокс',
              'Slow tourism',
              'Природное восстановление',
            ].map((p) => (
              <div key={p} className="flex items-center gap-3">

                <span className="text-[#d7b78a] text-sm">✦</span>

                {p}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ECONOMY */}
      <section className="p-8 lg:p-14 border-b border-[#33271e] bg-[#1a1510]">

        <p className="text-[11px] tracking-[0.22em] uppercase text-[#d7b78a] mb-2">
          Экономика проекта
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fff8ef]">
          Инвестиционная модель
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#33271e]">

          {ecoStats.map((s) => (
            <div key={s.desc} className="bg-[#14110d] p-6 lg:p-8">

              <div className="text-3xl lg:text-4xl font-bold text-[#e7c08e] leading-none mb-3">
                {s.num}
              </div>

              <div className="text-[11px] tracking-[0.12em] uppercase text-[#c7b49c] leading-relaxed">
                {s.desc}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ROADMAP */}
      <section className="p-8 lg:p-14 border-b border-[#33271e]">

        <p className="text-[11px] tracking-[0.22em] uppercase text-[#d7b78a] mb-2">
          Roadmap
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fff8ef]">
          План развития
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {roadmap.map((item, i) => (
            <div
              key={item.stage}
              className={`p-5 border-t-2 ${
                i === 0 ? 'border-[#d7b78a]' : 'border-[#4d3d2f]'
              }`}
            >

              <div className="text-[11px] tracking-[0.2em] text-[#b79872] mb-3">
                {item.stage} ·
              </div>

              <div className="text-lg font-semibold mb-3 text-[#f4e8d9]">
                {item.title}
              </div>

              <div className="text-sm text-[#c7b49c] leading-relaxed">
                {item.text}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/cat1.webp"
            alt="Крым"
            fill
            quality={65}
            sizes="100vw"
            loading="lazy"
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/70 to-[#14110d]" />

        </div>

        <div className="relative z-10 max-w-2xl mx-auto">

          <p className="text-[11px] tracking-[0.25em] uppercase text-[#d7b78a] mb-4">
            Партнёрство
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#fff8ef]">
            Мы создаём новый формат
            <br />
            осмысленного туризма в Крыму
          </h2>

          <div className="w-10 h-px bg-[#c8a97e] mx-auto mb-6" />

          <p className="text-base text-[#d4c2ae] leading-relaxed mb-10 max-w-md mx-auto">
            Проект на этапе раннего запуска — открыт для партнёрства,
            инвестиций и стратегического сотрудничества.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <a
              href="https://disk.yandex.ru/d/2QMV9ptqfBD1zA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase border border-[#c8a97e] bg-[#c8a97e]/10 hover:bg-[#c8a97e]/20 transition px-8 py-4 text-[#f3d4ac]"
            >
              Получить презентацию
            </a>

            <a
              href="https://t.me/alinaswede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase border border-[#4b3a2c] hover:bg-[#241c16] transition px-8 py-4 text-[#d7c5b0]"
            >
              Telegram
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#33271e] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-[#b79872]">

        <span>© 2026 CatFans. Все права защищены.</span>

        <div className="flex gap-6">

          <a
            href="mailto:no_the_cat@vk.com"
            className="hover:text-[#e0c39f] transition"
          >
            no_the_cat@vk.com
          </a>

          <Link
            href="/privacy"
            className="hover:text-[#e0c39f] transition"
          >
            Конфиденциальность
          </Link>

        </div>
      </footer>

    </main>
  )
}