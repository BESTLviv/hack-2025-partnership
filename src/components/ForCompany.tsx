export default function ForCompany() {
    return (
        <section className="flex w-full flex-col items-center lg:mx-auto bg-gray-100">
            <h1 className="text-hack-green text-3xl lg:text-5xl text-center mt-32 font-press-start">
                Для партнерів
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24 mx-12 lg:gap-8 text-black">
                <div className="flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-green-100 via-pink-100 to-white border border-hack-green rounded-xl p-6 flex items-center">
                        <span className="mr-4">🤝</span>
                        <p>Інвестиція в амбітну й талановиту молодь.</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 via-pink-100 to-white border border-hack-green rounded-xl p-6 flex items-center">
                        <span className="mr-4">⚡</span>
                        <p>Можливість виділити ініціативних студентів із подальшою перспективою працевлаштування.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-green-100 via-pink-100 to-white border border-hack-green rounded-xl p-6 flex items-center">
                        <span className="mr-4">📈</span>
                        <p>Підвищення впізнаваності бренду серед студентів.</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 via-pink-100 to-white border border-hack-green rounded-xl p-6 flex items-center">
                        <span className="mr-4">💵</span>
                        <p>Підтримка Збройних сил України — частина грошей йде на допомогу нашим військовим.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:col-span-2">
                    <div className="bg-gradient-to-br from-green-100 via-pink-100 to-white border border-hack-green rounded-xl p-6 flex items-center">
                        <span className="mr-4">🎯</span>
                        <p>Ефективний піар, спрямований на цільову аудиторію.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
