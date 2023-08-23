import React from "react";
import { useParams } from "react-router-dom";
import GonImage from "../assets/GonFreecs.jpg" // Importe a imagem do Gon
import KilluaImage from "../assets/KilluaZolldyck.jpg"; // Importe a imagem do Killua
import MeruemImage from "../assets/Meruem.jpg"; // Importe a imagem do Meruem

const CharacterDetail = () => {
  const { id } = useParams();

  let characterInfo = {};

  // Verifique qual é o ID do personagem atual e atribua informações personalizadas com base nesse ID
  if (id === "gon") {
    characterInfo = {
      personagemId: "gon",
      name: "Gon Freecss",
      forca: 8,
      nen: 9,
      mental: 7,
      image: GonImage, 
    };
  } else if (id === "killua") {
    characterInfo = {
      personagemId: "killua",
      name: "Killua Zoldyck",
      forca: 7,
      nen: 8,
      mental: 9,
      image: KilluaImage, 
    };
  } else if (id === "meruem") {
    characterInfo = {
      personagemId: "meruem",
      name: "Meruem",
      forca: 10,
      nen: 10,
      mental: 8,
      image: MeruemImage, 
    };
  }

  return (
    <div>
      <h2>Detalhes do Personagem: {characterInfo.name}</h2>
      <img src={characterInfo.image} alt={characterInfo.name} />
      <p>Força: {characterInfo.forca}/10</p>
      <p>Nen: {characterInfo.nen}/10</p>
      <p>Mental: {characterInfo.mental}/10</p>
    </div>
  );
};

export default CharacterDetail;
