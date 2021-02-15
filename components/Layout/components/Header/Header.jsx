import React from "react";
import Link from "next/link";

function startmenu()
{
   af.style.display = "none";
 }
 
function abrefecha()         
{
   if(af.style.display == "none")
   {
      af.style.display = "block";
   }
   else
   {
      startmenu();
   } 
}

export default function Header() {
  return (
    <>
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link href="/">
              <a className="navbar-brand">
                <h2>GRUPO MAXIMIANO</h2>
                {/* <img src="images/logo.jpg" className="logo" alt="" /> */}
              </a>
              </Link>
            </div>

            <div className="navbar-collapse collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
                id="menu"
              >
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/sobre">
                    <a className="nav-link">Sobre nós</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/servicos">
                    <a className="nav-link">Nossos serviços</a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Departamentos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/trafegoPago">
                        <a>Tráfego Pago</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/marketing">
                        <a>Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/comercial">
                        <a>Comercial</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/desenvolvimento">
                        <a>Desenvolvimento</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="https://linktree.com.br/new/GrupoMaximiano">
                    <a className="nav-link">Contate-Nos</a>
                  </Link>
                </li>
                <Link href="/reuniao">
                  <button type="button" class="btn btn-warning">MARCAR REUNIÃO</button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
