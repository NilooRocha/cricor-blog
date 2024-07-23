import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-courier-prime",
    weight: ["400", "700"],
});

export default function Header() {
    return (
        <div className="bg-slate-100 flex flex-col justify-center items-center p-2 space-y-3 h-full md:w-[70%]">
            <p className={cn("text-orange-400 text-base font-normal leading-tight mr-6", courier.className)}>
        // La criminalista vera è qui! _
            </p>
            <div className="flex items-center">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="./logoCricor.jpg" />
                    <AvatarFallback>Cricor</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-4">
                    <h1 className="font-bold text-slate-800 text-4xl leading-tight">Cricor.it</h1>
                    <p className="text-sm text-slate-500 italic font-medium leading-tight">curiosità &#8226; cronaca &#8226; formazione</p>
                </div>
            </div>
            <div className="mt-3 ml-6">
                <p className="text-base text-slate-500 font-normal leading-5">Su questo blog troverai cose molto interessanti e divertenti, e imparerai tantissimo!</p>
                <p className="mt-3 text-base text-slate-500 font-normal leading-5">Comincia qui la tua vita da detective. 🕵️</p>
            </div>
        </div>
    );
}
