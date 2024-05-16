function Menu() {
  return (
    <ul className="flex gap-10 items-center text-2xl font-light w-full justify-end max-md:hidden">
      <li>Sobre mim</li>
      <li>Projetos</li>
      <li>
        <a
          href="/files/curriculo_joao_pedro_carvalho.pdf"
          alt="Curriculo João Pedro Carvalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </li>
      <li>Contato</li>
    </ul>
  );
}

export default Menu;
