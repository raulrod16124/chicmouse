import React from "react";
import { CharacterText } from "../AboutUs.styles";

export const programmerDescriptions = (language: string) => {
  const characterDescription: Record<string, JSX.Element> = {
    ProgrammerES: programmerDescriptionES(),
    ProgrammerEN: programmerDescriptionEN(),
  };

  const descriptionRef = `Programmer${language.split("-")[0].toUpperCase()}`;

  return characterDescription[descriptionRef];
};

export const designerDescriptions = (language: string) => {
  const characterDescription: Record<string, JSX.Element> = {
    DesignerES: designerDescriptionES(),
    DesignerEN: designerDescriptionEN(),
  };

  const descriptionRef = `Designer${language.split("-")[0].toUpperCase()}`;

  return characterDescription[descriptionRef];
};

const programmerDescriptionES = () => {
  return (
    <CharacterText>
      El cazador de bugs que encuentra romance en cada error de código. Su
      devoción por el café es tan fuerte como su pasión por hablar sin parar. Su
      escritorio es un campo de batalla lleno de líneas de código y tazas
      vacías. Conversar con él es como un maratón de monólogos y reflexiones
      filosóficas, que pesado!. ¡Un programador que nunca calla!
    </CharacterText>
  );
};

const programmerDescriptionEN = () => {
  return (
    <CharacterText>
      The bug hunter who finds romance in every code error. His His devotion to
      coffee is as strong as his passion for talking non-stop. His His desk is a
      battlefield filled with lines of code and mugs. empty. Talking to him is
      like a marathon of monologues and reflections philosophical, how heavy! A
      programmer who never shuts up!
    </CharacterText>
  );
};

const designerDescriptionES = () => {
  return (
    <CharacterText>
      El Diseñador Sombrío, un maestro del misterio en el mundo del diseño.
      Nadie sabe quién es, pero su habilidad para detectar errores de diseño y
      UI es legendaria. Trabaja desde las sombras, invisible pero omnipresente.
      Algunos piensan que podría ser un mito, una leyenda urbana del diseño.
      ¿Real o imaginario? Nadie lo sabe, pero sus correcciones siempre son
      impecables.
    </CharacterText>
  );
};

const designerDescriptionEN = () => {
  return (
    <CharacterText>
      The Shadow Designer, a master of mystery in the world of design. No one
      knows who he is, but his ability to spot design and UI errors is
      legendary. He works from the shadows, invisible but omnipresent. Some
      think he could be a myth, an urban legend of design. Real or imaginary?
      Nobody knows, but his corrections are always impeccable.
    </CharacterText>
  );
};
