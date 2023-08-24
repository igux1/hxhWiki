import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import GonImage from '../assets/GonFreecs.jpg';
import KilluaImage from '../assets/KilluaZolldyck.jpg';
import MeruemImage from '../assets/Meruem.jpg';
import Phantom1Image from '../assets/Phantom1.jpg';

const Home = () => {
  const animeLink = 'https://animesonlinecc.to/anime/hunter-x-hunter-2011/';

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bem-vindo ao Mundo de Hunter x Hunter!</h1>
        <p>Descubra um universo de aventura, poderes Nen e personagens incríveis.</p>
      </section>

      <section className="about-section">
  <h2>Sobre Hunter x Hunter</h2>
  <p>Hunter x Hunter é um aclamado anime e mangá criado por Yoshihiro Togashi. A história segue Gon Freecss em sua busca por seu pai, Ging Freecss, um lendário Hunter.</p>
  <p>Os Hunters são indivíduos com habilidades especiais que exploram o mundo em busca de tesouros, criaturas misteriosas e desafios incríveis.</p>
  <p>A série é conhecida por sua narrativa envolvente, personagens complexos e um sistema de poder chamado Nen, que permite feitos sobrenaturais.</p>
</section>


      <section className="characters-section">
        <h2>Conheça Alguns dos Personagens</h2>
        <div className="characters-container">
          <Link to="characters/gon">
            <img src={GonImage} alt="Gon" />
            <h3>Gon</h3>
          </Link>
          <Link to="characters/killua">
            <img src={KilluaImage} alt="Killua" />
            <h3>Killua</h3>
          </Link>
          <Link to="characters/meruem">
            <img src={MeruemImage} alt="Meruem" />
            <h3>Meruem</h3>
          </Link>
        </div>
      </section>
      
<section className='phantom-troupe'>
  <div>
    <h2>Conheça Sobre a Phantom Troupe</h2>
    <p>
      Também conhecida como <span>Genei Ryodan, ou 幻影旅団</span>,
      A Phantom Troupe é uma organização criminosa de 13 membros que é considerada a mais poderosa e perigosa do mundo de Hunter x Hunter.
      Eles são especialistas em combate, roubo e assassinato, e não têm medo de usar violência para conseguir o que querem.
      Quer saber mais sobre essa organização sinistra?
    </p>
    <Link to="phantomTroupe">
      <div className="image-button-container">
      <img src={Phantom1Image} alt="Killua" />
        <button className="image-button">Clique na Imagem </button>
      </div>
    </Link>
  </div>
</section>


      <section className="watch-section">
        <h2>Assista ao Anime</h2>
        <p>Você pode assistir a todos os episódios de Hunter x Hunter 2011 clicando no link abaixo. (Abrirará uma nova página no site animesonlinecc)</p>
        <a href={animeLink} className="watch-button" target="_blank" rel="noopener noreferrer">
          Assista Agora
        </a>
      </section>
    </div>
  );
}

export default Home;
