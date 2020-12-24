import React from 'react';
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm('default_service', 'template_qvd5itp', e.target, 'user_Tt7GNjO9FBsXikJoRoA0s')
  .then((result) => {
    alert("E-mail enviado com sucesso");
  }, (error) => {
    alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
  });
  e.target.reset()
}

const SignIn = () => {
  return (
    <>
      <section className="form-section">
      <h1>Preencha este formulário e entraremos em contato com você em breve</h1>

      <div className="form-wrapper">
        <form onSubmit={sendEmail}>
        <div className="input-block">
            <label htmlFor='for'>Nome completo</label>
            <input type='nome' name="from_name" id="from_name" required/>
          </div>
          <div className="input-block">
            <label htmlFor='for'>Seu melhor e-mail</label>
            <input type="email" name="reply_to" id="reply_to" required/>
          </div>
          <div className="input-block">
            <label htmlFor='for'>Assunto...</label>
            <textarea type='assunto'className="form-control" rows="6" name="mensagem" id="mensagem" required></textarea>
          </div>
          <button type='submit' className="btn-login">Enviar Mensagem</button>
        </form>
      </div>
    </section>

    <ul className="squares"></ul>
    </>
  )
}

export default SignIn
