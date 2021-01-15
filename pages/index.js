import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Sobre() {
  return (
    <>
      {/* start home */}

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
        </div>
      </div>
      <section className="bg-gray-300 -mt-24">
        <div id="our-process" className="relative">
        <div className="col-lg-8 px-4 ml-auto mr-auto text-center">
              <div className="banner-frame">
                <Image
                  className="img-thumbnail img-fluid"
                  src="/images/about-img.JPG"
                  width="5184"
                  height="3456"
                  alt="img-background"
                />
              </div>
            </div>
        </div>
      </section>

      {/* end home */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Nós somos o <span className="text-warning">Grupo Maximiano</span>
              </h2>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt."
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <Image
                  className="img-thumbnail img-fluid"
                  src="/images/img-6.JPG"
                  width="5184"
                  height="3456"
                  alt="img-background"
                />
              </div>
              <div className="flex justify-center">
                <Link href="/sobre">
                  <button type="button" className="btn bg-warning mt-4 text-dark font-semibold">Saiba mais sobre nós</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Nós somos confiáveis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Nós somos profissionais</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Nós somos especialistas</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>


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
                      src="/images/img-1.JPG"
                      width="3456"
                      height="5184"
                      alt="..."
                      className="mx-auto max-w-120-px"
                    />
                    <div className="text-center">
                      <h5 className="mt-1 text-xl font-bold">Adão Oliveira</h5>
                      <p className="text-sm text-gray-500 uppercase font-semibold">
                        Programador
                    </p>
                      <div>
                        <button
                          className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button
                          className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </button>
                        <button
                          className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fas fa-envelope-square"></i>
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
                      className="mx-auto max-w-120-px"
                    />
                    <div className="text-center">
                      <h5 className="mt-1 text-xl font-bold">Edna Santos</h5>
                      <p className="text-sm text-gray-500 uppercase font-semibold">
                        Marketing
                    </p>
                      <div>
                        <button
                          className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button
                          className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </button>
                        <button
                          className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fas fa-envelope-square"></i>
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
                      className="mx-auto max-w-120-px"
                    />
                    <div className="text-center">
                      <h5 className="mt-1 text-xl font-bold">Rodnei Santos</h5>
                      <p className="text-sm text-gray-500 uppercase font-semibold">
                        Comercial
                    </p>
                      <div>
                        <button
                          className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button
                          className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </button>
                        <button
                          className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fas fa-envelope-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-3">
                  <div className="px-6">
                    <Image
                      src="/images/img-4.JPG"
                      width="3456"
                      height="5184"
                      alt="..."
                      className="mx-auto max-w-120-px"
                    />
                    <div className="text-center">
                      <h5 className="mt-1 text-xl font-bold">Glauciane</h5>
                      <p className="text-sm text-gray-500 uppercase font-semibold">
                        Tráfego pago
                    </p>
                      <div>
                        <button
                          className="mt-3 bg-blue-600 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="bg-redblue text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button
                          className="bg-green-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </button>
                        <button
                          className="bg-blue-500 text-white w-10 h-10 outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fas fa-envelope-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>
    </>
  );
}
