import React from "react";
import { useParams } from "react-router-dom";
import GonImage from "../assets/GonFreecs.jpg" // Importe a imagem do Gon
import KilluaImage from "../assets/KilluaZolldyck.jpg"; // Importe a imagem do Killua
import MeruemImage from "../assets/Meruem.jpg"; // Importe a imagem do Meruem
import ChrolloImage from "../assets/Chrollo.jpg";
import IllumiImage from "../assets/Illumi.jpg"
import HisokaImage from "../assets/Hisoka.jpg"
import "./CharactersDetails.css"

const CharacterDetail = () => {
  const { id } = useParams();

  let characterInfo = {};

  // Verifique qual é o ID do personagem atual e atribua informações personalizadas com base nesse ID
  if (id === "gon") {
    characterInfo = {
      personagemId: "gon",
      name: "Gon Freecss (Adult Form)",
      quote: "Amigos podem seguir caminhos diferentes, mas não deixam de ser amigos.",
      intelligence: 3,
      nen: 10,
      experience: 3,
      image: GonImage, 
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
    };    
  } else if (id === "illumi") {
    characterInfo = {
      personagemId: "illumi",
      name: "Ilummi Zoldyck",
      quote: "I am not a human being. I am an assassin.",
      intelligence: 6,
      nen: 5,
      experience: 6,
      image: IllumiImage, 
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
    };    
  }

  return (
    <div className="character-container">
    <div className="character-card"> {/* Container da carta */}
      <h2>{characterInfo.name}</h2>
      <img src={characterInfo.image} alt={characterInfo.name} />
      <div className="character-info"> {/* Container das informações */}
        <quote>{characterInfo.quote}</quote>
        <p>Intelligence: {characterInfo.intelligence}/10</p>
        <p>Nen/Power: {characterInfo.nen}/10</p>
        <p>Experience: {characterInfo.experience}/10</p>
      </div>
    </div>
    </div>
  );
};

export default CharacterDetail;
