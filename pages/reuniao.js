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
              <input type='nome' name="from_name" id="from_name" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Seu melhor e-mail</label>
              <input type="email" name="reply_to" id="reply_to" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Número para contato</label>
              <input type="tell" name="telefone" id="telefone" MAXLENGTH="11" onkeypress="mascara(this)" placeholder="(xx) xxxxx-xxxx" required />
            </div>
            <div className="input-block">
              <label htmlFor='for'>Assunto...</label>
              <textarea type='assunto' className="form-control" rows="6" name="mensagem" id="mensagem" required></textarea>
            </div>
            <button type='submit' className="btn-login">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      <ul className="squares"></ul>
      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>

      <style jsx>{`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:  linear-gradient( 45deg, red, blue );
    padding-bottom: 50px;
  }
  
  h1 {
    margin-top: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    text-align: center;
  }
  
  .form-wrapper form {
    margin: 20px 0;
    background-color: white;
    padding: 30px 25px;
    border-radius: 5px;
  }
  
  .form-wrapper form .input-block {
    margin-bottom: 20px;
  }
  
  .form-wrapper form .input-block label {
    font-size: 14px;
    color: darkslateblue;
  }
  
  .form-wrapper form .input-block input {
    width: 100%;
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: #111;
    border-radius: 2px;
    border: 1px solid #ccddef;
    outline-color: #ffd700;
  }
  
  .form-wrapper form .btn-login {
    display: block;
    min-width: 120px;
    border: none;
    background-color: #111;
    color: white;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
  }
  
  /* APARIÇÃO DO FORM */
  .form-wrapper form {
    overflow: hidden;
    animation: fade 0.2s;
  }
  
  .form-wrapper form .input-block:nth-child(1) {
    animation: move 500ms;
  }
  
  .form-wrapper form .input-block:nth-child(2) {
    animation: move 400ms;
    animation-delay: 100ms;
    animation-fill-mode: backwards;
  }
  
  .form-wrapper form .btn-login {
    animation: move 400ms;
    animation-delay: 250ms;
    animation-fill-mode: backwards;
    cursor: pointer;
  }
  
  .form-wrapper form .btn-login:hover {
    background-color:rgba(0, 187, 0, 0.748);
  }
  
  @keyframes move {
    from {
      opacity: 0;
      transform: translateX(-35%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  
  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* Quando clicar no botão, sumir com o form */
  .form-hide {
    animation: down 1.2s forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  
  @keyframes down {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100vh);
    }
  }
  
  /* FORM NO-NO */
  
  form.validate-error {
    animation: nono 200ms linear, fade paused;
    animation-iteration-count: 2;
  }
  
  @keyframes nono {
    0%,
    100% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-15%);
    }
    70% {
      transform: translateX(15%);
    }
  }
  
  /* squares */
  body {
    overflow: hidden;
  }
  .squares li {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    display: block;
    position: absolute;
    bottom: -40px;
    animation: up 2s infinite alternate;
    z-index:-1
  }
  
  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
    }
    to {
      transform: translateY(-800px) rotate(960deg);
    }
  }
`}</style>

    </>
  )
}

export default SignIn
