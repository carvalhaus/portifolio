import { Playball } from "next/font/google";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import TriggeredMenu from "./triggeredMenu";

const playball = Playball({ weight: "400", subsets: ["latin"] });

function Logo() {
  return (
    <div className="flex gap-8 items-center w-full max-md:gap-0 max-md:justify-between">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Logo image"
        className="max-md:hidden"
      />

      <h1 className={`${playball.className} text-4xl`}>João Pedro Carvalho</h1>

      <Sheet>
        <SheetTrigger>
          <Image
            src="/menu.svg"
            width={36}
            height={36}
            alt="Menu icon"
            className="md:hidden"
          />
        </SheetTrigger>

        <SheetContent className="h-80  flex justify-center items-center rounded-sm">
          <TriggeredMenu />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Logo;
