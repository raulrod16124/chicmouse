export const appDescriptions = (appName: string, language: string) => {
  const descriptions: Record<string, JSX.Element> = {
    matchupES: matchupES(),
    matchupEN: matchupEn(),
  };

  const descriptionRef = `${appName}${language.split("-")[0].toUpperCase()}`;

  return descriptions[descriptionRef];
};

const matchupES = () => {
  return (
    <>
      <p>
        ¡Bienvenido a Matchup, el juego de emparejar cartas que te llevará a una
        emocionante aventura llena de desafíos y diversión! Pon a prueba tus
        habilidades mentales mientras avanzas a través de niveles cada vez más
        complejos, desbloqueando contenido nuevo y coleccionando cartas y
        objetos únicos en el camino.
      </p>
      <br />
      <p>CARACTERÍSTICAS PRINCIPALES:</p>
      <br />
      <p>
        🃏 Empareja Cartas Desafiantes: Pon a prueba tu memoria y agilidad
        mental al emparejar cartas con ilustraciones cautivadoras. ¡Cuánto más
        rápido emparejes, mayores serán las recompensas!{" "}
      </p>
      <br />
      <p>
        🔓 Desbloquea Contenido Nuevo: A medida que progresas en el juego, se
        revelarán emocionantes sorpresas y desbloquearás nuevos niveles y
        desafíos. ¡La diversión nunca se detiene!{" "}
      </p>
      <br />
      <p>
        🎁 Colecciona Cartas y Objetos Especiales: Cada nivel superado te
        recompensará con cartas coleccionables únicas y objetos valiosos.
        ¡Construye una impresionante colección que te diferenciará de otros
        jugadores!{" "}
      </p>
      <br />
      <p>
        🌎 Explora Diversos Escenarios: Viaja a través de múltiples escenarios
        temáticos, cada uno con su propio conjunto de cartas y desafíos únicos.{" "}
      </p>
      <br />
      <br />
      <p>
        👥 Forma Parte de una Comunidad: Únete a un grupo de entusiastas
        coleccionistas y jugadores en línea. Comparte estrategias, intercambia
        cartas y haz nuevos amigos en la comunidad.
      </p>
      <br />
      <p>
        ¿Estás listo para el reto? Sumérgete en Matchup, donde cada partida es
        un nuevo enigma por resolver. ¡Descarga el juego ahora y prepárate para
        vivir una experiencia única llena de emoción y coleccionismo!
      </p>
      <br />
      <p>
        {" "}
        ¡Advertencia!: Este juego puede resultar adictivo debido a su
        emocionante jugabilidad y su amplia variedad de contenidos
        desbloqueables. Jugar con moderación es clave para disfrutar plenamente
        de la experiencia.
      </p>
    </>
  );
};

const matchupEn = () => {
  return (
    <>
      <p>
        Welcome to Matchup, the card matching game that will take you on an
        exciting adventure full of challenges and fun! Test your mental skills
        as you progress through increasingly complex levels, unlocking new
        content and collecting unique cards and items along the way.
      </p>
      <br />
      <p>MAIN FEATURES:</p>
      <br />
      <p>
        🃏 Match Challenging Cards: Test your memory and mental agility by
        matching cards with captivating illustrations. The faster you match, the
        greater the rewards!
      </p>
      <br />
      <p>
        🔓 Unlock New Content: As you progress through the game, exciting
        surprises will be revealed and you will unlock new levels and
        challenges. The fun never stops!
      </p>
      <br />
      <p>
        🎁 Collect Cards and Special Items: Each level completed will reward you
        with unique collectible cards and valuable items. Build an impressive
        collection that will set you apart from other players!
      </p>
      <br />
      <p>
        🌎 Explore Various Settings: Travel through multiple themed settings,
        each with its own set of cards and unique challenges.
      </p>
      <br />
      <br />
      <p>
        👥 Be Part of a Community: Join a group of enthusiastic collectors and
        online players. Share strategies, trade cards, and make new friends in
        the community.
      </p>
      <br />
      <p>
        Are you ready for the challenge? Immerse yourself in Matchup, where each
        game is a new puzzle to solve. Download the game now and get ready to
        live a unique experience full of excitement and collecting!
      </p>
      <br />
      <p>
        {" "}
        Warning!: This game may be addictive due to its exciting gameplay and
        wide variety of unlockable content. Playing in moderation is key to
        fully enjoying the experience.
      </p>
    </>
  );
};
