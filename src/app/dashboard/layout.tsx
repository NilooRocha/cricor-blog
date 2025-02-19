import { Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import NavButtons from "@/components/nav-buttons";
import UserToggle from "@/components/userToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <div className="hidden md:flex md:fixed md:top-0 md:left-0 md:h-full md:w-[220px] lg:w-[280px] md:border-r md:bg-white z-10">
        <div className="flex flex-col gap-2 h-full w-full">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Cricor</span>
            </Link>
          </div>
          <NavButtons />
          <UserToggle />
        </div>
      </div>
      <div className="flex flex-col md:ml-[220px] lg:ml-[280px]">
        <header className="md:hidden sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <NavButtons withSheetClose />
              <UserToggle />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>Cricor</span>
          </Link>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
