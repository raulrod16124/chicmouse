import { 
    PrivacyPolicyContent, 
    PrivacyPolicyWrapper, 
    Text, 
    TextList, 
    TextSubtitle, 
    TextTitle 
} from './PrivacyPolicy.styles';

export const PrivacyPolicyES = () => {
  return (
    <PrivacyPolicyWrapper data-testid="privacy-policy-es-page-id" >
        <PrivacyPolicyContent>
            <TextTitle>Política de privacidad</TextTitle>
            <Text>
                El sitio web chicmouse.com es propiedad de chicmouse, que es un controlador 
                de datos de tus datos personales. Hemos adoptado esta Política de privacidad, 
                que determina cómo procesamos la información recopilada por chicmouse.com, 
                que también proporciona las razones por las que debemos recopilar ciertos 
                datos personales sobre ti. Por lo tanto, debes leer esta Política de privacidad 
                antes de usar el sitio web de chicmouse.com. Cuidamos tus datos personales y 
                nos comprometemos a garantizar su confidencialidad y seguridad.
            </Text>
            <TextSubtitle>Información personal que recopilamos:</TextSubtitle>
            <Text>
                Cuando visitas chicmouse.com, recopilamos automáticamente cierta información 
                sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, 
                zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a 
                medida que navegas, recopilamos información sobre las páginas web individuales o 
                los productos que ves, qué sitios web o términos de búsqueda te remitieron a la 
                web y cómo interactúas. Nos referimos a esta información recopilada automáticamente 
                como "Información del dispositivo". Además, podemos recopilar los datos personales 
                que nos proporcionas (incluidos, entre otros, nombre, apellido, dirección, 
                información de pago, etc.) durante el registro para poder cumplir con el acuerdo.
            </Text>
            <TextSubtitle>¿Por qué procesamos tus datos?</TextSubtitle>
            <Text>
                Nuestra máxima prioridad es la seguridad de los datos del cliente y, como tal, 
                podemos procesar solo los datos mínimos del usuario, solo en la medida en que 
                sea absolutamente necesario para mantener el sitio web. La información recopilada 
                automáticamente se utiliza solo para identificar casos potenciales de abuso y 
                establecer información estadística sobre el uso del sitio web. Esta información 
                estadística no se agrega de tal manera que identifique a ningún usuario en 
                particular del sistema. Puedes visitar la web sin decirnos quién eres ni revelar 
                ninguna información por la cual alguien pueda identificarte como una persona 
                específica. Sin embargo, si deseas utilizar algunas de las funciones del sitio web, 
                o deseas recibir nuestro boletín informativo o proporcionar otros detalles al 
                completar un formulario, puedes proporcionarnos datos personales, como tu correo 
                electrónico, nombre, apellido, ciudad de residencia, organización y número de 
                teléfono. Puedes optar por no proporcionar tus datos personales, pero es posible
                que no puedas aprovechar algunas de las funciones del sitio web. Por ejemplo, 
                no podrás recibir nuestro boletín ni contactarnos directamente desde el sitio web. 
                Los usuarios que no estén seguros de qué información es obligatoria pueden ponerse 
                en contacto con nosotros a través de chicmouse.group@gmail.com.
            </Text>
            <TextSubtitle>Tus derechos:</TextSubtitle>
            <Text>
                Si eres residente europeo, tienes los siguientes derechos relacionados con tus 
                datos personales:
            </Text>
            <TextList margin='25px 0'>
                <Text>El derecho a ser informado.</Text>
                <Text>El derecho de acceso.</Text>
                <Text>El derecho a la rectificación.</Text>
                <Text>El derecho a borrar.</Text>
                <Text>El derecho a restringir el procesamiento.</Text>
                <Text>El derecho a la portabilidad de datos.</Text>
                <Text>El derecho a oponerte.</Text>
                <Text>
                    Derechos en relación con la toma de decisiones automatizada y la 
                    elaboración de perfiles.
                </Text>
            </TextList>
            <Text>
                Si deseas ejercer este derecho, comunícate con nosotros a través de la información 
                de contacto a continuación. Además, si eres residente europeo, destacamos que 
                estamos procesando tu información para cumplir con los contratos que podríamos 
                tener contigo (por ejemplo, si realizas un pedido a través de la web), o de 
                otra manera para seguir nuestros intereses comerciales legítimos enumerados 
                anteriormente. Además, ten en cuenta que tu información puede transferirse 
                fuera de Europa, incluidos Canadá y Estados Unidos.
            </Text>
            <TextSubtitle>Enlaces a otros sitios web:</TextSubtitle>
            <Text>
                Nuestra web puede contener enlaces a otros sitios web que no son de nuestra 
                propiedad ni están controlados por nosotros. Ten en cuenta que no somos 
                responsables de dichos sitios web ni de las prácticas de privacidad de terceros. 
                Te recomendamos que estés atento cuando abandones nuestro sitio web y leas 
                las declaraciones de privacidad de cada web que pueda recopilar información personal.
            </Text>
            <TextSubtitle>Seguridad de la información:</TextSubtitle>
            <Text>
                Aseguramos la información que proporcionas en servidores informáticos en un 
                entorno controlado y seguro, protegido del acceso, uso o divulgación no autorizados. 
                Mantenemos medidas de seguridad administrativas, técnicas y físicas razonables 
                para proteger contra el acceso no autorizado, el uso, la modificación y la 
                divulgación de datos personales bajo su control y custodia. Sin embargo, no se 
                puede garantizar la transmisión de datos a través de Internet o redes inalámbricas.
            </Text>
            <TextSubtitle>Divulgación legal:</TextSubtitle>
            <Text>
                Divulgaremos cualquier información que recopilemos, usemos o recibamos si así lo 
                requiere o lo permite la ley, como para cumplir con una citación o un proceso 
                legal similar, y cuando creemos de buena fe que la divulgación es necesaria para 
                proteger nuestros derechos, proteger tu seguridad o la seguridad de los demás, 
                investigar el fraude o responder a una solicitud del gobierno.
            </Text>
            <TextSubtitle>Información de contacto:</TextSubtitle>
            <Text margin='0 0 100px 0 '>
                Si deseas comunicarte con nosotros para comprender más sobre esta Política o 
                deseas comunicarte con nosotros en relación con cualquier asunto sobre los 
                derechos individuales y tu información personal, puedes enviarnos un correo 
                electrónico a chicmouse.group@gmail.com.
            </Text>
        </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  )
}
