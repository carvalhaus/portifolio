import { Playball } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import Skills from "./Skills";
import Link from "next/link";

const playball = Playball({ weight: "400", subsets: ["latin"] });

function Info() {
  return (
    <section className="py-4 h-[408px] flex items-center justify-evenly max-sm:flex-col max-sm:h-[824px] max-sm:justify-between">
      <div className="w-1/2 max-sm:w-full flex flex-col gap-6 max-sm:items-center">
        <h2 className="uppercase text-[#0C3441] font-extrabold text-2xl tracking-wide max-sm:text-center">
          Desenvolvedor Web FullStack
        </h2>
        <h3 className={`${playball.className} text-3xl`}>
          Olá, sou o João Pedro
        </h3>
        <p className="text-lg font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat
          iusto quo in quidem quasi aliquam libero pariatur? Perferendis
          deleniti, sapiente fugit architecto nesciunt eos labore eius sed unde
          beatae?
        </p>
        <div className="flex gap-3">
          <Button
            className="uppercase text-xl font-semibold bg-[#0C3441] hover:bg-[#0c3441d5]"
            id="projetos"
          >
            Projetos
          </Button>

          <a
            href={"https://www.linkedin.com/in/joao-pedro-carvalho-oliveira/"}
            target="_blank"
          >
            <Button
              variant="outline"
              className="uppercase text-xl font-semibold border-2 border-[#0C3441] hover:bg-[#0c34414b]"
              id="linkedin"
            >
              LinkedIn
            </Button>
          </a>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/profile_pic.png"}
          width={321}
          height={380}
          alt="Profile picture"
        />

        <Skills
          src={"/html.svg"}
          positionX={"left-6"}
          positionY={"bottom-12 "}
        />

        <Skills
          src={"/css.svg"}
          positionX={"right-5"}
          positionY={"bottom-14 "}
        />

        <Skills
          src={"/nodejs.svg"}
          positionX={"left-10"}
          positionY={"bottom-36"}
        />

        <Skills src={"/react.svg"} positionX={"right-0"} positionY={"top-32"} />

        <Skills
          src={"/mongodb.svg"}
          positionX={"left-1"}
          positionY={"top-24"}
        />

        <Skills src={"/js.svg"} positionX={"left-16"} positionY={"top-2"} />

        <Skills
          src={"/postgresql.svg"}
          positionX={"right-6"}
          positionY={"top-4"}
        />
      </div>
    </section>
  );
}

export default Info;
