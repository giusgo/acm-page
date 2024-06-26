import { ModeToggle } from "@/components/ownui/theme-toggle";
import { LanguageSwitch } from "@/components/ownui/language-switch";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string | undefined;
  headerHeight?: number;
}

export default function Navbar({ className, headerHeight }: NavbarProps) {
  const [pastHeader, setPastHeader] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!headerHeight) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > (headerHeight * window.innerHeight) / 100) {
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
            href="#header"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:home")}
          </Link>
          <Link
            href="#about"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:about_us")}
          </Link>
          <Link
            href="#departments"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:departments")}
          </Link>
          <Link
            href="#events"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:events")}
          </Link>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:join-us")}
          </Link>
          <Link
            href="#contact"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            {t("navbar:contact")}
          </Link>
          <ModeToggle />
          <LanguageSwitch />
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
              <SheetClose asChild>
                <Link
                  href="#header"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:home")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:about_us")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#departments"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:departments")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#events"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:events")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#join"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:join-us")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:contact")}
                </Link>
              </SheetClose>
              <div>
                <ModeToggle />
                <LanguageSwitch />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
