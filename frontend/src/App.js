import React from "react";
import "./app.css";
import "./global.css";

import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo"></div>
        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
          <div>
            <strong>Inicio</strong> <strong>Bombas da semana</strong>{" "}
            <strong>Fato ou Fake</strong> <strong>Categorias</strong>
          </div>
        </div>
      </header>

      <div className="bar">
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>consectetur adipiscing elit</li>
          <li>Praesent fermentum semper mattis</li>
          <li>Morbi vitae porttitor turpis</li>
          <li>id malesuada eros</li>
          <li>In hac habitasse platea dictumst</li>
        </ul>

        <div className="anuncio">
          <h1>ANUNCIOS</h1>
        </div>
      </div>

      <div className="conteudo">
        <div className="card1">
          <iframe
            title="video polemico"
            src="https://www.youtube.com/embed/GP0WD64mHoA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              fermentum semper mattis. Morbi vitae porttitor turpis, id
              malesuada eros. In hac habitasse platea dictumst. Sed pharetra,
              enim ut tempor tempus, elit tortor condimentum lectus, et
              scelerisque tortor mi nec magna. Vivamus tempor urna purus, ac
              lacinia lectus viverra et. Donec tristique velit vel velit
              egestas, vel fringilla est aliquam. Vestibulum eget mattis dui.
              Mauris accumsan libero at volutpat bibendum. Phasellus et nunc
              ligula.
            </p>
          </div>
        </div>
        <div className="card2">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <img src={img1} alt="image1" />
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fermentum semper mattis. Morbi vitae porttitor turpis, id malesuada
            eros. In hac habitasse platea dictumst. Sed pharetra, enim ut tempor
            tempus, elit tortor condimentum lectus, et scelerisque tortor mi nec
            magna. Vivamus tempor urna purus, ac lacinia lectus viverra et.
          </p>
        </div>
        <div className="card3">
          <img src={img2} alt="image2" />
          <div>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              fermentum semper mattis.
            </p>
          </div>
        </div>
        <div className="card4">
          <img src={img3} alt="image3" />
          <div>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              fermentum semper mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
