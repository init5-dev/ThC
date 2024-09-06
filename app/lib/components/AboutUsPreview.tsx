import Image from 'next/image'

const AboutUsPreview = () => {
  return (
    <div className='mb-12'>
      <h2 className='text-3xl font-semibold text-center mb-8'>
        ¡Bienvenido a Theravada Cuba!
      </h2>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        <Image
          src='/Theravada-Cuba-Encuentro-Vesak-2023.jpeg'
          alt='Theravada Cuba - Encuentro Vesak 2023'
          className='rounded-lg shadow-md w-full'
          width={640}
          height={480}
        />

        <div>
          <p className='mb-6 text-justify'>
            Theravada Cuba nació de la unión de un grupo de personas que,
            inspiradas por las enseñanzas del Buda, se reunieron en el Parque
            Ecológico "Monte Barreto" en 2019. Desde entonces, hemos crecido y
            nos hemos consolidado como una comunidad theravada en Cuba, dedicada
            a la meditación y el estudio del Dhamma.
          </p>

          <p className='mb-6 text-justify'>
            Nuestra comunidad es una familia espiritual que practica la atención
            plena y cultiva la compasión. Nos esforzamos por mantener la
            autenticidad de nuestras enseñanzas, guiados por la sabiduría de
            bhikkhus y bhikkhunis. A lo largo de los años, hemos organizado
            eventos significativos, como el encuentro panbudista del Vesak 2023
            y el Athangika Sila en la embajada de Sri Lanka.
          </p>

          <p className='mb-6 text-justify'>
            Cada miembro de Theravada Cuba está comprometido con el desarrollo
            personal y colectivo, buscando siempre profundizar en la comprensión
            del Dhamma. Nuestro objetivo es seguir creciendo y evolucionando,
            creando un espacio inclusivo para todos aquellos que buscan un
            camino hacia la liberación espiritual.
          </p>

          <p className='mb-6 text-justify'>
            Nos enorgullece ser una comunidad viva y vibrante, abierta a la
            reflexión y al aprendizaje continuo. Invitamos a todos a unirse a
            nosotros en esta senda de sabiduría y transformación.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPreview
