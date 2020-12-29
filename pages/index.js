import React from "react";
import Image from 'next/image';
import Link from "next/link";


export default function Landing() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/vetores-gratis/fundo-de-particulas-abstratas-tecnologia_52683-25766.jpg?size=626&ext=jpg&ga=GA1.2.1160983724.1608940800')",
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
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Sua história começa conosco
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center flex">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Valores</h6>
                    <p className="mt-2 text-gray-600">
                      Lealdade, Integridade, confidencialidade e empatia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-xl mb-2 font-semibold leading-normal">
                  Por que nos escolher?
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto">
                <Image
                  src="/images/bgHome.JPG"
                  width="5184"
                  height="3456"
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-xl font-semibold">Uma empresa em crescimento</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Nosso sucesso é fazer nossos clientes ser o sucesso, ajudando a aumentar sua produtividade,
                    crescimento e aumento das vendas, visando colocar o cliente na era digial através de
                    nossos serviços e fazer nossos clientes a alcançarem o auge!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/servicos">
              <button type="button" className="btn btn-dark mt-4">Saiba mais sobre nossos serviços</button>
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Conheça nosso time</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Cada integrante de nosso time possui sua respectiva habilidade, conheça um pouco sobre cada um de nossos integrantes:
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                <div className="px-6">
                  <Image
                    src="/images/img-1.JPG"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Adão Oliveira</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Programador
                    </p>
                    <div>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                <div className="px-6">
                  <Image
                    src="/images/img-2.JPG"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Edna Santos</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing
                    </p>
                    <div>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                <div className="px-6">
                  <Image
                    src="/images/img-3.JPG"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Rodnei Santos</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Comercial
                    </p>
                    <div>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 ">
                <div className="px-6">
                  <Image
                    src="/images/img-4.JPG"
                    width="3456"
                    height="5184"
                    alt="..."
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Glauciane</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Tráfego pago
                    </p>
                    <div>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-redblue text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
