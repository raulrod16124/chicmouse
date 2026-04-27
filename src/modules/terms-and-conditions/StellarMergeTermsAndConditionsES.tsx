import {ScrollText, BookOpen, Link2, XCircle, AlertTriangle, Scale, Globe, Mail, FileText, RefreshCw} from 'lucide-react';
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
  TextSecondarySubtitle,
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
        <PolicyHeroEyebrow>Stellar Merge · Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Términos y condiciones</PolicyHeroTitle>
        <PolicyHeroMeta>Última actualización: 03 de enero de 2024</PolicyHeroMeta>
      </PolicyHero>

      <TermsAndConditionsContent>

        <PolicyIntro>
          <Text>
            Lea atentamente estos términos y condiciones antes de utilizar Nuestro Servicio.
          </Text>
        </PolicyIntro>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><BookOpen size={20} /></PolicySectionIcon>
            <TextSubtitle>Interpretación y Definiciones</TextSubtitle>
          </PolicySectionHeader>
          <TextSecondarySubtitle>Interpretación</TextSecondarySubtitle>
          <Text>
            Las palabras cuya letra inicial está en mayúscula tienen significados
            definido bajo las siguientes condiciones. Las siguientes definiciones
            tendrán el mismo significado independientemente de que aparezcan en
            singular o en plural.
          </Text>
          <TextSecondarySubtitle>Definiciones</TextSecondarySubtitle>
          <Text>Para los efectos de estos Términos y condiciones:</Text>
          <TextList>
            <li><Text><strong>Aplicación</strong> significa el programa de software proporcionado por la Compañía descargado por Usted en cualquier dispositivo electrónico, llamado Stellar Merge</Text></li>
            <li><Text><strong>Tienda de Aplicaciones</strong> significa la distribución digital servicio operado y desarrollado por Apple Inc. (Apple App Store) o Google Inc. (Google Play Store) en la que la Aplicación ha sido descargado.</Text></li>
            <li><Text><strong>Afiliada</strong> significa una entidad que controla, es controlado por o está bajo control común con una parte, cuando &quot;controlar&quot; significa propiedad del 50% o más de las acciones.</Text></li>
            <li><Text><strong>País</strong> se refiere a: España</Text></li>
            <li><Text><strong>Compañía</strong> (denominada &quot;la Empresa&quot;, &quot;Nosotros&quot; o &quot;Nuestro&quot; en este Acuerdo) se refiere a Stellar Merge.</Text></li>
            <li><Text><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio como una computadora, un teléfono celular o una tableta digital.</Text></li>
            <li><Text><strong>Servicio</strong> se refiere a la Aplicación.</Text></li>
            <li><Text><strong>Términos y condiciones</strong> (también conocidos como &quot;Términos&quot;) significa estos Términos y condiciones que forman el acuerdo completo entre usted y la Compañía respecto al uso del servicio.</Text></li>
            <li><Text><strong>Servicio de redes sociales de terceros</strong> significa cualquier servicios o contenidos proporcionados por un tercero que pueden mostrarse, incluidos o puestos a disposición por el Servicio.</Text></li>
            <li><Text><strong>Usted</strong> se refiere a la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</Text></li>
          </TextList>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><FileText size={20} /></PolicySectionIcon>
            <TextSubtitle>Reconocimiento</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Estos son los Términos y Condiciones que rigen el uso de este Servicio
            y el acuerdo que opera entre Usted y la Compañía. Estos Términos y
            condiciones establecen los derechos y obligaciones de todos los usuarios
            respecto al uso del Servicio.
          </Text>
          <Text>
            Su acceso y uso del Servicio está condicionado a Su aceptación y
            cumplimiento de estos Términos y Condiciones. Al acceder o utilizar el
            Servicio, usted acepta estar sujeto a estos Términos y condiciones.
          </Text>
          <Text>
            Su acceso y uso del Servicio también está condicionado a Su aceptación
            y cumplimiento de la Política de Privacidad de la Empresa. Por favor lea
            nuestra política de privacidad cuidadosamente antes de utilizar Nuestro
            Servicio.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><Link2 size={20} /></PolicySectionIcon>
            <TextSubtitle>Enlaces a otros sitios web</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Nuestro Servicio puede contener enlaces a sitios web o servicios de
            terceros que no son propiedad ni están controlados por la Compañía.
          </Text>
          <Text>
            La Compañía no tiene control ni asume responsabilidad alguna por el
            contenido, las políticas de privacidad o las prácticas de cualquier
            sitio web de terceros. Le recomendamos encarecidamente que lea los
            términos y condiciones y la política de privacidad de cualquier sitio
            web o servicio de terceros que visite.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><XCircle size={20} /></PolicySectionIcon>
            <TextSubtitle>Terminación</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Podemos cancelar o suspender su acceso inmediatamente, sin previo aviso
            o responsabilidad, por cualquier motivo, incluso sin limitación si usted
            incumple estos Términos y condiciones.
          </Text>
          <Text>
            Tras la terminación, su derecho a utilizar el Servicio cesará
            inmediatamente.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><AlertTriangle size={20} /></PolicySectionIcon>
            <TextSubtitle>Limitación de responsabilidad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Sin perjuicio de los daños en los que pueda incurrir, toda la
            responsabilidad de la Compañía y cualquiera de sus proveedores bajo
            cualquier disposición de estos Términos será limitado al monto realmente
            pagado por usted a través del Servicio o 100 USD si no has comprado
            nada a través del Servicio.
          </Text>
          <Text>
            En la medida máxima permitida por la ley aplicable, en ningún caso la
            Compañía o sus proveedores serán responsables de cualquier daño especial,
            incidental, daños indirectos o consecuentes de cualquier tipo, incluso si
            la Compañía ha sido advertida de la posibilidad de tales daños.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><AlertTriangle size={20} /></PolicySectionIcon>
            <TextSubtitle>Descargo de responsabilidad &quot;TAL CUAL&quot; y &quot;SEGÚN DISPONIBILIDAD&quot;</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            El Servicio se le proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN
            DISPONIBILIDAD&quot; y con todas las fallas y defectos sin garantía de
            ningún tipo. En la medida máxima permitida por la ley aplicable, la
            Compañía renuncia expresamente a todas las garantías, ya sean expresas,
            implícitas, legales o de otro tipo.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><Scale size={20} /></PolicySectionIcon>
            <TextSubtitle>Ley que rige y Resolución de disputas</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Las leyes del País, excluyendo sus conflictos de normas legales,
            regirán estos Términos y Su uso del Servicio. Su uso de la Aplicación
            también puede estar sujeto a otras leyes locales, estatales, nacionales
            o internacionales.
          </Text>
          <Text>
            Si tiene alguna inquietud o disputa sobre el Servicio, acepta intentar
            primero resolver la disputa de manera informal comunicándose con la
            Compañía.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><Globe size={20} /></PolicySectionIcon>
            <TextSubtitle>Cumplimiento y Divisibilidad</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Si es un consumidor de la Unión Europea, se beneficiará de las
            disposiciones obligatorias de la ley del país en el que reside.
          </Text>
          <Text>
            Usted declara y garantiza que no se encuentra en un país que esté sujeto
            al embargo del gobierno de los Estados Unidos, o que haya sido designado
            como un país que &quot;apoya al terrorismo&quot;.
          </Text>
          <Text>
            Si alguna disposición de estos Términos se considera inaplicable o
            inválida, dicha disposición se modificará e interpretará para lograr los
            objetivos de dicha disposición en la mayor medida posible según la ley
            aplicable.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><RefreshCw size={20} /></PolicySectionIcon>
            <TextSubtitle>Cambios a estos términos y condiciones</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Nos reservamos el derecho, a nuestra entera discreción, de modificar o
            reemplazar estos Términos en cualquier momento. Si una revisión es
            importante, haremos esfuerzos razonables para avisar con al menos 30
            días de antelación antes de que los nuevos términos entren en vigor.
          </Text>
          <Text>
            Al continuar accediendo o utilizando Nuestro Servicio después de que
            esas revisiones entren en vigencia, usted acepta estar sujeto a los
            términos revisados.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon><Mail size={20} /></PolicySectionIcon>
            <TextSubtitle>Información de contacto</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Si tiene alguna pregunta sobre estos Términos y condiciones, puede
            contactarnos:
          </Text>
          <TextList>
            <Text>Por correo electrónico: chicmouse.group@gmail.com</Text>
            <Text>
              Visitando esta página en nuestro sitio web:{" "}
              <a href="https://chicmouse.com/contact" rel="external nofollow noopener" target="_blank">
                https://chicmouse.com/contact
              </a>
            </Text>
          </TextList>
        </PolicySection>

      </TermsAndConditionsContent>
    </TermsAndConditionsWrapper>
  );
};
