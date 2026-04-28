import {
  Clock,
  Cookie,
  Database,
  Globe,
  Link2,
  Lock,
  RefreshCw,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
} from 'lucide-react';
import {
  PolicyDivider,
  PolicyDividerLabel,
  PolicyHero,
  PolicyHeroEyebrow,
  PolicyHeroIconWrapper,
  PolicyHeroMeta,
  PolicyHeroTitle,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
  Text,
  TextList,
  TextSecondarySubtitle,
  TextSubtitle,
} from './PrivacyPolicy.styles';

export const PrivacyPolicyES = () => {
  return (
    <PrivacyPolicyWrapper data-testid="privacy-policy-es-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <Shield size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>ChicMouse Studio &middot; Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Pol&iacute;tica de privacidad</PolicyHeroTitle>
        <PolicyHeroMeta>
          &Uacute;ltima actualizaci&oacute;n: 28 de abril de 2026
        </PolicyHeroMeta>
      </PolicyHero>

      <PrivacyPolicyContent>
        <PolicyIntro>
          <Text>
            Esta Pol&iacute;tica de Privacidad describe c&oacute;mo ChicMouse
            Studio recopila, utiliza y protege tus datos personales cuando
            visitas{' '}
            <a
              href="https://chicmouse.com/"
              rel="external nofollow noopener"
              target="_blank">
              https://chicmouse.com/
            </a>
            . L&eacute;ela atentamente antes de utilizar nuestro sitio web.
          </Text>
        </PolicyIntro>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <UserCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. Responsable del tratamiento</TextSubtitle>
          </PolicySectionHeader>
          <TextList>
            <li>
              <Text>
                <strong>Titular:</strong> ChicMouse Studio
              </Text>
            </li>
            <li>
              <Text>
                <strong>Actividad:</strong> Desarrollo de juegos m&oacute;viles
              </Text>
            </li>
            <li>
              <Text>
                <strong>Correo electr&oacute;nico:</strong> admin@chicmouse.com
              </Text>
            </li>
            <li>
              <Text>
                <strong>Sitio web:</strong> https://chicmouse.com/
              </Text>
            </li>
          </TextList>
          <Text>
            ChicMouse Studio es un proyecto independiente gestionado por un
            desarrollador individual.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Database size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Datos personales que se recopilan</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Este Sitio Web puede recopilar los siguientes datos personales:
          </Text>
          <TextList>
            <li>
              <Text>
                Nombre completo (facilitado voluntariamente a trav&eacute;s del
                formulario de contacto)
              </Text>
            </li>
            <li>
              <Text>
                Direcci&oacute;n de correo electr&oacute;nico (facilitada
                voluntariamente a trav&eacute;s del formulario de contacto)
              </Text>
            </li>
            <li>
              <Text>
                Informaci&oacute;n incluida voluntariamente en el mensaje
                enviado por el usuario
              </Text>
            </li>
          </TextList>
          <Text>
            El nombre y el correo electr&oacute;nico facilitados a trav&eacute;s
            del formulario de contacto se transmiten directamente a la bandeja
            de entrada de ChicMouse Studio con la &uacute;nica finalidad de
            atender tu consulta. Estos datos{' '}
            <strong>no se almacenan en nuestros servidores</strong>, no se ceden
            a terceros y no se crean perfiles de usuario.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Target size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Finalidad del tratamiento</TextSubtitle>
          </PolicySectionHeader>
          <Text>Los datos se utilizan exclusivamente para:</Text>
          <TextList>
            <li>
              <Text>Responder consultas enviadas por el usuario</Text>
            </li>
            <li>
              <Text>
                Mantener comunicaci&oacute;n directa relacionada con la
                solicitud
              </Text>
            </li>
          </TextList>
          <TextSecondarySubtitle>
            No se utilizar&aacute;n los datos para
          </TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>Fines comerciales</Text>
            </li>
            <li>
              <Text>Env&iacute;o de publicidad</Text>
            </li>
            <li>
              <Text>Elaboraci&oacute;n de perfiles</Text>
            </li>
          </TextList>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Legitimaci&oacute;n</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            La base legal para el tratamiento de los datos es el consentimiento
            del usuario al enviar el formulario de contacto.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Clock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Conservaci&oacute;n de los datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Los datos ser&aacute;n conservados &uacute;nicamente durante el
            tiempo necesario para:
          </Text>
          <TextList>
            <li>
              <Text>Responder la solicitud</Text>
            </li>
            <li>
              <Text>Mantener la comunicaci&oacute;n derivada</Text>
            </li>
          </TextList>
          <Text>
            Posteriormente podr&aacute;n ser eliminados o almacenados de forma
            segura si existe obligaci&oacute;n legal.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Users size={20} />
            </PolicySectionIcon>
            <TextSubtitle>6. Destinatarios de los datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>Los datos no se ceden a terceros.</Text>
          <Text>
            No obstante, pueden ser procesados por proveedores t&eacute;cnicos
            necesarios para el funcionamiento del servicio (por ejemplo,
            proveedor de correo electr&oacute;nico), bajo sus respectivas
            pol&iacute;ticas de privacidad.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <ShieldCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>7. Derechos del usuario</TextSubtitle>
          </PolicySectionHeader>
          <Text>El usuario puede ejercer los siguientes derechos:</Text>
          <TextList>
            <li>
              <Text>Acceso a sus datos personales</Text>
            </li>
            <li>
              <Text>Rectificaci&oacute;n de datos inexactos</Text>
            </li>
            <li>
              <Text>Supresi&oacute;n de sus datos</Text>
            </li>
            <li>
              <Text>Limitaci&oacute;n del tratamiento</Text>
            </li>
            <li>
              <Text>Oposici&oacute;n al tratamiento</Text>
            </li>
          </TextList>
          <Text>
            Para ejercer estos derechos, puede contactar en:{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>8. Seguridad de los datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Se adoptan medidas t&eacute;cnicas y organizativas razonables para
            proteger los datos personales frente a accesos no autorizados,
            p&eacute;rdida o alteraci&oacute;n.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Link2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>9. Enlaces a terceros</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Este Sitio Web puede contener enlaces a sitios externos. ChicMouse
            Studio no se responsabiliza de sus pol&iacute;ticas de privacidad.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>10. Modificaciones</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Esta Pol&iacute;tica de Privacidad puede actualizarse en cualquier
            momento. Los cambios ser&aacute;n publicados en esta misma
            p&aacute;gina.
          </Text>
        </PolicySection>

        <PolicyDivider>
          <PolicyDividerLabel>Pol&iacute;tica de cookies</PolicyDividerLabel>
        </PolicyDivider>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Cookie size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. &iquest;Qu&eacute; son las cookies?</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Las cookies son peque&ntilde;os archivos que se almacenan en el
            dispositivo del usuario al visitar un sitio web y que permiten
            mejorar la experiencia de navegaci&oacute;n.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Settings size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Tipos de cookies utilizadas</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Este Sitio Web utiliza &uacute;nicamente cookies t&eacute;cnicas
            necesarias para su funcionamiento. En concreto:
          </Text>
          <TextSecondarySubtitle>Cookies t&eacute;cnicas</TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>Permiten el correcto funcionamiento del sitio web</Text>
            </li>
            <li>
              <Text>
                No recopilan informaci&oacute;n personal identificable
              </Text>
            </li>
            <li>
              <Text>No se utilizan con fines publicitarios</Text>
            </li>
          </TextList>
          <TextSecondarySubtitle>
            Datos del formulario de contacto
          </TextSecondarySubtitle>
          <Text>
            Al utilizar el formulario de contacto, facilitas voluntariamente tu{' '}
            <strong>nombre</strong> y <strong>correo electr&oacute;nico</strong>
            . Estos datos no se almacenan en nuestros servidores ni en tu
            dispositivo &mdash; se transmiten directamente a la bandeja de
            entrada de ChicMouse Studio con la &uacute;nica finalidad de atender
            tu consulta. El formulario requiere que aceptes esta Pol&iacute;tica
            de Privacidad antes de enviarlo.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Uso de Google Fonts</TextSubtitle>
          </PolicySectionHeader>
          <Text>Este Sitio Web utiliza fuentes de Google Fonts.</Text>
          <Text>
            Si las fuentes se cargan desde servidores de Google, puede
            producirse una conexi&oacute;n con dichos servidores, lo que implica
            el tratamiento de la direcci&oacute;n IP del usuario. Este
            tratamiento est&aacute; sujeto a la pol&iacute;tica de privacidad de
            Google:{' '}
            <a
              href="https://policies.google.com/privacy"
              rel="external nofollow noopener"
              target="_blank">
              https://policies.google.com/privacy
            </a>
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Gesti&oacute;n de cookies</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Dado que este Sitio Web solo utiliza cookies t&eacute;cnicas
            necesarias, no se requiere consentimiento previo seg&uacute;n la
            normativa aplicable. El usuario puede, en cualquier caso, configurar
            su navegador para bloquear o eliminar cookies.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Modificaciones</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            La presente Pol&iacute;tica de Cookies puede actualizarse en
            cualquier momento. Los cambios ser&aacute;n publicados en esta misma
            p&aacute;gina.
          </Text>
        </PolicySection>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};
