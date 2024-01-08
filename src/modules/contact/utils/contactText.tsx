import { Text, TextContent } from "./../Contact.styles";

export const contactText = (language: string) => {
  const contactTextLanguages: Record<string, JSX.Element> = {
    ES: textES(),
    EN: textEN(),
  };

  const descriptionRef = language.split("-")[0].toUpperCase();

  return contactTextLanguages[descriptionRef];
};

const textES = () => {
  return (
    <TextContent>
      <Text>Estimados Colegas Distinguidos,</Text>
      <Text>
        Mientras nuestros caminos se separan momentáneamente, les doy un cordial
        adiós. Que sus empeños sean tan pulidos como un Gouda perfectamente
        maduro. Si las intrincadas sendas de la vida alguna vez les llevan a
        buscar ingenio, sabiduría, o quizás solo un simpático chillido, no duden
        en ponerse en contacto. Hasta que nuestras colas se crucen de nuevo,
        manténganse agudos y mantengan la tabla de quesos cerca.
      </Text>
      <Text>Elegante y atentamente,</Text>
      <Text>Chicmouse</Text>
    </TextContent>
  );
};

const textEN = () => {
  return (
    <TextContent>
      <Text>Dear Distinguished Colleagues,</Text>
      <Text>
        As our paths part momentarily, I bid you a cordial farewell. May your
        endeavors be as polished as a perfectly ripe Gouda. If the intricate
        paths of life ever lead you to search for wit, wisdom, or perhaps just a
        friendly squeal, don't hesitate to get in touch. Until our tails cross
        again, stay sharp and keep the cheese board close.
      </Text>
      <Text>Elegantly and sincerely,</Text>
      <Text>Chicmouse</Text>
    </TextContent>
  );
};
