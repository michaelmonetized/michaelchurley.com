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
  PiXLight,
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
          <SheetContent className="p-0 bg-Base z-50 w-full h-dvh overflow-x-clip overflow-y-auto">
            <div className="flex flex-col items-stretch justify-start divide-y divide-y-foreground">
              <div className="flex items-center justify-between gap-md p-md w-full text-md">
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

                <SheetTrigger>
                  <PiXLight />
                </SheetTrigger>
              </div>
              <div className="flex items-center justify-between gap-md p-md w-full">
                <Link
                  href="mailto:michaelhurley.pj@gmail.com"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Email Me
                  </Button>
                </Link>
                <Link href="tel:+18283073591" className="w-full">
                  <Button variant="secondary" className="font-black w-full">
                    Call or Text Me
                  </Button>
                </Link>
              </div>

              <iframe
                src="https://koalendar.com/e/hire-michael-hurley?embed=true"
                width="100%"
                height="800px"
                frameBorder="0"
              ></iframe>
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
