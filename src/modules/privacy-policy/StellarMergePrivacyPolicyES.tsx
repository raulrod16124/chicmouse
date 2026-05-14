import {
  Shield,
  Database,
  Scale,
  Target,
  Link2,
  CreditCard,
  Clock,
  Cookie,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
} from 'lucide-react';
import {
  PrivacyPolicyWrapper,
  PolicyHero,
  PolicyHeroIconWrapper,
  PolicyHeroEyebrow,
  PolicyHeroTitle,
  PolicyHeroMeta,
  PrivacyPolicyContent,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  TextSubtitle,
  Text,
  TextList,
} from './PrivacyPolicy.styles';

export const StellarMergePrivacyPolicyES = () => {
  return (
    <PrivacyPolicyWrapper data-testid="stellar-merge-privacy-policy-es-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <Shield size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>Stellar Merge &middot; Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Pol&iacute;tica de Privacidad</PolicyHeroTitle>
        <PolicyHeroMeta>
          &Uacute;ltima actualizaci&oacute;n: 14 de mayo de 2026
        </PolicyHeroMeta>
      </PolicyHero>

      <PrivacyPolicyContent>
        <PolicyIntro>
          <Text>
            Esta Pol&iacute;tica de Privacidad describe c&oacute;mo ChicMouse
            recopila, usa y protege tu informaci&oacute;n cuando juegas a
            Stellar Merge. Nos comprometemos a gestionar tus datos con cuidado y
            total transparencia.
          </Text>
        </PolicyIntro>

        {/* 1. Responsable del Tratamiento */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <UserCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. Responsable del Tratamiento</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Merge es desarrollado y operado por ChicMouse
            (&ldquo;nosotros&rdquo;, &ldquo;nos&rdquo;, &ldquo;nuestro&rdquo;).
            Para cualquier consulta relacionada con la privacidad,
            cont&aacute;ctanos en:{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>

        {/* 2. Datos que Recopilamos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Database size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Datos que Recopilamos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Recopilamos &uacute;nicamente los datos m&iacute;nimos necesarios
            para operar el juego:
          </Text>
          <TextList>
            <li>
              <strong>Datos de cuenta:</strong> nombre de usuario y apariencia
              del avatar elegidos durante el registro. No recopilamos tu nombre
              real, direcci&oacute;n de correo electr&oacute;nico ni
              n&uacute;mero de tel&eacute;fono.
            </li>
            <li>
              <strong>Datos de juego:</strong> progreso, puntuaciones, logros,
              resultados de desaf&iacute;os diarios, membres&iacute;as en clanes
              y estad&iacute;sticas de partidas.
            </li>
            <li>
              <strong>Identificadores t&eacute;cnicos:</strong> un ID de
              sesi&oacute;n an&oacute;nimo generado por Firebase Authentication
              para mantener tu sesi&oacute;n. Este ID no est&aacute; vinculado a
              ninguna identidad del mundo real.
            </li>
            <li>
              <strong>Datos del dispositivo:</strong> tipo b&aacute;sico de
              dispositivo y versi&oacute;n del sistema operativo para fines de
              compatibilidad e informes de errores.
            </li>
            <li>
              <strong>Identificador publicitario (GAID):</strong> un
              identificador de dispositivo restablecible utilizado por Google
              AdMob para mostrar anuncios en el juego. Puedes restablecerlo o
              desactivarlo en Ajustes del dispositivo &rarr; Google &rarr;
              Anuncios.
            </li>
          </TextList>
        </PolicySection>

        {/* 3. Base Legal del Tratamiento (RGPD) */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Base Legal del Tratamiento (RGPD)</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Si te encuentras en el Espacio Econ&oacute;mico Europeo (EEE),
            tratamos tus datos sobre las siguientes bases legales:
          </Text>
          <TextList>
            <li>
              <strong>Necesidad contractual (Art. 6(1)(b) RGPD):</strong> para
              proporcionar la funcionalidad del juego que has solicitado.
            </li>
            <li>
              <strong>Intereses leg&iacute;timos (Art. 6(1)(f) RGPD):</strong>{' '}
              para mantener la integridad del juego, prevenir abusos y mejorar
              la experiencia de juego.
            </li>
          </TextList>
        </PolicySection>

        {/* 4. C&oacute;mo Usamos tus Datos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Target size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. C&oacute;mo Usamos tus Datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>Utilizamos tus datos exclusivamente para:</Text>
          <TextList>
            <li>Guardar y sincronizar tu progreso de juego</li>
            <li>Mostrar clasificaciones globales y tablas de l&iacute;deres</li>
            <li>
              Gestionar membres&iacute;as en clanes y solicitudes de amistad
            </li>
            <li>Ofrecer desaf&iacute;os diarios y contenido de temporada</li>
            <li>Diagnosticar problemas t&eacute;cnicos</li>
          </TextList>
          <Text>
            No vendemos, alquilamos ni compartimos tus datos personales con
            terceros con fines publicitarios, de marketing o comerciales. No
            mostramos publicidad de terceros en el juego.
          </Text>
        </PolicySection>

        {/* 5. Encargados del Tratamiento */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Link2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Encargados del Tratamiento</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Utilizamos Google Firebase (Cloud Firestore y Firebase
            Authentication) como proveedor de infraestructura de datos. Google
            act&uacute;a como encargado del tratamiento en nuestro nombre bajo
            cl&aacute;usulas contractuales est&aacute;ndar. Los datos de
            Firebase se almacenan dentro de la Uni&oacute;n Europea. Para
            m&aacute;s informaci&oacute;n, consulta la{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer">
              Pol&iacute;tica de Privacidad de Google
            </a>
            .
          </Text>
          <Text>
            No utilizamos redes publicitarias de terceros, SDKs de redes
            sociales ni herramientas de anal&iacute;tica m&aacute;s all&aacute;
            de Firebase.
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
            Si realizas compras dentro de la aplicaci&oacute;n, la
            facturaci&oacute;n es gestionada exclusivamente por Google Play. No
            procesamos ni almacenamos informaci&oacute;n de tu tarjeta de pago.
            Se aplica la{' '}
            <a
              href="https://payments.google.com/payments/apis-secure/policies/privacy"
              target="_blank"
              rel="noopener noreferrer">
              pol&iacute;tica de privacidad de pagos de Google
            </a>
            .
          </Text>
        </PolicySection>

        {/* 7. Conservaci&oacute;n de Datos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Clock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>7. Conservaci&oacute;n de Datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Conservamos tus datos de juego mientras tu cuenta est&eacute;
            activa. Las cuentas inactivas durante m&aacute;s de 24 meses
            podr&aacute;n ser eliminadas. Puedes solicitar la eliminaci&oacute;n
            inmediata en cualquier momento (consulta la Secci&oacute;n 9).
          </Text>
        </PolicySection>

        {/* 8. Cookies y Almacenamiento Local */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Cookie size={20} />
            </PolicySectionIcon>
            <TextSubtitle>8. Cookies y Almacenamiento Local</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            La versi&oacute;n web del juego utiliza localStorage del navegador
            para guardar tus preferencias (idioma, ajustes de sonido, tema) y el
            estado de la sesi&oacute;n. No utilizamos cookies de seguimiento,
            cookies publicitarias ni cookies de terceros de ning&uacute;n tipo.
          </Text>
        </PolicySection>

        {/* 9. Tus Derechos */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Shield size={20} />
            </PolicySectionIcon>
            <TextSubtitle>9. Tus Derechos</TextSubtitle>
          </PolicySectionHeader>
          <Text>Dependiendo de tu ubicaci&oacute;n, tienes derecho a:</Text>
          <TextList>
            <li>
              <strong>Acceso:</strong> solicitar una copia de los datos que
              tenemos sobre ti.
            </li>
            <li>
              <strong>Rectificaci&oacute;n:</strong> solicitar la
              correcci&oacute;n de datos inexactos.
            </li>
            <li>
              <strong>Supresi&oacute;n:</strong> solicitar la eliminaci&oacute;n
              de tu cuenta y todos los datos asociados.
            </li>
            <li>
              <strong>Portabilidad:</strong> recibir tus datos en un formato
              estructurado y legible por m&aacute;quina.
            </li>
            <li>
              <strong>Oposici&oacute;n:</strong> oponerte al tratamiento basado
              en intereses leg&iacute;timos.
            </li>
            <li>
              <strong>Limitaci&oacute;n:</strong> solicitar que limitemos el
              tratamiento de tus datos.
            </li>
          </TextList>
          <Text>
            Para ejercer cualquiera de estos derechos, escr&iacute;benos a:{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>.
            Responderemos en un plazo de 30 d&iacute;as.
          </Text>
          <Text>
            Si te encuentras en el EEE, tambi&eacute;n tienes derecho a
            presentar una reclamaci&oacute;n ante la autoridad de
            supervisi&oacute;n de protecci&oacute;n de datos de tu pa&iacute;s
            (por ejemplo, la AEPD en Espa&ntilde;a:{' '}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer">
              https://www.aepd.es
            </a>
            ).
          </Text>
        </PolicySection>

        {/* 10. Menores de Edad */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Baby size={20} />
            </PolicySectionIcon>
            <TextSubtitle>10. Menores de Edad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Merge no est&aacute; dirigido a menores de 13 a&ntilde;os
            (ni de 16 en determinados estados miembros de la UE). No recopilamos
            conscientemente datos personales de menores de estas edades. Si eres
            padre, madre o tutor legal y crees que tu hijo/a ha proporcionado
            datos personales, cont&aacute;ctanos en{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a> y los
            eliminaremos de inmediato.
          </Text>
        </PolicySection>

        {/* 11. Cambios en esta Pol&iacute;tica */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>11. Cambios en esta Pol&iacute;tica</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Podemos actualizar esta pol&iacute;tica peri&oacute;dicamente. Los
            cambios significativos se comunicar&aacute;n mediante un aviso
            dentro de la aplicaci&oacute;n. La fecha en la parte superior de
            este documento refleja la actualizaci&oacute;n m&aacute;s reciente.
          </Text>
        </PolicySection>

        {/* 12. Contacto */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Mail size={20} />
            </PolicySectionIcon>
            <TextSubtitle>12. Contacto</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            ChicMouse &mdash;{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};
