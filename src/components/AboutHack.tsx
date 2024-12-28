import Image from "next/image";

export default function HackathonPage() {
  return (
      <section className="min-h-screen flex w-full flex-col items-center justify-center lg:mx-auto bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-center border border-hack-green mt-48">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
            ХАКАТОН
          </h1>
          <p className="text-lg text-black md:text-xl mb-4">
            BEST::HACKath0n — це захід, під час якого студенти IT-спеціальностей у
            командах створюють новий програмний продукт протягом 24 годин у
            форматі non-stop programming.
          </p>
          <p className="text-lg text-black md:text-xl mb-6">
            Вже дев’ятий рік поспіль, BEST Lviv організовує BEST::HACKath0n. Захід
            об'єднує найкращих студентів українських університетів, які прагнуть:
          </p>
          <ul className="list-disc text-black list-inside text-left text-lg mb-6">
            <li>продемонструвати свої професійні навички у сфері IT;</li>
            <li>отримати цінний досвід роботи в команді;</li>
            <li>познайомитися з однодумцями;</li>
            <li>налагодити прямий контакт із представниками компаній.</li>
          </ul>
        </div>
        <div className="flex justify-center my-16">
          <Image
              src="/arrow_icon.svg"
              width={50}
              height={50}
              alt="Arrow"
              className="animate-bounce"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-center border border-hack-green mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            ТЕМА
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-hack-green mb-4">
            Післявоєнне відновлення
          </h3>
          <p className="text-lg md:text-xl text-black mb-4">
            Сьогодні Україна стикається з гострою потребою у відновленні на ключових рівнях: інфраструктури, економіки,
            екології та соціальної сфери. Відбудова пошкоджених міст, відновлення екосистем, створення нових економічних
            можливостей і підтримка суспільства є пріоритетами для нашого майбутнього.
          </p>
          <p className="text-lg md:text-xl text-black">
            Саме тому тема цьогорічного BEST::HACKath0n зосереджена на розробці інноваційних рішень, які сприятимуть
            ефективному відновленню України, роблячи її сильнішою, сучаснішою та стійкішою до будь-яких викликів.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 my-32 items-center">
          <Image
              src="/about_hack_1.png"
              width={400}
              height={400}
              alt="Group photo"
              className="rounded-lg"
          />
          <Image
              src="/about_hack_2.png"
              width={400}
              height={400}
              alt="Discussion"
              className="rounded-lg"
          />
          <Image
              src="/about_hack_3.png"
              width={400}
              height={400}
              alt="Teamwork"
              className="rounded-lg"
          />
        </div>
      </section>
  );
}
