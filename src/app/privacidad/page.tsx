export default function PrivacidadPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Privacidad y Términos de Uso</h1>
            <p className="mt-2 text-muted-foreground">
              Última actualización: 22 de Agosto del 2025
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Privacidad</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Nos comprometemos a proteger la privacidad de nuestros usuarios.
                No recopilamos ni almacenamos información personal identificable
                sin su consentimiento. La información proporcionada por los
                usuarios se utiliza únicamente para mejorar la experiencia de
                uso de la aplicación y para brindar un servicio más
                personalizado.
              </p>
              <p>
                Esta política de privacidad explica cómo recopilamos, usamos y
                compartimos la información que usted nos proporciona cuando
                utiliza nuestra aplicación. También describe las opciones que
                tiene con respecto a sus datos y cómo puede contactarnos.
              </p>
              <p>
                Si tienes alguna pregunta o inquietud sobre nuestra política de
                privacidad, no dudes en ponerte en contacto con nuestro equipo
                de soporte.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Términos y Condiciones</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Al descargar y utilizar nuestra aplicación, aceptas cumplir con
                los siguientes términos y condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Utilizarás la aplicación únicamente para fines legales y
                  legítimos. Queda prohibido el uso de la aplicación para
                  actividades ilegales o dañinas.
                </li>
                <li>
                  Respetarás los derechos de propiedad intelectual de nuestra
                  aplicación y no intentarás copiar, modificar o distribuir
                  nuestro contenido sin autorización.
                </li>
                <li>
                  Mantendrás la confidencialidad de tu cuenta y no compartirás
                  tus credenciales de acceso con terceros.
                </li>
                <li>
                  Nos reservamos el derecho de suspender o cancelar tu acceso a
                  la aplicación si incumples estos términos y condiciones.
                </li>
              </ul>
              <p>
                Si tienes alguna pregunta o necesitas más información, no dudes
                en ponerte en contacto con nuestro equipo de soporte.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Información que recopilamos</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Nuestra aplicación no recopila ninguna información personal ni
                datos de su dispositivo. Esto significa que no almacenamos su
                nombre, dirección de correo electrónico, número de teléfono,
                ubicación, dirección IP ni ninguna otra información que pueda
                identificarlo personalmente.
              </p>
              <p>
                Tampoco recopilamos información sobre cómo usa la aplicación.
                Esto incluye las funciones que usa, la frecuencia con la que usa
                la aplicación y los dispositivos que usa para acceder a la
                aplicación.
              </p>
              <p>
                No recopilamos información sobre su dispositivo, como el tipo de
                dispositivo, el sistema operativo, la configuración del
                dispositivo o la identificación única del dispositivo.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Cómo usamos la información</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Debido a que no recopilamos ninguna información, no la usamos
                para ningún propósito. Cómo compartimos la información. No
                compartimos ninguna información con terceros, ni siquiera
                información agregada o anónima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
