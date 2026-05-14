import {
  ScrollText,
  CheckCircle,
  Users,
  UserCheck,
  Lock,
  Layers,
  CreditCard,
  XCircle,
  BookOpen,
  FileText,
  RefreshCw,
  AlertTriangle,
  Scale,
  Globe,
  Mail,
} from 'lucide-react';
import {
  TermsAndConditionsWrapper,
  PolicyHero,
  PolicyHeroIconWrapper,
  PolicyHeroEyebrow,
  PolicyHeroTitle,
  PolicyHeroMeta,
  TermsAndConditionsContent,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  TextSubtitle,
  Text,
  TextList,
} from './TermsAndConditions.styles';

export const StellarMergeTermsAndConditionsES = () => {
  return (
    <TermsAndConditionsWrapper data-testid="stellar-merge-terms-and-conditions-es-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <ScrollText size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>Stellar Merge &middot; Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>T&eacute;rminos y Condiciones</PolicyHeroTitle>
        <PolicyHeroMeta>
          &Uacute;ltima actualizaci&oacute;n: 14 de mayo de 2026
        </PolicyHeroMeta>
      </PolicyHero>

      <TermsAndConditionsContent>
        <PolicyIntro>
          <Text>
            Estos T&eacute;rminos y Condiciones rigen tu acceso y uso de Stellar
            Merge, un juego de puzles m&oacute;vil desarrollado por ChicMouse.
            Al descargar, instalar o jugar, aceptas estos T&eacute;rminos. Si no
            est&aacute;s de acuerdo, no uses el juego.
          </Text>
        </PolicyIntro>

        {/* 1. Aceptaci&oacute;n de los T&eacute;rminos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <CheckCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>
              1. Aceptaci&oacute;n de los T&eacute;rminos
            </TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Al acceder o utilizar Stellar Merge confirmas que tienes al menos 13
            a&ntilde;os (o 16 en determinados estados miembros de la UE) y que
            has le&iacute;do, comprendido y aceptas quedar vinculado por estos
            T&eacute;rminos.
          </Text>
        </PolicySection>

        {/* 2. Registro de Cuenta */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Users size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Registro de Cuenta</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Para guardar tu progreso y acceder a las funciones sociales (clanes,
            clasificaciones, solicitudes de amistad) debes crear una cuenta
            usando un nombre de usuario y una apariencia de avatar a tu
            elecci&oacute;n. Eres responsable de mantener seguras las
            credenciales de tu cuenta y de toda la actividad que ocurra bajo
            ella.
          </Text>
        </PolicySection>

        {/* 3. Conducta del Usuario */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <UserCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Conducta del Usuario</TextSubtitle>
          </PolicySectionHeader>
          <Text>Te comprometes a no:</Text>
          <TextList>
            <li>
              Hacer trampas, explotar errores o usar software no autorizado de
              terceros
            </li>
            <li>Acosar, amenazar o abusar de otros jugadores</li>
            <li>
              Usar nombres de usuario o mensajes ofensivos, de odio o
              discriminatorios
            </li>
            <li>
              Intentar realizar ingenier&iacute;a inversa, descompilar o
              modificar el juego
            </li>
            <li>
              Interferir con los servidores, redes o la infraestructura del
              juego
            </li>
          </TextList>
          <Text>
            Nos reservamos el derecho de suspender o prohibir permanentemente
            cuentas que infrinjan estas normas sin previo aviso.
          </Text>
        </PolicySection>

        {/* 4. Propiedad Intelectual */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Propiedad Intelectual</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Todo el contenido de Stellar Merge &mdash;incluidos, entre otros,
            ilustraciones, m&uacute;sica, c&oacute;digo, texto y
            mec&aacute;nicas de juego&mdash; es propiedad de ChicMouse o de sus
            licenciantes. Se te otorga una licencia limitada, no exclusiva, no
            transferible y revocable para jugar exclusivamente con fines
            personales y no comerciales.
          </Text>
        </PolicySection>

        {/* 5. Art&iacute;culos Virtuales y Contenido del Juego */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Layers size={20} />
            </PolicySectionIcon>
            <TextSubtitle>
              5. Art&iacute;culos Virtuales y Contenido del Juego
            </TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Cualquier moneda virtual, art&iacute;culos cosm&eacute;ticos u otro
            contenido del juego que adquieras se te licencia, no se vende. Los
            art&iacute;culos virtuales no tienen valor monetario real y no
            pueden transferirse, intercambiarse ni canjearse por dinero en
            efectivo.
          </Text>
        </PolicySection>

        {/* 6. Compras dentro de la Aplicaci&oacute;n */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <CreditCard size={20} />
            </PolicySectionIcon>
            <TextSubtitle>
              6. Compras dentro de la Aplicaci&oacute;n
            </TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Ciertas funciones o art&iacute;culos cosm&eacute;ticos pueden estar
            disponibles para su compra a trav&eacute;s de Google Play. Todas las
            transacciones son procesadas por Google Play; ChicMouse no almacena
            informaci&oacute;n de pago. Las compras son definitivas y no
            reembolsables, salvo que lo exija la legislaci&oacute;n aplicable o
            la pol&iacute;tica de reembolso de Google.
          </Text>
        </PolicySection>

        {/* 7. Actividades Prohibidas */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <XCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>7. Actividades Prohibidas</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Adem&aacute;s de las normas de conducta anteriores, est&aacute;
            prohibido:
          </Text>
          <TextList>
            <li>Vender, intercambiar o transferir tu cuenta a otra persona</li>
            <li>Usar bots automatizados, scripts o macros para jugar</li>
            <li>
              Crear m&uacute;ltiples cuentas para eludir prohibiciones u obtener
              ventajas injustas
            </li>
            <li>
              Publicar, reproducir o mostrar p&uacute;blicamente contenido del
              juego sin permiso escrito de ChicMouse
            </li>
          </TextList>
        </PolicySection>

        {/* 8. Contenido Generado por el Usuario */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <BookOpen size={20} />
            </PolicySectionIcon>
            <TextSubtitle>8. Contenido Generado por el Usuario</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Si env&iacute;as cualquier contenido a trav&eacute;s del juego (por
            ejemplo, nombres de clan, mensajes de chat), otorgas a ChicMouse una
            licencia mundial y libre de regal&iacute;as para usar, mostrar y
            moderar ese contenido en relaci&oacute;n con el juego. Conservas la
            propiedad pero eres el &uacute;nico responsable del contenido que
            env&iacute;as.
          </Text>
        </PolicySection>

        {/* 9. Privacidad */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>9. Privacidad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Tu uso de Stellar Merge tambi&eacute;n est&aacute; regido por
            nuestra{' '}
            <a href="/applications/stellar-merge/privacy-policy">
              Pol&iacute;tica de Privacidad
            </a>
            , que se incorpora a estos T&eacute;rminos por referencia.
          </Text>
        </PolicySection>

        {/* 10. Actualizaciones y Cambios en el Juego */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>
              10. Actualizaciones y Cambios en el Juego
            </TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Podemos actualizar, modificar o discontinuar cualquier
            caracter&iacute;stica de Stellar Merge en cualquier momento sin
            responsabilidad. El uso continuado del juego tras una
            actualizaci&oacute;n constituye tu aceptaci&oacute;n de los cambios.
          </Text>
        </PolicySection>

        {/* 11. Exclusiones de Responsabilidad */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <AlertTriangle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>11. Exclusiones de Responsabilidad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Merge se proporciona &ldquo;tal cual&rdquo; sin garantias de
            ning&uacute;n tipo. En la medida en que lo permita la ley, ChicMouse
            no ser&aacute; responsable de ning&uacute;n da&ntilde;o indirecto,
            incidental o consecuente derivado del uso del juego, incluida la
            p&eacute;rdida de art&iacute;culos virtuales o datos.
          </Text>
        </PolicySection>

        {/* 12. Ley Aplicable */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>12. Ley Aplicable</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Estos T&eacute;rminos se rigen por las leyes de Espa&ntilde;a.
            Cualquier disputa derivada de estos T&eacute;rminos estar&aacute;
            sujeta a la jurisdicci&oacute;n exclusiva de los tribunales de
            Espa&ntilde;a, sin perjuicio de tus derechos como consumidor bajo la
            legislaci&oacute;n de la UE aplicable.
          </Text>
        </PolicySection>

        {/* 13. Usuarios Internacionales */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>13. Usuarios Internacionales</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Merge se opera desde Espa&ntilde;a. Si accedes al juego
            desde fuera de Espa&ntilde;a, lo haces bajo tu propio riesgo y eres
            responsable del cumplimiento de tus leyes locales.
          </Text>
        </PolicySection>

        {/* 14. Cambios en estos T&eacute;rminos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>14. Cambios en estos T&eacute;rminos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Podemos actualizar estos T&eacute;rminos en cualquier momento. Los
            cambios significativos se notificar&aacute;n mediante un aviso
            dentro de la aplicaci&oacute;n. El uso continuado del juego tras la
            fecha de entrada en vigor de cualquier cambio constituye tu
            aceptaci&oacute;n de los T&eacute;rminos revisados.
          </Text>
        </PolicySection>

        {/* 15. Contacto */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Mail size={20} />
            </PolicySectionIcon>
            <TextSubtitle>15. Contacto</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            ChicMouse &mdash;{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>
      </TermsAndConditionsContent>
    </TermsAndConditionsWrapper>
  );
};
