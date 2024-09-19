import Logo from "@/components/ui/logo";
import MenuTop from "@/components/ui/menu-top";
import { ContainerBoxed } from "./containers";

export default async function Header() {
  return (
    <div className="sticky left-0 right-0 w-full top-0 z-[9090]">
      <ContainerBoxed>
        <header className="flex flex-col items-stretch justify-center text-foreground m-xs md:-mx-md rounded-md shadow-2xl bg-Mantle/90 bg-gradient-to-b from-Base/90 to-Crust backdrop-blur-sm">
          <div className="flex items-center justify-between gap-md p-xs w-full grow">
            <Logo multiplier={0.5} />
            <MenuTop />
          </div>
        </header>
      </ContainerBoxed>
    </div>
  );
}
