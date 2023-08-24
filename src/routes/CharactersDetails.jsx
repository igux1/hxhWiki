import React from "react";
import { useParams } from "react-router-dom";
import GonImage from "../assets/GonFreecs.jpg" // Importe a imagem do Gon
import KilluaImage from "../assets/KilluaZolldyck.jpg"; // Importe a imagem do Killua
import MeruemImage from "../assets/Meruem.jpg"; // Importe a imagem do Meruem
import "./CharactersDetails.css"

const CharacterDetail = () => {
  const { id } = useParams();

  let characterInfo = {};

  // Verifique qual é o ID do personagem atual e atribua informações personalizadas com base nesse ID
  if (id === "gon") {
    characterInfo = {
      personagemId: "gon",
      name: "Gon Freecss",
      quote:"Amigos podem seguir caminhos diferentes, mas não deixam de ser amigos.",
      forca: 8,
      nen: 9,
      mental: 7,
      image: GonImage, 
    };
  } else if (id === "killua") {
    characterInfo = {
      personagemId: "killua",
      name: "Killua Zoldyck",
      quote: "Gon, você é leve. Às vezes você brilha tão brilhantemente, eu devo desviar o olhar. Mas ainda assim, está tudo bem para mim ficar ao seu lado.",
      forca: 7,
      nen: 8,
      mental: 9,
      image: KilluaImage, 
    };
  } else if (id === "meruem") {
    characterInfo = {
      personagemId: "meruem",
      name: "Meruem",
      quote: "Eu aprendi a verdadeira necessidade do poder. Que é proteger os fracos, aqueles que merecem viver. O poder não foi feito para atormentar os derrotados.",
      forca: 10,
      nen: 10,
      mental: 8,
      image: MeruemImage, 
    };
  }

  return (
    <div className="character-container">
    <div className="character-card"> {/* Container da carta */}
      <h2>{characterInfo.name}</h2>
      <img src={characterInfo.image} alt={characterInfo.name} />
      <div className="character-info"> {/* Container das informações */}
        <quote>{characterInfo.quote}</quote>
        <p>Força: {characterInfo.forca}/10</p>
        <p>Nen: {characterInfo.nen}/10</p>
        <p>Mental: {characterInfo.mental}/10</p>
      </div>
    </div>
    </div>
  );
};

export default CharacterDetail;
