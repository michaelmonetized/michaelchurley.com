import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  PiCalendarPlusLight,
  PiGithubLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiListLight,
  PiXLogoLight,
} from "react-icons/pi";
import Link from "next/link";
import { Button } from "./button";

export default function MenuTop() {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <Sheet>
          <SheetTrigger>
            <PiListLight />
          </SheetTrigger>
          <SheetContent className="p-0 bg-Mocha-Crust light:bg-Latte-Crust">
            <div className="flex flex-col items-stretch justify-start divide-y divide-y-white-400">
              <div className="flex items-center justify-between gap-md p-md w-full">
                <Link href="https://github.com/michaelmonetized">
                  <PiGithubLogoLight />
                </Link>

                <Link href="https://www.linkedin.com/in/michaelchurley/">
                  <PiLinkedinLogoLight />
                </Link>

                <Link href="https://instagram.com/michaelh_rley">
                  <PiInstagramLogoLight />
                </Link>

                <Link href="https://x.com/MichaelH_rley2">
                  <PiXLogoLight />
                </Link>
              </div>
              <div className="flex items-center justify-between gap-md p-md w-full">
                <Link href="mailto:michaelhurley.pj@gmail.com">
                  <Button size="sm" variant="outline">
                    Email Me
                  </Button>
                </Link>
                <Link href="tel:+18283073591">
                  <Button size="sm" variant="secondary">
                    Call or Text Me
                  </Button>
                </Link>
                <Link
                  href="https://koalendar.com/e/hire-michael-hurley"
                  className="block"
                >
                  <Button size="icon">
                    <PiCalendarPlusLight />
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex fkex-row grow items-center justify-end gap-md text-xs">
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex items-center justify-between gap-md px-md w-full">
              <Link href="https://github.com/michaelmonetized">
                <PiGithubLogoLight />
              </Link>

              <Link href="https://www.linkedin.com/in/michaelchurley/">
                <PiLinkedinLogoLight />
              </Link>

              <Link href="https://instagram.com/michaelh_rley">
                <PiInstagramLogoLight />
              </Link>

              <Link href="https://x.com/MichaelH_rley2">
                <PiXLogoLight />
              </Link>
            </div>
            <div className="flex items-center justify-between gap-md w-full text-xs">
              <Link
                href="mailto:michaelhurley.pj@gmail.com"
                className="text-xs"
              >
                <Button size="sm" variant="outline" className="text-xs">
                  <span className="text-[14px]">Email Me</span>
                </Button>
              </Link>
              <Link href="tel:+18283073591" className="text-xs">
                <Button size="sm" variant="secondary" className="text-xs">
                  <span className="text-[14px]">Call or Text Me</span>
                </Button>
              </Link>
              <Link
                href="https://koalendar.com/e/hire-michael-hurley"
                className="block"
              >
                <Button size="icon">
                  <PiCalendarPlusLight />
                </Button>
              </Link>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
