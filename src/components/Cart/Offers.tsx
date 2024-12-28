'use client';

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {toggleSponsorship} from "@/redux/sponsorshipSlice";

const Offers = () => {
  const dispatch = useDispatch();

  const packages = [
    {
      name: "BASE",
      price: "350$",
      features: [
        "Логотип компанії на бренд-волл та на сайті івенту",
        "Логотип та згадка про компанію у постійному відео",
        "Промоція в соціальних мережах (інформація про компанію)",
        "1 згадка в Instagram-story",
        "1 пост в LinkedIn",
        "Пост-дайджест у Telegram-каналі",
        "Участь у нетворкінгу",
      ],
    },
    {
      name: "INTERACTIVE",
      price: "400$",
      features: [
        "Участь у World Cafe",
        "Розміщення банера компанії на місці події",
        "Розсилка можливостей від компанії",
        "Інтерактивні публікації",
      ],
    },
    {
      name: "INFLUENTIAL",
      price: "750$",
      features: [
        "Можливість залучення ментора та/або судді до змагань",
        "Логотип на футболці",
        "Доступ до бази CV учасників",
        "Доступ до виконаних завдань",
        "Пост про компанію в Instagram",
        "Логотип на плакаті",
      ],
    },
    {
      name: "PUZZLE",
      price: "550$",
      features: [
        "Участь у World cafe",
        "Залучення судді/ментора",
        "Відеопредставлення компанії",
        "Пробна співбесіда з учасниками",
        "Розсилка можливостей від компанії",
        "Стаття про компанію на сайті",
        "Доступ до бази CV учасників",
      ],
    },
  ];

  const addToCart = (packageName: string) => {
    dispatch(toggleSponsorship({ name: packageName }));
  };

  return (
      <section className="bg-black text-white py-16 px-8">
        <h2 className="text-center text-4xl font-bold text-green-500 mb-12">
          Пропозиції
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
              <div
                  key={index}
                  className="bg-green-800 bg-opacity-30 p-6 rounded-lg border-2 border-green-500 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <ul className="text-sm mb-6">
                    {pkg.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">- {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <button
                      className="bg-green-500 text-black font-bold py-2 px-4 rounded"
                      onClick={() => addToCart(pkg.name)}
                  >
                    У корзину
                  </button>
                  <p className="text-xl font-bold mt-4">{pkg.price}</p>
                </div>
              </div>
          ))}
        </div>
        <h2 className="text-center text-4xl font-bold text-green-500 mb-4 mt-20 lg:mt-30">
          10% отриманих коштів підуть на допомогу ЗСУ!
        </h2>
        <div className="text-center text-sm text-gray-400 mb-8">
          <p>базовий + 3 додаткові опції -50$</p>
          <p>базовий + один пакет -50$</p>
          <p>базовий + два пакети -150$</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <Image
                src="/partnership_maskot.png"
                alt="Jar illustration"
                width={800}
                height={800}
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left pt-20">
            <p className="text-xl text-gray-400 mb-4">
              Кожен партнер проєкту має змогу долучитись до благодійного збору-розіграшу для ЗСУ в наших соціальних
              мережах. Серед людей, що задонатять, випадковим чином оберуться переможці, які отримають подарунки від
              компаній-партнерів.
            </p>
            <p className="text-xl text-gray-400">
              Після успішного завершення BEST::HACKath0n вам надається фото та відеозвіт від організаторів.
            </p>
          </div>
        </div>
      </section>
  );
};

export default Offers;
