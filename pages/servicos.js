import React from 'react';
import Link from 'next/link';

export default function Servicos() {
  return (
    <>
      {/* start nossos servicos */}

      <div id="services" className="relative bg-gray-200">
        <img src="/images/circle.svg" className="absolute top-0 right-0 mt-64 hidden md:block" />
        <div className="container mx-auto px-6 py-16 relative">
          <h3 className="flex flex-col items-center text-4xl text-dark font-bold">Nossos serviços<span className="bg-primary h-1 w-20 block mt-4"></span></h3>
          <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
            <img src="/images/service1.svg" className="md:w-1/3" />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Desenvolvimento Web</h4>
              <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
              <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
              <Link href="/servicos">
                <button type="button" className="btn btn-dark mt-4">Saiba mais</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
            <div className="md:mr-16 xl:mr-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Marketing Digital</h4>
              <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
              <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
              <Link href="/servicos">
                <button type="button" className="btn btn-dark mt-4">Saiba mais</button>
              </Link>
            </div>
            <img src="/images/service2.svg" className="md:w-1/3" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/images/service3.svg" className="md:w-1/3" />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Tráfego pago</h4>
              <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
              <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
              <Link href="/servicos">
                <button type="button" className="btn btn-dark mt-4">Saiba mais</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-16 md:mt-0 md:mt-16 lg:mt-0">
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Comercial</h4>
              <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
              <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
              <Link href="/servicos">
                <button type="button" className="btn btn-dark mt-4">Saiba mais</button>
              </Link>
            </div>
            <img src="/images/service1.svg" className="md:w-1/3" />
          </div>
        </div>
      </div>

      {/* end nossos servicos */}
      <div className="relative">
        <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
      </div>
    </>
  );
}
