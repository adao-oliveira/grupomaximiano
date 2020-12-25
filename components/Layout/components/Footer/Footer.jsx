import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>Sobre nós</h2>
            <div className="content">
              <p>Resumo sobre nossa empresa</p>
              <div className="social">
                <a href="#"><span className="fab fa-facebook-f"></span></a>
                <a href="https://instagram.com/grupomaximiano/"><span className="fab fa-instagram"></span></a>
                <a href="#"><span className="fab fa-whatsapp"></span></a>
              </div>
            </div>
          </div>

          <div className="center box">
            <h2>Departamentos</h2>
            <div className="content">
              <ul>
                <li>
                  <a href="#">Tráfego Pago</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Comercial</a>
                </li>
                <li>
                  <a href="#">Desenvolvimento</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="center box">
            <h2>Contate-nos</h2>
            <div className="content">
              <ul>
                <li>
                  <p>
                    {" "}
                    <a href="mailto:contato@grupomaximiano.com">
                      contato@grupomaximiano.com
                    </a>
                  </p>
                </li>
                <p>
                  <li>
                    <a href="#">Contatar um departamento específico</a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="#">Que tal marcar um café?</a>
                  </li>
                </p>
              </ul>
            </div>
          </div>

          <div className="right box">
            <h2>Suporte</h2>
            <div className="content">
              <form action="#">
                <div className="name">
                  <div className="text">Nome completo *</div>
                  <input type="name" required />
                </div>
                <div className="email">
                  <div className="text">Seu Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Assunto... *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit"><a href="#">Grupo Maximiano</a></span>
            <br /><i className="far fa-copyright text-warning"></i>
            <span> {new Date().getFullYear()} Todos os Direitos reservados</span>
          </center>
        </div>
      </footer>
    </>
  );
}