import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarRedes = [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: "bi bi-instagram",
    },
    {
      id: 2,
      title: "Tiktok",
      link: "https://www.tiktok.com",
      icon: "bi bi-tiktok",
    },
  ];

  const navbarLinks = [
    { id: 1, title: "Inicio", link: "#hero", interno: true },
    { id: 2, title: "Recomendaciones", link: "#recomendaciones", interno: true }, // Cambiado a ancla
    { id: 3, title: "Relatos", link: "#relatos", interno: true },
    { id: 4, title: "Contacto", link: "#contacto", interno: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // cerrar menú móvil al hacer clic
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-900 bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        <div className="text-white text-xl font-bold tracking-widest">
          Suspiros del Más Allá
        </div>

        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110"
              onClick={handleLinkClick}
            >
              {link.title}
            </a>
          ))}

          {navbarRedes.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-125"
            >
              <i className={`${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-white hover:text-sky-100 block"
                onClick={handleLinkClick}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100"
                onClick={handleLinkClick}
              >
                <i className={`${link.icon} text-lg`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
