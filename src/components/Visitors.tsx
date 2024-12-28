"use client"
import { Doughnut } from 'react-chartjs-2'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { press_start, inter } from '@/app/fonts'
import Image from 'next/image'

Chart.register(Tooltip, Title, ArcElement, Legend)

const dataCourses = {
    datasets: [{
        data: [27, 53, 11, 6, 3],
        backgroundColor: [
            'rgb(108, 232, 109)',
            'rgb(68, 213, 65)',
            'rgb(61, 186, 45)',
            'rgb(47, 152, 51)',
            'rgb(49, 110, 62)',
        ],
        borderWidth: 0,
        hoverOffset: 5,
        circumference: 360,
    }],
    labels: [
        'I курс',
        'II курс',
        'III курс',
        'IV курс',
        'Магістратура'
    ],
};

const dataLang = {
    datasets: [{
        data: [45, 20, 7, 15, 13],
        backgroundColor: [
            'rgb(108, 232, 109)',
            'rgb(68, 213, 65)',
            'rgb(61, 186, 45)',
            'rgb(47, 152, 51)',
            'rgb(49, 110, 62)',
        ],
        borderWidth: 0,
        hoverOffset: 10,
    }],
    labels: [
        'JavaScript/TypeScript',
        '.NET',
        'Java',
        'Python',
        'Інше'
    ]
};

export default function Visitors() {
    return (
        <div className="relative min-h-screen w-full bg-gray-100">
            <h2 className={`${press_start.className} text-black text-2xl lg:text-4xl my-8 text-center`}>
                Хто відвідує Хакатон?
            </h2>
            <div className="flex flex-wrap justify-center items-start gap-16 px-5">
                {/* First Doughnut Chart */}
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className={`${press_start.className} text-xl text-black mb-5 text-center`}>
                        Статистика по курсах університету
                    </h3>
                    <Doughnut data={dataCourses} />
                </div>

                {/* Second Doughnut Chart */}
                <div className="flex flex-col items-center max-w-sm">
                    <h3 className={`${press_start.className} text-xl text-black mb-5 text-center`}>
                        Статистика по мовах програмування
                    </h3>
                    <Doughnut data={dataLang} />
                </div>
            </div>

            {/* Specialties Section */}
            <div className="flex flex-col items-center mt-16">
                <h3 className={`${press_start.className} text-xl text-black mb-5 text-center`}>
                    Спеціальності на яких навчаються учасники
                </h3>
                <ul className={`${inter.className} text-black text-lg text-center leading-relaxed`}>
                    <li>Інженерія програмного забезпечення</li>
                    <li>Кібербезпека</li>
                    <li>Комп’ютерні науки</li>
                    <li>Інтернет речей</li>
                    <li>Системи штучного інтелекту</li>
                    <li>Системний аналіз</li>
                </ul>
            </div>

            {/* Background Bubbles */}
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 bottom-0 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-0"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-28 bottom-0 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 bottom-0 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 z-0"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-28 bottom-0 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 z-0"
            />
        </div>
    );
}
