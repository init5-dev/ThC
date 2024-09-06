import Image from "next/image"

const History = () => {
  return <div className='lg:grid lg:grid-cols-2 lg:gap-8 mb-8'>
  <Image
    src='/Theravada-Cuba-Encuentro-Vesak-2023.jpeg'
    alt='Nuestro equipo'
    className='rounded-lg shadow-md mb-4 lg:mb-0'
    width={640}
    height={480}
  />

  <div>
    <h2 className='text-2xl font-semibold text-center mb-4'>
      Nuestra Historia
    </h2>
    <p className='mb-6'>
      Nuestra historia comienza en un pequeño rincón del Parque
      Ecológico "Monte Barreto" en el año 2019. Un grupo de personas,
      inspiradas por las enseñanzas del Buda, se reunían para meditar y
      compartir su camino espiritual. De este humilde comienzo nació
      Dhammacari, un espacio donde todos pudieran encontrar refugio y
      cultivar sabiduría.
    </p>

    <p className='mb-6'>
      Con el paso del tiempo, nuestra comunidad creció y se consolidó
      como la primera comunidad theravada de Cuba asesorada directamente
      por bhikkhus y bhikkhunis. Este hito marcó un antes y un después
      en la historia del budismo en nuestro país, estableciendo un
      puente directo con la tradición monástica y asegurando la
      autenticidad de nuestras enseñanzas.
    </p>

    <p className='mb-6'>
      La dedicación y el compromiso de nuestros miembros, junto con la
      guía del venerable Bhante Mihita Sugunasiri, han dado lugar a
      eventos de gran relevancia, como el encuentro panbudista del Vesak
      2023 y el Athangika Sila en la embajada de Sri Lanka. Estos
      eventos no solo han fortalecido nuestra comunidad, sino que
      también han contribuido a difundir las enseñanzas del Buda en Cuba
      y a fomentar el diálogo interreligioso.
    </p>

    <p className='mb-6'>
      Hoy, Dhammacari es más que un grupo de meditación; somos una
      familia espiritual que se reúne para practicar la atención plena,
      cultivar la compasión y profundizar en la comprensión de la
      naturaleza de la realidad. Nuestro compromiso es seguir creciendo
      y evolucionando, siempre fieles a las enseñanzas del Buda y
      abiertos a todos aquellos que buscan un camino hacia la
      liberación.
    </p>
  </div>
</div>
}

export default History