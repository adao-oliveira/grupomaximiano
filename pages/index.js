import React from "react";
import dynamic from "next/dynamic";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
import Image from 'next/image';
import Link from 'next/link';


const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

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
                  src="/images/fundo.JPG"
                  width="5184"
                  height="3456"
                  alt="img-background"
                />
              </div>
              <div className="flex justify-center">
                <Link href="/sobre">
                  <button type="button" className="btn bg-yellow-600 mt-4 text-white text-normal">Saiba mais sobre nós</button>
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
          <OurTeam />
        </div>
      </div>
      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>
    </>
  );
}
