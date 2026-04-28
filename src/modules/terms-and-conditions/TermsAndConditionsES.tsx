import {
  Building2,
  CheckCircle,
  FileText,
  Globe,
  Link2,
  Lock,
  RefreshCw,
  Scale,
  ScrollText,
  Shield,
  ShieldAlert,
  XCircle,
} from 'lucide-react';
import {
  PolicyHero,
  PolicyHeroEyebrow,
  PolicyHeroIconWrapper,
  PolicyHeroMeta,
  PolicyHeroTitle,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  TermsAndConditionsContent,
  TermsAndConditionsWrapper,
  Text,
  TextList,
  TextSecondarySubtitle,
  TextSubtitle,
} from './TermsAndConditions.styles';

export const TermsAndConditionsES = () => {
  return (
    <TermsAndConditionsWrapper data-testid="terms-and-conditions-es-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <ScrollText size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>ChicMouse Studio · Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Términos y condiciones</PolicyHeroTitle>
        <PolicyHeroMeta>
          Última actualización: 28 de abril de 2026
        </PolicyHeroMeta>
      </PolicyHero>

      <TermsAndConditionsContent>
        <PolicyIntro>
          <Text>
            El presente documento regula el acceso y uso del sitio web{' '}
            <a
              href="https://chicmouse.com/"
              rel="external nofollow noopener"
              target="_blank">
              https://chicmouse.com/
            </a>{' '}
            (en adelante, el &quot;Sitio Web&quot;). Lea atentamente estos
            términos antes de utilizar nuestros servicios.
          </Text>
        </PolicyIntro>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Building2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Identificación</TextSubtitle>
          </PolicySectionHeader>
          <TextList>
            <li>
              <Text>
                <strong>Titular:</strong> ChicMouse Studio
              </Text>
            </li>
            <li>
              <Text>
                <strong>Actividad:</strong> Desarrollo de juegos móviles y
                contenidos digitales
              </Text>
            </li>
            <li>
              <Text>
                <strong>Correo electrónico de contacto:</strong>{' '}
                admin@chicmouse.com
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
              <CheckCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Aceptación de los términos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El acceso y uso de este Sitio Web atribuye la condición de usuario e
            implica la aceptación plena y sin reservas de los presentes Términos
            y Condiciones.
          </Text>
          <Text>
            Si no está de acuerdo con estos términos, debe abstenerse de
            utilizar el Sitio Web.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Objeto del sitio web</TextSubtitle>
          </PolicySectionHeader>
          <Text>El Sitio Web tiene como finalidad:</Text>
          <TextList>
            <li>
              <Text>Presentar información sobre ChicMouse Studio</Text>
            </li>
            <li>
              <Text>Mostrar juegos, proyectos y contenido relacionado</Text>
            </li>
            <li>
              <Text>Facilitar información de contacto</Text>
            </li>
          </TextList>
          <Text>
            El contenido del Sitio Web tiene carácter informativo y promocional.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <XCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Condiciones de uso</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El usuario se compromete a utilizar el Sitio Web de forma adecuada y
            conforme a la legislación vigente.
          </Text>
          <TextSecondarySubtitle>Queda prohibido</TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>
                Utilizar el Sitio Web con fines ilícitos o contrarios a la buena
                fe
              </Text>
            </li>
            <li>
              <Text>Intentar acceder a áreas restringidas del sistema</Text>
            </li>
            <li>
              <Text>Introducir virus, malware o cualquier código dañino</Text>
            </li>
            <li>
              <Text>
                Realizar actividades que puedan dañar, sobrecargar o deteriorar
                el Sitio Web
              </Text>
            </li>
            <li>
              <Text>
                Copiar, reproducir o distribuir contenidos sin autorización
              </Text>
            </li>
          </TextList>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Shield size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Propiedad intelectual</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Todos los contenidos del Sitio Web, incluyendo pero no limitándose
            a:
          </Text>
          <TextList>
            <li>
              <Text>Diseños y código</Text>
            </li>
            <li>
              <Text>Gráficos y logotipos</Text>
            </li>
            <li>
              <Text>Textos</Text>
            </li>
            <li>
              <Text>Videojuegos y sus elementos</Text>
            </li>
          </TextList>
          <Text>
            son propiedad de ChicMouse Studio o se utilizan con licencia, y
            están protegidos por la normativa de propiedad intelectual e
            industrial. Queda prohibida su reproducción, distribución o
            modificación sin autorización expresa del titular.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Contenidos de los juegos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Los juegos, imágenes, vídeos y materiales relacionados mostrados en
            el Sitio Web son propiedad de ChicMouse Studio. Su uso está limitado
            a fines personales e informativos.
          </Text>
          <Text>
            No está permitido su uso comercial, redistribución o modificación
            sin autorización previa.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Link2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Enlaces a terceros</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El Sitio Web puede contener enlaces a sitios web de terceros.
            ChicMouse Studio no se responsabiliza del contenido, políticas o
            prácticas de dichos sitios externos.
          </Text>
          <Text>El acceso a estos sitios es responsabilidad del usuario.</Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <ShieldAlert size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Limitación de responsabilidad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El Sitio Web se proporciona con fines informativos y se ofrece
            &quot;tal cual&quot;. ChicMouse Studio no garantiza:
          </Text>
          <TextList>
            <li>
              <Text>La disponibilidad continua del Sitio Web</Text>
            </li>
            <li>
              <Text>La ausencia de errores</Text>
            </li>
            <li>
              <Text>La exactitud o actualización de los contenidos</Text>
            </li>
          </TextList>
          <Text>
            En la medida permitida por la ley, ChicMouse Studio no será
            responsable de daños derivados del uso del Sitio Web, incluyendo
            pérdida de datos o interrupciones del servicio.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Protección de datos</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El tratamiento de los datos personales se rige por la{' '}
            <a href="/privacy-policy">Política de Privacidad</a> del Sitio Web.
            Se recomienda al usuario revisar dicha política antes de utilizar el
            Sitio Web.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Modificaciones</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            ChicMouse Studio se reserva el derecho a modificar en cualquier
            momento los presentes Términos y Condiciones. Las modificaciones
            entrarán en vigor desde su publicación en el Sitio Web.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Legislación aplicable</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Los presentes Términos y Condiciones se rigen por la legislación
            española. Para la resolución de cualquier conflicto, las partes se
            someterán a los juzgados y tribunales que correspondan conforme a la
            normativa aplicable.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Contacto</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Para cualquier consulta relacionada con estos Términos y
            Condiciones, puede contactar a través de:
          </Text>
          <TextList>
            <li>
              <Text>Correo electrónico: admin@chicmouse.com</Text>
            </li>
            <li>
              <Text>
                Sitio web:{' '}
                <a
                  href="https://chicmouse.com/"
                  rel="external nofollow noopener"
                  target="_blank">
                  https://chicmouse.com/
                </a>
              </Text>
            </li>
          </TextList>
        </PolicySection>
      </TermsAndConditionsContent>
    </TermsAndConditionsWrapper>
  );
};
