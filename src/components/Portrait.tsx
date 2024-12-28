import Image from "next/image";
import { press_start, inter } from "@/app/fonts";

export default function Portrait() {
    return (
        <div className="relative flex flex-col py-24 justify-center items-center w-full bg-gray-100">
            <h1 className={`${press_start.className} flex self-center text-center text-3xl lg:text-4xl text-black m-10`}>
                Портрет учасників
            </h1>
            <div className="relative flex flex-col items-center w-full">
                {/* Photo and description container */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 gap-6 p-6">
                    {/* Left side: image */}
                    <div className="relative flex items-center">
                        <Image
                            src="/portrait.png"
                            width={600}
                            height={600}
                            alt="Participants"
                            className="rounded-xl shadow-md"
                        />
                    </div>
                    {/* Right side: text box */}
                    <div className="flex flex-col bg-white border border-green-500 rounded-xl p-8 shadow-lg">
                        <p className={`${inter.className} text-center text-lg lg:text-xl text-black`}>
                            Креативні та ініціативні студенти IT-спеціальностей, які прагнуть розвивати технічні та командні навички,
                            створювати інноваційні рішення та налагоджувати контакти з представниками компаній.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
