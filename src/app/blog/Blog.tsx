import Link from "next/link";

export default function Blog() {
    return (
        <div className="md:mx-6 mx-3">
            <h1 className="text-4xl font-bold text-gray-800 md:p-6 my-3">Blog</h1>
            <div className="space-y-6 md:w-[60%] md:ml-6">
                <div>
                    <Link href={'/'}>
                        <div className="block text-gray-800 transition-colors duration-100 hover:text-gray-600">
                            <p className="text-base font-normal text-gray-600">24.11.2022 - Curiosita</p>
                            <h1 className=" ml-0 ransition-all duration-100 md:hover:pl-2 text-4xl font-bold md:hover:border-l-[0.2rem]">
                                L'uomo che venne <span className="text-orange-400" >incastrato</span> da <span className="text-orange-400" >un'impronta minerale
                                </span></h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <div className="block text-gray-800 transition-colors duration-100 hover:text-gray-600">
                            <p className="text-base font-normal text-gray-600">24.11.2022 - Curiosita</p>
                            <h1 className="transition-all duration-100 pl-2 text-4xl font-bold hover:border-l-[0.2rem]">
                                Usare le <span className="text-orange-400" >impronte</span> per fini <span className="text-orange-400" >probatori</span>: quante <span className="text-orange-400" >minuzie</span> occorrono?
                            </h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <div className="block text-gray-800 transition-colors duration-100 hover:text-gray-600">
                            <p className="text-base font-normal text-gray-600">24.11.2022 - Cronaca</p>
                            <h1 className="transition-all duration-100 pl-2 text-4xl font-bold hover:border-l-[0.2rem]">
                                Elisa <span className="text-orange-400" >Matsunaga</span>: La vedova nera di <span className="text-orange-400" >Sao Paulo</span> che ha <span className="text-orange-400" >scosso</span> il paese
                            </h1>
                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
}
