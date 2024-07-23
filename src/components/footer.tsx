import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <div className="md:mx-12 mx-3 mb-4 pb-3">
            <Separator className="w-full" />
            <div className="flex md:flex-row flex-col justify-between mt-3">
                <div className="flex flex-col items-left justify-left h-full">
                    <h1 className="text-base text-gray-800 italic font-bold leading-tight">Cricor!</h1>
                    <p className="text-xs font-normal leading-tight text-gray-500">info@cricor.it</p>
                </div>
                <div className="text-xs font-normal leading-tight text-left text-gray-500 space-x-3 my-3">
                    <Link href={"/"} className="hover:text-gray-800">Instagram</Link>
                    <Link href={"/"} className="hover:text-gray-800">X</Link>
                    <Link href={"/"} className="hover:text-gray-800">YouTube</Link>
                    <Link href={"/"} className="hover:text-gray-800">WhatsApp</Link>
                </div>
            </div>
        </div>
    );
}
