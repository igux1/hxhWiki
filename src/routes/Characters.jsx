import React from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

// Importe as imagens dos personagens aqui
import GonImage from '../assets/GonFreecs.jpg';
import KilluaImage from '../assets/KilluaZolldyck.jpg';
import MeruemImage from '../assets/Meruem.jpg';
import ChrolloImage from '../assets/Chrollo.jpg';
import IllumiImage from '../assets/Illumi.jpg';
import HisokaImage from '../assets/Hisoka.jpg';

const Characters = () => {
  return (
    <div className="characters-container">
      <h1>Personagens</h1>
      <div className="character">
        <Link to="gon">
          <img src={GonImage} alt="Gon" />
          <p>Gon</p>
        </Link>
      </div>
      <div className="character">
        <Link to="killua">
          <img src={KilluaImage} alt="Killua" />
          <p>Killua</p>
        </Link>
      </div>
      <div className="character">
        <Link to="meruem">
          <img src={MeruemImage} alt="Meruem" />
          <p>Meruem</p>
        </Link>
      </div>
      <div className="character">
        <Link to="chrollo">
          <img src={ChrolloImage} alt="Chrollo" />
          <p>Chrollo</p>
        </Link>
      </div>
      <div className="character">
        <Link to="illumi">
          <img src={IllumiImage} alt="Illumi" />
          <p>Illumi</p>
        </Link>
      </div>
      <div className="character">
        <Link to="hisoka">
          <img src={HisokaImage} alt="Hisoka" />
          <p>Hisoka</p>
        </Link>
      </div>
    </div>
  );
};

export default Characters;
