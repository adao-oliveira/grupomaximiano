import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";


export default function Sobre() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x59ff,
          backgroundColor: 0x111111,
          maxDistance: 20,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <>
      {/* start home */}

      <div className="relative pb-48 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" id="main">
          <main id="blackOverlay" className="w-full h-full absolute -mt-20" ref={vantaRef}></main>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-golden font-semibold text-5xl typewrite" id="text">
                  SUA HISTÓRIA COMEÇA CONOSCO
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
      </div>
      <section className="-mt-48">
        <div id="our-process" className="relative">
          <div className="col-lg-8 px-4 ml-auto mr-auto text-center">
            <div className="banner-frame">
              <Image
                className="img-thumbnail img-fluid"
                src="/images/about-img.webp"
                width="5184"
                height="3456"
                alt="img-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* end home */}
      {/* container cards */}

      {/* NOS SOMOS O GRUPO MAXIMIANO */}

      <div className="pt-6 pb-12">
        <div className="m-2 leading-normal flex">
          <div v-for="card in cards" className="bg-white shadow-lg rounded overflow-hidden m-4 sm:flex my-12 mx-auto px-4 md:px-12">
            <div className="h-full w-full w-auto md:w-1/2">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row">
                  <div className="col-lg-6 mt-4">
                    <h2 className="noo-sh-title">
                      Nós somos o <span className="text-warning">Grupo Maximiano</span>
                    </h2>
                    <p className="text-lg">
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt."
                    </p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <div className="banner-frame">
                      <Image
                        className="img-thumbnail img-fluid"
                        src="/images/img-6.webp"
                        width="5184"
                        height="3456"
                        alt="img-background"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <Link href="/sobre">
                        <button type="button" className="btn bg-warning mt-4 text-dark font-semibold">Saiba mais sobre nós</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-30 py-12 rounded-lg">
                <div className="row my-4 mr-1 ml-1">
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg mt-5 service-block-inner">
                      <h3>Nós somos confiáveis</h3>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg mt-5 service-block-inner">
                      <h3>Nós somos profissionais</h3>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg mt-5 service-block-inner">
                      <h3>Nós somos especialistas</h3>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END */}

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">
                Conheça nosso time
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Cada integrante de nosso time possui sua respectiva habilidade, conheça um pouco sobre cada um de nossos integrantes:
                </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0">
              <div className="p-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                  <Image
                    src="/images/img-1.webp"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="mx-auto max-w-120-px"
                  />
                  <div className="px-6 py-4">
                    <h5 className="mt-1 text-xl font-bold">Adão Oliveira</h5>
                    <p className="text-sm text-gray-500 uppercase font-semibold">
                      Programador
                    </p>
                  </div>
                  <div>
                    <Link href="https://www.facebook.com/AdaoOliveira.17">
                      <button className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1" type="button">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/daoo_oliveira/">
                      <button className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1" type="button">
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1" type="button">
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                    <Link href="mailto:adao.domingos@grupomaximiano.com?Subject=Serviços%20Grupo%20Maximiano&Body=Digite%20uma%20mensagem...">
                      <button className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1" type="button">
                        <i className="fas fa-envelope-square"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* EDNA */}
            <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0">
              <div className="p-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                  <Image
                    src="/images/img-2.webp"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="mx-auto max-w-120-px"
                  />
                  <div className="px-6 py-4">
                    <h5 className="mt-1 text-xl font-bold">Edna Santos</h5>
                    <p className="text-sm text-gray-500 uppercase font-semibold">
                      Marketing
                    </p>
                  </div>
                  <div>
                    <Link href="https://www.facebook.com/edna.maximiano">
                      <button
                        className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/edna_maximiano/">
                      <button
                        className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                    <Link href="mailto:edna.santos@grupomaximiano.com?Subject=Serviços%20Grupo%20Maximiano&Body=Digite%20uma%20mensagem...">
                      <button
                        className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-envelope-square"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RODNEI */}
            <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0">
              <div className="p-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                  <Image
                    src="/images/img-3.webp"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="mx-auto max-w-120-px"
                  />
                  <div className="px-6 py-4">
                    <h5 className="mt-1 text-xl font-bold">Rodnei Santos</h5>
                    <p className="text-sm text-gray-500 uppercase font-semibold">
                      Comercial
                    </p>
                  </div>
                  <div>
                    <Link href="https://www.facebook.com/rodneymaximianosilva">
                      <button
                        className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/rodneymaximianosilva/">
                      <button
                        className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                    <Link href="mailto:rodney.santos@grupomaximiano.com?Subject=Serviços%20Grupo%20Maximiano&Body=Digite%20uma%20mensagem...">
                      <button
                        className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-envelope-square"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GLAUCIANE */}
            <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0">
              <div className="p-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                  <Image
                    src="/images/img-4.webp"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="mx-auto max-w-120-px"
                  />
                  <div className="px-6 py-4">
                    <h5 className="mt-1 text-xl font-bold">Glauciane</h5>
                    <p className="text-sm text-gray-500 uppercase font-semibold">
                      Tráfego pago
                    </p>
                  </div>
                  <div>
                    <Link href="https://www.facebook.com/profile.php?id=100009032267080">
                      <button
                        className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/glaucianecarvalho_/">
                      <button
                        className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5511991639596&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20de%20seu%20neg%C3%B3cio.">
                      <button
                        className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                    <Link href="mailto:glauciane.carvalho@grupomaximiano.com?Subject=Serviços%20Grupo%20Maximiano&Body=Digite%20uma%20mensagem...">
                      <button
                        className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-envelope-square"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end container cards */}
      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>
    </>
  );
}
