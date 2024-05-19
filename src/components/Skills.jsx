import Image from "next/image";

function Skills({ src, positionX, positionY }) {
  return (
    <div
      className={`w-14 h-14 bg-[#F4EEFB] flex items-center justify-center rounded-xl drop-shadow-md absolute ${positionX} ${positionY}`}
    >
      <Image src={src} width={40} height={40} alt={src} />
    </div>
  );
}

export default Skills;
