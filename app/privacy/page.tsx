export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#06110a] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">
          Политика конфиденциальности
        </h1>

        <div className="space-y-8 text-white/80 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Общие положения
            </h2>

            <p>
              Настоящая политика обработки персональных данных составлена в
              соответствии с Федеральным законом РФ №152-ФЗ «О персональных
              данных» и определяет порядок обработки персональных данных
              пользователей сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Какие данные мы собираем
            </h2>

            <p>
              Сайт может собирать следующие данные:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>адрес электронной почты;</li>
              <li>иные данные, добровольно отправленные пользователем.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Цели обработки данных
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>обратная связь с пользователем;</li>
              <li>предоставление информации о турах и мероприятиях;</li>
              <li>обработка заявок;</li>
              <li>улучшение качества работы сайта.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Передача данных третьим лицам
            </h2>

            <p>
              Персональные данные не передаются третьим лицам, за исключением
              случаев, предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Защита персональных данных
            </h2>

            <p>
              Мы принимаем необходимые организационные и технические меры для
              защиты персональных данных пользователей от неправомерного доступа,
              изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Согласие пользователя
            </h2>

            <p>
              Отправляя форму на сайте, пользователь выражает согласие на
              обработку персональных данных в соответствии с настоящей политикой.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Контакты
            </h2>

            <p>
              По вопросам обработки персональных данных:
            </p>

            <p className="mt-3">
              Email: no_the_cat@vk.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}