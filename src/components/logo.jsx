import { Playball } from "next/font/google";
import Image from "next/image";

const playball = Playball({ weight: "400", subsets: ["latin"] });

function Logo() {
  return (
    <div className="flex gap-8 items-center">
      <Image src="/logo.svg" width={40} height={40} alt="Logo image" />
      <h1 className={`${playball.className} text-4xl`}>João Pedro Carvalho</h1>
    </div>
  );
}

export default Logo;
