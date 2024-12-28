import { inter, inter_bold, press_start } from "@/app/fonts";
import { LiaFacebook, LiaInstagram, LiaLinkedin, LiaTelegram } from "react-icons/lia";

export default function Statistic() {
    return (
        <div className="flex flex-col w-full justify-center bg-gray-100 pt-12 pb-24">
            <h1
                className={`${press_start.className} text-3xl lg:text-5xl text-black my-12 text-center`}
            >
                Статистика
            </h1>

            {/* Social Media Statistics */}
            <div className="flex justify-evenly gap-8 mb-8 px-12 text-black">
                <div className="flex flex-col items-center">
                    <LiaTelegram className="h-10 w-10 lg:h-14 lg:w-14"/>
                    <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>900+</h2>
                </div>
                <div className="flex flex-col items-center">
                    <LiaInstagram className="h-10 w-10 lg:h-14 lg:w-14"/>
                    <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>3300+</h2>
                </div>
                <div className="flex flex-col items-center">
                    <LiaLinkedin className="h-10 w-10 lg:h-14 lg:w-14"/>
                    <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>580+</h2>
                </div>
                <div className="flex flex-col items-center">
                    <LiaFacebook className="h-10 w-10 lg:h-14 lg:w-14"/>
                    <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>2100+</h2>
                </div>
            </div>

            {/* Main Statistics Section */}
            <div className="grid grid-cols-4 gap-4 px-6">
                <div className="bg-green-500 text-black p-6 rounded-lg text-center flex flex-col justify-center items-center col-span-2 row-span-2">
                    <p className={`${inter.className} text-lg text-center`}>Кількість переглядів на постах про відкриття реєстрації на наших сторінках:</p>
                    <h2 className={`${inter_bold.className} text-5xl mt-4`}>18k</h2>
                </div>
                <div className="bg-green-300 text-black p-6 rounded-lg text-center flex flex-col justify-center items-center">
                    <p className={`${inter.className} text-lg text-center`}>Зареєстрованих команд:</p>
                    <h2 className={`${inter_bold.className} text-5xl mt-4`}>52</h2>
                </div>
                <div className="bg-pink-200 text-black p-6 rounded-lg text-center flex flex-col justify-center items-center">
                    <p className={`${inter.className} text-lg text-center`}>Користувачі, що пройшли повну реєстрацію:</p>
                    <h2 className={`${inter_bold.className} text-5xl mt-4`}>453</h2>
                </div>
                <div className="bg-pink-300 text-black p-6 rounded-lg text-center flex flex-col justify-center items-center">
                    <p className={`${inter.className} text-lg text-center`}>Команди, які пройшли відбір:</p>
                    <h2 className={`${inter_bold.className} text-5xl mt-4`}>17</h2>
                </div>
            </div>
        </div>
    );
}
