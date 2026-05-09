export const dynamic = 'force-static'
export default function ImmersiveLanding() {
  const sections = [
    {
      icon: '🌿',
      title: 'Цифровой детокс',
      text: 'Полное отключение от информационного шума и возвращение к естественному ритму жизни.',
    },
    {
      icon: '⛰️',
      title: 'Жизнь древних культур',
      text: 'Погружение в атмосферу традиционного быта, природы и аутентичного опыта.',
    },
    {
      icon: '✨',
      title: 'Восстановление состояния',
      text: 'Не отдых ради развлечения, а глубокая внутренняя перезагрузка.',
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
      text: 'Жизнь в ритме природы, физическая активность и участие в быте.',
    },
    {
      icon: '🧘',
      day: 'День 4',
      text: 'Глубокое восстановление, осознанность и внутреннее замедление.',
    },
    {
      icon: '☀️',
      day: 'День 5',
      text: 'Возвращение в современный мир с новым состоянием и опытом.',
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

  return (
    <main className="bg-[#04140b] text-[#f4f1e8] min-h-screen font-sans overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img
  src="/images/hero.jpg"
  alt="Nature"
  className="w-full h-full object-cover opacity-60"
/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#021008]/70 via-[#0b2415]/70 to-[#04140b]/90" />
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c7d6a1] mb-6">
            ЭКО • RETREAT • IMMERSIVE EXPERIENCE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Перезагрузка: Истоки
          </h1>

          <p className="text-lg md:text-2xl text-[#d9e5d0] max-w-3xl mx-auto mb-10 leading-relaxed">
            Временный выход из современной реальности ради восстановления через
            природу, традиции и образ жизни древних культур.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-[#6f8f3a] text-white font-semibold hover:scale-105 transition shadow-2xl shadow-[#6f8f3a]/30"
            >
              🌿 Подать заявку
            </a>

            <a
              href="#concept"
              className="px-8 py-4 rounded-2xl border border-[#8ea86d]/30 bg-[#102117]/40 backdrop-blur-md hover:bg-[#1a3322] transition"
            >
              Узнать концепцию
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-sm">
            <div className="border border-[#8ea86d]/20 rounded-2xl p-4 backdrop-blur-md bg-[#102117]/60 shadow-xl">
              🌿 5 дней погружения
            </div>
            <div className="border border-[#8ea86d]/20 rounded-2xl p-4 backdrop-blur-md bg-[#102117]/60 shadow-xl">
              📵 Цифровой детокс
            </div>
            <div className="border border-[#8ea86d]/20 rounded-2xl p-4 backdrop-blur-md bg-[#102117]/60 shadow-xl">
              ⛰️ Природа Крыма
            </div>
            <div className="border border-[#8ea86d]/20 rounded-2xl p-4 backdrop-blur-md bg-[#102117]/60 shadow-xl">
              ✨ Ограниченные места
            </div>
          </div>
        </div>
      </section>

      <section id="concept" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/hero.jpg"
              alt="Nature"
              className="rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] mb-10"
            />

            <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
              О проекте
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Это не туризм.
              <br />
              Это проживание другой реальности.
            </h2>

            <p className="text-[#d9e5d0] text-lg leading-relaxed mb-8">
              Проект объединяет элементы этнокультурного погружения,
              природного восстановления и цифрового детокса.
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((item) => (
              <div
                key={item.title}
                className="border border-[#8ea86d]/20 bg-[#102117]/70 rounded-3xl p-8 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#d9e5d0] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#072015]">
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
                className="border border-[#8ea86d]/20 rounded-3xl p-8 bg-[#102117]/70 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-[#c7d6a1] mb-4">{item.day}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.day}</h3>
                <p className="text-[#d9e5d0] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 max-w-6xl mx-auto">
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
              className="rounded-3xl border border-[#8ea86d]/20 bg-[#102117]/70 p-8 text-lg backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-[#072015]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/bg.jpg"
              alt="Immersive"
              className="rounded-3xl w-full h-[600px] object-cover shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
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
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Проживание в атмосферной локации</div>
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Питание и сопровождение</div>
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Физическая активность и природа</div>
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Культурная и этническая программа</div>
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Практики восстановления и осознанности</div>
              <div className="border-b border-[#8ea86d]/20 pb-4">✓ Минимизация цифрового шума</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[0.3em] text-[#c7d6a1] mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-[#8ea86d]/20 bg-[#102117]/70 p-8 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <h3 className="text-2xl font-semibold mb-4">🍃 {item.q}</h3>
              <p className="text-[#d9e5d0] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cat1.jpg"
            alt="Nature"
            className="w-full h-full object-cover opacity-50"
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
            Количество мест ограничено. Оставьте заявку и получите информацию
            о ближайших заездах.
          </p>

          <a
            href="https://forms.yandex.ru/u/69fc85d7e010db277384797b/"
            target="_blank"
            className="inline-flex px-10 py-5 rounded-2xl bg-[#6f8f3a] text-white text-lg font-semibold hover:scale-105 transition shadow-2xl shadow-[#6f8f3a]/30"
          >
            🌿 Подать заявку
          </a>
        </div>
      </section>
      <footer className="w-full border-t border-white/10 mt-20">
  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
    
    <div>
      © 2026 CatFans. Все права защищены.
    </div>

    <div className="flex items-center gap-6">
      <a
        href="mailto:no_the_cat@vk.com"
        className="hover:text-white transition"
      >
        Наши контакты: no_the_cat@vk.com
      </a>

      <a
        href="https://t.me/alinaswede"
        target="_blank"
        className="hover:text-white transition"
      >
        Telegram
      </a>
      <a
  href="/privacy"
  className="hover:text-white transition"
>
  Политика конфиденциальности
</a>
    </div>
  </div>
</footer>
    </main>
    
  )
}