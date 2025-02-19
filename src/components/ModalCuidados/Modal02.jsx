import { useState, useEffect } from "react";

import {card02} from "../Cuidados.jsx";

export default function Modal01() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="modalCuidados" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {card02.tittle}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <img
              className="imgModalCuidados"
              src={card02.img}
              alt=""
            />

            <p className="pModalCuidados">
            {card02.h2Modal}
            </p>

            <ul className="ulModalCuidados marker:text-blue-500">
              <li className="liModalCuidados">{card02.desc01}</li>
              <li className="liModalCuidados">{card02.desc02}</li>
              <li className="liModalCuidados">{card02.desc03}</li>
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
