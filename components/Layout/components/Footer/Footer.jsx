import React from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('default_service', 'template_11rzc34', e.target, 'user_Tt7GNjO9FBsXikJoRoA0s')
    .then((result) => {
      alert("E-mail enviado com sucesso");
    }, (error) => {
      alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
    });
  e.target.reset()
}

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
                  <a href="/desenvolvimento">Desenvolvimento</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="right box">
            <h2>Fale conosco</h2>
            <div className="content">
              <form onSubmit={sendEmail}>
                <div className="name">
                  <div className="text">Nome completo *</div>
                  <input type='nome' name="from_name" id="from_name" required />
                </div>
                <div className="email">
                  <div className="text">Seu melhor e-mail *</div>
                  <input type="email" name="reply_to" id="reply_to" required />
                </div>
                <div className="tell">
                  <div className="text">Número para contato *</div>
                  <input type="tell" name="telefone" id="telefone" onkeypress="mascara(this)" placeholder="(xx) xxxxx-xxxx" required />
                </div>
                <div className="msg">
                  <div className="text">Assunto... *</div>
                  <textarea rows="2" cols="25" type='assunto' name="mensagem" id="mensagem" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Enviar</button>
                </div>
              </form>
              <div className="center box">
              <ul className="text-center">
                <p>
                  <li>
                    <a href="#">Que tal marcar um café?</a>
                  </li>
                </p>
              </ul>
              </div>
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