import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* start home */}

      <div className="relative pb-48 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://image.freepik.com/fotos-gratis/ampola-com-grafico-do-desenho_1232-2105.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="text-block">
                <h2 className="noo-sh-title text-white text-3xl" id="textSlider">
                  Nós somos o <br /><span className="text-warning text-3xl" id="textSlider">Grupo Maximiano</span>
                </h2>
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

      {/* end home */}

      {/* start sobre a empresa */}

      <section className="bg-redblue -mt-48 pb-20">
        <div id="our-process" className="relative">
          <div className="flex flex-wrap items-center flex">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full">
                    <Image
                      className="img-fluid"
                      src="/images/missao.webp"
                      width="5184"
                      height="5184"
                      alt="img-background"
                    />
                  </div>
                  <h6 className="text-xl font-semibold">Missão</h6>
                  <p className="text-gray-600">
                    Nossa missão é satisfazer as necessidades digitais de nossos clientes através do
                    Marketing, Comercial, Tráfego pago e Programação, fazendo nossos clientes entrarem
                    na era digital
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-blue-300">
                    <Image
                      className="img-fluid"
                      src="/images/visao.webp"
                      width="5184"
                      height="3456"
                      alt="img-background"
                    />
                  </div>
                  <h6 className="text-xl font-semibold">Visão</h6>
                  <p className="text-gray-600">
                    Fazer nossos clientes alacançarem o marco da era digital
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-dark">
                    <Image
                      className="img-fluid"
                      src="/images/valores.webp"
                      width="5184"
                      height="3456"
                      alt="img-background"
                    />
                  </div>
                  <h6 className="text-xl font-semibold">Valores</h6>
                  <p className="mt-2 text-gray-600">
                    Lealdade, Integridade, confidencialidade e empatia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end sobre a empresa */}

      {/* start detalhes da empresa */}

      <section className="m-2 font-sans leading-normal flex">
        <div className="bg-white shadow-lg rounded overflow-hidden m-4 sm:flex my-12 mx-auto px-4 md:px-12">
          <div className="row flex flex-wrap -mx-1 lg:-mx-4 items-center flex flex-wrap">
            <div className="col-lg-6 mt-4 mb-4">
              <div className="banner-frame">
                <Image
                  src="/images/img-5.webp"
                  width="5184"
                  height="3456"
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4 w-full md:w-5/12 ml-auto mr-auto px-4">
              <h3 className="text-xl font-semibold mt-3">Uma empresa em crescimento</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Nosso sucesso é fazer nossos clientes ser o sucesso, ajudando a aumentar sua produtividade,
                crescimento e aumento das vendas, visando colocar o cliente na era digial através de
                nossos serviços e fazer nossos clientes a alcançarem o auge!
                </p>
              <div className="flex justify-center mb-4">
                <Link href="/servicos">
                  <button type="button" className="btn bg-warning mt-4 text-dark font-semibold">Saiba mais sobre nossos serviços</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end detalhes da empresa */}

      {/* porque nos escolher / nossas vantagens */}

      <div className="pt-6 pb-12">
        <div className="m-2 font-sans leading-normal flex">
          <div v-for="card in cards" className="bg-white shadow-lg rounded overflow-hidden m-4 sm:flex my-12 mx-auto px-4 md:px-12">
            <div className="h-full w-full w-auto md:w-1/2">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <h3 className="flex flex-col text-4xl text-dark font-normal mb-6 mt-4">
                      Por que nos escolher?
                    <span className="bg-warning h-1 w-25 block mt-4"></span>
                    </h3>
                    <p className="text-lg text-secondary-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus,
                      et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.
                    </p>
                    <p className="text-lg text-secondary-700">
                      Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                      placerat fermentum tellus. Aliquam non.
                  </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-30 py-12 rounded-lg">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <h3 className="flex flex-col text-4xl text-dark font-normal mb-6 mt-20">
                        Nossas vantagens
                        <span className="bg-warning h-1 w-25 block mt-4"></span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row my-4 mr-1 ml-1">
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3 className="text-center">Lorem ipsum</h3>
                      <Image
                        className="img-thumbnail img-fluid"
                        src="/images/bgHome.webp"
                        width="5184"
                        height="3456"
                        alt="img-background"
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3 className="text-center">Lorem ipsum</h3>
                      <Image
                        className="img-thumbnail img-fluid"
                        src="/images/bgHome.webp"
                        width="5184"
                        height="3456"
                        alt="img-background"
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3 className="text-center">Lorem ipsum</h3>
                      <Image
                        className="img-thumbnail img-fluid"
                        src="/images/bgHome.webp"
                        width="5184"
                        height="3456"
                        alt="img-background"
                      />
                      <p>
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

      {/* end */}
      {/* nosso time */}

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="mt-5 text-4xl font-semibold">Conheça nosso time</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Cada integrante de nosso time possui sua respectiva habilidade, conheça um pouco sobre cada um de nossos integrantes:
                </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
              <div className="px-6">
                <Image
                  src="/images/img-1.webp"
                  width="3456"
                  height="5184"
                  alt="..."
                  className="rounded-full mx-auto max-w-120-px"
                />
                <div className="text-center">
                  <h5 className="mt-1 text-xl font-bold">Adão Oliveira</h5>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    Programador
                    </p>
                  <div>
                    <Link href="https://www.facebook.com/AdaoOliveira.17">
                      <button
                        className="mt-3 bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/daoo_oliveira/">
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
              <div className="px-6">
                <Image
                  src="/images/img-2.webp"
                  width="3456"
                  height="5184"
                  alt="..."
                  className="rounded-full mx-auto max-w-120-px"
                />
                <div className="text-center">
                  <h5 className="mt-1 text-xl font-bold">Edna Santos</h5>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    Marketing
                    </p>
                  <div>
                    <Link href="https://www.facebook.com/edna.maximiano">
                      <button
                        className="mt-3 bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/edna_maximiano/">
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
              <div className="px-6">
                <Image
                  src="/images/img-3.webp"
                  width="3456"
                  height="5184"
                  alt="..."
                  className="rounded-full mx-auto max-w-120-px"
                />
                <div className="text-center">
                  <h5 className="mt-1 text-xl font-bold">Rodnei Santos</h5>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    Comercial
                    </p>
                  <div>
                    <Link href="https://www.facebook.com/rodneymaximianosilva">
                      <button
                        className="mt-3 bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/rodneymaximianosilva/">
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-3">
              <div className="px-6">
                <Image
                  src="/images/img-4.webp"
                  width="3456"
                  height="5184"
                  alt="..."
                  className="rounded-full mx-auto max-w-120-px"
                />
                <div className="text-center">
                  <h5 className="mt-1 text-xl font-bold">Glauciane</h5>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    Tráfego pago
                    </p>
                  <div>
                    <Link href="/">
                      <button
                        className="mt-3 bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/glaucianecarvalho_/">
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5511991639596&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20de%20seu%20neg%C3%B3cio.">
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end */}

      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>
    </>
  );
}