import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Программа 5 дней — Перезагрузка: Истоки',
  description:
    '5 дней жизни степного аула. Юрты, костры, степные игры, традиционная кухня и immersive-погружение в атмосферу кочевой культуры.',
}

const days = [
  {
    num: '01',
    title: 'Прибытие в аул',
    accent: 'Первое погружение',
    text:
      'Заселение в юрты, знакомство с лагерем, первые командные активности и вечер у костра.',
    schedule: [
      ['14:00', 'Размещение в юртах'],
      ['16:00', 'Знакомство с аулом'],
      ['18:00', 'Общий ужин'],
      ['20:00', 'Вечер у костра'],
    ],
  },
  {
    num: '02',
    title: 'Жизнь степного лагеря',
    accent: 'Кочевой быт',
    text:
      'Практика степного уклада, бытовые активности, квесты и совместная жизнь внутри лагеря.',
    schedule: [
      ['09:00', 'Завтрак'],
      ['10:00', 'Быт аула'],
      ['13:00', 'Степной квест'],
      ['20:00', 'Вечерняя программа'],
    ],
  },
  {
    num: '03',
    title: 'Испытания степи',
    accent: 'Сила и смекалка',
    text:
      'Командные соревнования, игры, испытания на координацию и взаимодействие.',
    schedule: [
      ['09:00', 'Завтрак'],
      ['11:00', 'Степные игры'],
      ['15:00', 'Командные испытания'],
      ['20:00', 'Истории у костра'],
    ],
  },
  {
    num: '04',
    title: 'Ремесло и традиции',
    accent: 'Орнаменты и кухня',
    text:
      'Работа с орнаментами, ремесла, приготовление традиционной еды и большой вечер аула.',
    schedule: [
      ['09:00', 'Завтрак'],
      ['10:00', 'Мастерская'],
      ['16:00', 'Степная кухня'],
      ['20:00', 'Большой вечер'],
    ],
  },
  {
    num: '05',
    title: 'Финал путешествия',
    accent: 'Завершение программы',
    text:
      'Итоговые активности, общий чай степи и завершение immersive-погружения.',
    schedule: [
      ['09:00', 'Завтрак'],
      ['11:00', 'Финальный квест'],
      ['15:00', 'Прощальный чай'],
      ['18:00', 'Отъезд'],
    ],
  },
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#172119] text-[#f4f1e8]">
      {/* NAV */}
      <nav className="border-b border-[#2d3a2f] backdrop-blur-sm bg-[#172119]/90 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm tracking-[0.25em] uppercase text-[#c7d6be] hover:text-white transition"
          >
            ← CatFans
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/partners"
              className="text-sm tracking-[0.2em] uppercase text-[#7f927e] hover:text-[#dfe8d8] transition"
            >
              Партнёрам
            </Link>

            <Link
              href="/"
              className="text-sm tracking-[0.2em] uppercase text-[#7f927e] hover:text-[#dfe8d8] transition"
            >
              RU
            </Link>

            <Link
              href="/en"
              className="text-sm tracking-[0.2em] uppercase text-[#7f927e] hover:text-[#dfe8d8] transition"
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-[#2d3a2f] bg-gradient-to-b from-[#203024] to-[#172119]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <p className="text-sm tracking-[0.35em] uppercase text-[#9db18f] mb-6">
            Программа
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 max-w-4xl">
            5 дней жизни
            <br />
            степного аула
          </h1>

          <div className="w-20 h-px bg-[#6f8f3a] mb-10" />

          <p className="max-w-3xl text-lg leading-relaxed text-[#cfd8c7] mb-14">
            Юрты, вечерние костры, степные игры,
            традиционная кухня, командные испытания
            и жизнь в атмосфере кочевого лагеря
            вдали от цифрового шума.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '5 дней immersive-погружения',
              'Юрты и атмосфера аула',
              'Командные игры и квесты',
              'Костры и степная кухня',
            ].map((item) => (
              <div
                key={item}
                className="border border-[#314234] bg-[#1e2a20]/80 px-5 py-5 text-sm text-[#dce6d4] backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="space-y-16">
          {days.map((day, index) => (
            <div
              key={day.num}
              className={`grid lg:grid-cols-[220px_1fr] overflow-hidden border border-[#2d3a2f] ${
                index % 2 === 0
                  ? 'bg-[#1b261d]'
                  : 'bg-[#202d22]'
              }`}
            >
              {/* LEFT */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#2d3a2f] p-8 flex flex-col justify-between">
                <div>
                  <div className="text-6xl font-bold text-[#3e523f] mb-5">
                    {day.num}
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-[#9db18f] mb-3">
                    День {parseInt(day.num)}
                  </p>

                  <h2 className="text-2xl font-bold leading-tight mb-3">
                    {day.title}
                  </h2>

                  <p className="text-[#9bb094] italic mb-6">
                    {day.accent}
                  </p>

                  <p className="text-[#d3ddd0] leading-relaxed text-sm">
                    {day.text}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {day.schedule.map(([time, event]) => (
                    <div
                      key={time}
                      className="bg-[#172119] border border-[#314234] p-5 hover:border-[#6f8f3a] transition"
                    >
                      <div className="text-[#9db18f] text-sm tracking-widest mb-3">
                        {time}
                      </div>

                      <div className="text-[#eef3ea] leading-relaxed text-sm">
                        {event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="border-y border-[#2d3a2f] bg-[#1d2a1f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9db18f] mb-5">
              Атмосфера проекта
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Не экскурсия.
              <br />
              А временный выход
              <br />
              из цифровой среды.
            </h2>

            <div className="w-20 h-px bg-[#6f8f3a] mb-10" />

            <p className="text-lg leading-relaxed text-[#d3ddd0]">
              Программа построена не вокруг наблюдения,
              а вокруг проживания —
              совместной жизни, ритма степи,
              командного взаимодействия
              и погружения в атмосферу лагеря.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'Жизнь в юртах',
              'Костры и вечерние истории',
              'Игры и испытания',
              'Степная кухня и ремесла',
            ].map((item) => (
              <div
                key={item}
                className="bg-[#172119] border border-[#314234] p-8 text-center"
              >
                <div className="text-[#eef3ea] text-lg font-medium leading-relaxed">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="bg-gradient-to-r from-[#243227] to-[#1d2a1f] border border-[#314234] p-10 lg:p-16">
          <div className="max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9db18f] mb-5">
              Участие
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Подать заявку
              <br />
              на участие
            </h2>

            <p className="text-lg leading-relaxed text-[#d3ddd0] mb-10 max-w-2xl">
              Количество мест ограничено.
              Формирование групп происходит заранее.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#6f8f3a] hover:bg-[#7ea244] text-white font-semibold transition text-center"
              >
                🌿 Подать заявку
              </a>

              <Link
                href="/"
                className="px-8 py-5 border border-[#425545] hover:bg-[#253228] transition text-[#dce6d4] text-center"
              >
                ← На главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2d3a2f] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-[#7f927e]">
          <span>© 2026 CatFans</span>

          <div className="flex items-center gap-6">
            <a
              href="mailto:no_the_cat@vk.com"
              className="hover:text-[#dce6d4] transition"
            >
              Email
            </a>

            <a
              href="https://t.me/alinaswede"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dce6d4] transition"
            >
              Telegram
            </a>

            <Link
              href="/privacy"
              className="hover:text-[#dce6d4] transition"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}