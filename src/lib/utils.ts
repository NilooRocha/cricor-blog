import { type ClassValue, clsx } from "clsx"
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleError = (error: unknown) => {
  console.error(error);
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
};