import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GonImage from "../assets/GonFreecs.jpg";
import KilluaImage from "../assets/KilluaZolldyck.jpg";
import MeruemImage from "../assets/Meruem.jpg";
import ChrolloImage from "../assets/Chrollo.jpg";
import IllumiImage from "../assets/Illumi.jpg";
import HisokaImage from "../assets/Hisoka.jpg";
import ShizukuImage from "../assets/Shizuku.jpg";
import KurapikaImage from "../assets/Kurapika.jpg"
import SilvaImage from "../assets/Silva.jpg"
import NeteroImage from "../assets/Netero.jpg"
import "./CharactersDetails.css";

const CharacterDetail = () => {
  const { id } = useParams();

  let characterInfo = {};

  if (id === "gon") {
    characterInfo = {
      personagemId: "gon",
      name: "Gon Freecss (Adult Form)",
      quote: "Amigos podem seguir caminhos diferentes, mas não deixam de ser amigos.",
      intelligence: 3,
      nen: 10,
      experience: 3,
      image: GonImage,
      ptm: false,
      zf: false,
      nenType: "Enhancement",
    };
  } else if (id === "killua") {
    characterInfo = {
      personagemId: "killua",
      name: "Killua Zoldyck",
      quote: "Gon, você é leve. Às vezes você brilha tão brilhantemente, eu devo desviar o olhar. Mas ainda assim, está tudo bem para mim ficar ao seu lado.",
      intelligence: 5,
      nen: 5,
      experience: 4,
      image: KilluaImage,
      ptm: false,
      zf: true,
      nenType: "Transmutation",
    };
  } else if (id === "meruem") {
    characterInfo = {
      personagemId: "meruem",
      name: "Meruem",
      quote: "Eu aprendi a verdadeira necessidade do poder. Que é proteger os fracos, aqueles que merecem viver. O poder não foi feito para atormentar os derrotados.",
      intelligence: 10,
      nen: 10,
      experience: 2,
      image: MeruemImage,
      ptm: false,
      zf: false,
      nenType: "Emission",
    };
  } else if (id === "chrollo") {
    characterInfo = {
      personagemId: "chrollo",
      name: "Chrollo Lucifer",
      quote: "The world is a cruel place. Those who are weak are crushed and those who are strong survive.",
      intelligence: 7.5,
      nen: 7.5,
      experience: 7.5,
      image: ChrolloImage,
      ptm: true,
      zf: false,
      nenType: "Specialization",
    };
  } else if (id === "illumi") {
    characterInfo = {
      personagemId: "illumi",
      name: "Ilummi Zoldyck",
      quote: "I am not a human being. I am an assassin.",
      intelligence: 6,
      nen: 6,
      experience: 6.5,
      image: IllumiImage,
      ptm: true,
      zf: true,
      nenType: "Manipulation",
    };
  } else if (id === "hisoka") {
    characterInfo = {
      personagemId: "hisoka",
      name: "Hisoka Morow (Post Mortem)",
      quote: "Love and hate are two sides of the same coin.",
      intelligence: 7.5,
      nen: 7.5,
      experience: 7.5,
      image: HisokaImage,
      ptm: true,
      zf: false,
      nenType: "Transmutation",
    };
  } else if (id === "shizuku") {
    characterInfo = {
      personagemId: "shizuku",
      name: "Shizuku Murasaki",
      quote: "I'm not a fighter. I'm a collector. I collect things that are beautiful and rare.",
      intelligence: 5,
      nen: 5,
      experience: 5,
      image: ShizukuImage,
      ptm: true,
      zf: false,
      nenType: "Conjuration",
    };
  }
  else if (id === "kurapika") {
    characterInfo = {
      personagemId: "kurapika",
      name: "Kurapika",
      quote: "I will capture every last one of the Phantom Troupe and avenge my clan.",
      intelligence: 6,
      nen: 4,
      experience: 4,
      image: KurapikaImage, // Certifique-se de importar a imagem de Kurapika
      ptm: false,
      zf: false,
      nenType: "Specialization"
    };
  }
  else if (id === "netero") {
    characterInfo = {
      personagemId: "netero",
      name: "Isaac Netero",
      quote: "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.",
      intelligence: 9,
      nen: 10,
      experience: 9,
      image: NeteroImage, // Certifique-se de importar a imagem de Netero
      ptm: false,
      zf: false,
      nenType: "Enhancement",
    };
  }
  else if (id === "silva") {
    characterInfo = {
      personagemId: "silva",
      name: "Silva Zoldyck",
      quote: "I do not like to kill. I love to kill. I need to kill. It's in my blood.",
      intelligence: 8,
      nen: 9,
      experience: 8.5,
      image: SilvaImage, // Certifique-se de importar a imagem de Silva
      ptm: false,
      zf: true,
      nenType: "Emission",
    };
  }
    

  return (
    <div className="character-container">
      <div className="character-card">
        <h2>{characterInfo.name}</h2>
        {characterInfo.ptm && (
          <Link to="/hxhWiki/phantomTroupe">
            <h4>Phantom Troupe Member</h4>
          </Link>
        )}
        {characterInfo.zf && (
          <Link to="/hxhWiki/zoldyckFamily">
            <h4>Zoldyck Family Member</h4>
          </Link>
        )}
        <img src={characterInfo.image} alt={characterInfo.name} />
        <div className="character-info">
          <quote className="character-quote">{characterInfo.quote}</quote>
          <p>Intelligence: {characterInfo.intelligence}/10</p>
          <p>Nen/Power: {characterInfo.nen}/10</p>
          <p>Experience: {characterInfo.experience}/10</p>
          <p>
            Nen Type:
            {characterInfo.nenType === "Emission" && (
              <Link to="/hxhWiki/nen/emission">Emission</Link>
            )}
            {characterInfo.nenType === "Transmutation" && (
              <Link to="/hxhWiki/nen/transmutation">Transmutation</Link>
            )}
            {characterInfo.nenType === "Manipulation" && (
              <Link to="/hxhWiki/nen/manipulation">Manipulation</Link>
            )}
            {characterInfo.nenType === "Enhancement" && (
              <Link to="/hxhWiki/nen/enhancement">Enhancement</Link>
            )}
            {characterInfo.nenType === "Conjuration" && (
              <Link to="/hxhWiki/nen/conjuration">Conjuration</Link>
            )}
            {characterInfo.nenType === "Specialization" && (
              <Link to="/hxhWiki/nen/specialization">Specialization</Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
