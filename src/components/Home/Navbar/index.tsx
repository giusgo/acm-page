import { ModeToggle } from "@/components/ownui/theme-toggle";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {
  className?: string | undefined;
  headerHeight?: number;
}

export default function Navbar({ className, headerHeight }: NavbarProps) {
  const [pastHeader, setPastHeader] = useState<boolean>(false);

  useEffect(() => {
    if (!headerHeight) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > (headerHeight * window.innerHeight) / 100) {
        console.log("User has scrolled past 80vh");
        setPastHeader(true);
      } else {
        setPastHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={cn(["w-full py-2 backdrop-blur z-50", className])}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="group">
          <Image
            alt="Logo"
            src={Logo}
            className="w-12 h-auto group-hover:brightness-125 transition"
          />
        </Link>
        <div
          className={cn([
            "items-center gap-8 hidden md:flex",
            pastHeader ? "" : "text-white",
          ])}
        >
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Inicio
          </Link>
          <Link
            href="/#about"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Acerca de
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Departamentos
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Eventos
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Únete
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Contáctanos
          </Link>
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-6">
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Inicio
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Acerca de
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Departamentos
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Eventos
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Únete
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                prefetch={false}
              >
                Contáctanos
              </Link>
              <div>
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
