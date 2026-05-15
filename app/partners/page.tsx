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
  { num: '9,2 млн ₽', desc: 'Инвестиции на запуск' },
  { num: '3,6 млн ₽', desc: 'Потенциальная выручка в месяц' },
  { num: '0,8–1 год', desc: 'Срок окупаемости' },
  { num: '5 дней', desc: 'Длительность immersive-заезда' },
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
    <main className="bg-[#14110d] text-[#f3eee5] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grid lg:grid-cols-2 min-h-[90vh] border-b border-[#2a2018]">

        {/* Left — image + headline */}
        <div className="relative flex flex-col justify-end p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#2a2018] overflow-hidden min-h-[50vh]">
          <Image
            src="/images/hero.webp"
            alt="Крым"
            fill
            priority
            quality={72}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110d] via-[#14110d]/60 to-transparent" />

          <div className="relative z-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c8a97e] mb-4">
              Перезагрузка: Истоки
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Первый в Крыму
              <br />
              иммерсивный проект
              <br />
              восстановления через
              <br />
              культурное погружение
            </h1>
            <div className="flex flex-col gap-2">
              {[
                '5-дневные immersive-заезды',
                'Полный digital detox',
                'Горный Крым · Этно-глэмпинг',
              ].map((t) => (
                <div key={t} className="text-xs text-[#7a7060] border-l-2 border-[#3a2e1e] pl-3">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — description + CTA */}
        <div className="flex flex-col justify-between p-8 lg:p-14">
          <div>
            <div className="w-10 h-px bg-[#8f6b3d] mb-6" />
            <p className="text-sm leading-relaxed text-[#9a9080] mb-6">
              Проект объединяет цифровой детокс, slow tourism и элементы{' '}
              <span className="text-[#c8a97e]">
                караимской культуры Крыма
              </span>{' '}
              в формате многодневного проживания альтернативной реальности.
            </p>
            <p className="text-sm leading-relaxed text-[#6a6050]">
              Проект находится на этапе раннего запуска и открыт для партнёрства,
              инвестиций и стратегического сотрудничества.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="mailto:no_the_cat@vk.com"
              className="flex-1 text-center text-xs tracking-widest uppercase border border-[#8f6b3d] bg-[#8f6b3d]/10 hover:bg-[#8f6b3d]/20 transition px-6 py-4 text-[#c8a97e]"
            >
              Получить презентацию
            </a>
            <Link
              href="/"
              className="flex-1 text-center text-xs tracking-widest uppercase border border-[#2a2018] hover:bg-[#2a2018] transition px-6 py-4 text-[#5a5040]"
            >
              ← Основной сайт
            </Link>
          </div>
        </div>
      </section>

      {/* ── CULTURE — editorial quote ────────────────────────── */}
      <section className="grid lg:grid-cols-[1fr_2fr] border-b border-[#2a2018]">
        <div className="flex flex-col items-center justify-center p-10 bg-[#0e0c09] border-b lg:border-b-0 lg:border-r border-[#2a2018] text-center gap-3">
          <span className="text-2xl text-[#3a2e1e]">✦</span>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a97e]">
            Культурная основа
          </p>
          <p className="text-xs text-[#4a3a28] mt-1">Чуфут-Кале</p>
        </div>
        <div className="p-8 lg:p-14">
          <blockquote className="text-lg italic leading-relaxed text-[#ddd2c1] border-l-2 border-[#8f6b3d] pl-5 mb-6">
            Архитектура горных поселений, изоляция и традиционный уклад жизни
            становятся частью immersive-опыта — не декорацией, а средой.
          </blockquote>
          <p className="text-sm text-[#6a6050] leading-relaxed">
            Проект вдохновлён наследием одной из самых редких этнокультурных
            традиций региона. Связь с природной средой, аутентичный быт и
            изоляция от городского шума — основа атмосферы проекта.
          </p>
        </div>
      </section>

      {/* ── MARKET — text + side stats ──────────────────────── */}
      <section className="grid lg:grid-cols-[3fr_2fr] border-b border-[#2a2018]">
        <div className="p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#2a2018]">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a97e] mb-3">
            Рынок
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Люди больше не покупают
            <br />
            массовый туризм
          </h2>
          <div className="w-10 h-px bg-[#8f6b3d] mb-8" />
          <div className="flex flex-col gap-5">
            {marketItems.map((item) => (
              <div key={item.title} className="border-l border-[#3a2e1e] pl-4">
                <p className="text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-xs text-[#6a6050] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side stats */}
        <div className="flex flex-col justify-around p-8 lg:p-12 bg-[#0e0c09] gap-6">
          {[
            { n: '+20%', l: 'рост рынка wellness-туризма в год' },
            { n: '3–4', l: 'заезда в сезоне' },
            { n: '20+', l: 'участников за заезд' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-bold text-[#c8a97e] leading-none">{s.n}</div>
              <div className="text-[10px] tracking-widest uppercase text-[#4a3a28] mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT IMAGE ────────────────────────────────────── */}
      <section className="grid lg:grid-cols-2 border-b border-[#2a2018]">
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
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a97e] mb-3">
            Формат проекта
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Не наблюдение —
            <br />
            а проживание
            <br />
            другой реальности
          </h2>
          <div className="w-10 h-px bg-[#8f6b3d] mb-8" />
          <div className="flex flex-col gap-3 text-sm text-[#ddd2c1]">
            {[
              'Проживание в этно-локации',
              'Культурное погружение',
              'Цифровой детокс',
              'Slow tourism',
              'Природное восстановление',
            ].map((p) => (
              <div key={p} className="flex items-center gap-3">
                <span className="text-[#8f6b3d] text-xs">✦</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECONOMY — big numbers ────────────────────────────── */}
      <section className="p-8 lg:p-14 border-b border-[#2a2018] bg-[#1a1510]">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a97e] mb-2">
          Экономика проекта
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Инвестиционная модель
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2018]">
          {ecoStats.map((s) => (
            <div key={s.desc} className="bg-[#14110d] p-6 lg:p-8">
              <div className="text-2xl lg:text-3xl font-bold text-[#c8a97e] leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[10px] tracking-wider uppercase text-[#4a3a28] leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP — horizontal timeline ───────────────────── */}
      <section className="p-8 lg:p-14 border-b border-[#2a2018]">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a97e] mb-2">
          Roadmap
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">План развития</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, i) => (
            <div
              key={item.stage}
              className={`p-5 border-t-2 ${
                i === 0 ? 'border-[#8f6b3d]' : 'border-[#2a2018]'
              }`}
            >
              <div className="text-[10px] tracking-[0.2em] text-[#4a3a28] mb-3">
                {item.stage} ·
              </div>
              <div className="text-sm font-semibold mb-2">{item.title}</div>
              <div className="text-xs text-[#5a5040] leading-relaxed">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cat1.webp"
            alt="Крым"
            fill
            quality={65}
            sizes="100vw"
            loading="lazy"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/70 to-[#14110d]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#c8a97e] mb-4">
            Партнёрство
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Мы создаём новый формат
            <br />
            осмысленного туризма в Крыму
          </h2>
          <div className="w-10 h-px bg-[#8f6b3d] mx-auto mb-6" />
          <p className="text-sm text-[#7a7060] leading-relaxed mb-10 max-w-md mx-auto">
            Проект на этапе раннего запуска — открыт для партнёрства,
            инвестиций и стратегического сотрудничества.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:no_the_cat@vk.com"
              className="text-xs tracking-widest uppercase border border-[#8f6b3d] bg-[#8f6b3d]/10 hover:bg-[#8f6b3d]/20 transition px-8 py-4 text-[#c8a97e]"
            >
              Связаться с командой
            </a>
            <a
              href="https://t.me/alinaswede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase border border-[#2a2018] hover:bg-[#2a2018] transition px-8 py-4 text-[#5a5040]"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-[#2a2018] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-widest uppercase text-[#3a3028]">
        <span>© 2026 CatFans. Все права защищены.</span>
        <div className="flex gap-6">
          <a
            href="mailto:no_the_cat@vk.com"
            className="hover:text-[#5a5040] transition"
          >
            no_the_cat@vk.com
          </a>
          <Link href="/privacy" className="hover:text-[#5a5040] transition">
            Конфиденциальность
          </Link>
        </div>
      </footer>
    </main>
  )
}