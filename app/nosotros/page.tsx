import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  const members = [
    {
      name: 'Maricela',
      role: 'Coordinadora', 
      src: '/Maricela.jpg'
    },
    {
      name: 'Karla',
      role: 'Miembro fundador', 
      src: '/Karla.jpg'
    }, 
    {
      name: 'Baby',
      role: 'Miembro fundador', 
      src: '/Baby.jpg'
    },
    {
      name: 'Adán',
      role: 'Miembro fundador', 
      src: '/Adán.jpg'
    },
    {
      name: 'Douglas',
      role: 'Relaciones', 
      src: '/Douglas.jpg'
    }, 
    {
      name: 'Yasmany',
      role: 'Miembro fundador', 
      src: '/Yasmany.jpg'
    },
  ]
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-base-200 p-8 text-sm text-justify'>
      <div>
        <h1 className='text-4xl font-bold text-center mb-8'>Nosotros</h1>

        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          <Image
            src='/Dhammacari - Encuentro Vesak.jpeg'
            alt='Nuestro equipo'
            className='rounded-lg shadow-md'
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
        <div className='flex flex-col items-center justify-center mb-16'>
          <h2 className='text-2xl font-semibold text-center mb-4'>
            Nuestro Equipo
          </h2>
          <div className='md:grid md:grid-cols-3 gap-8 justify-center'>
            {members.map(({name, role, src}, index) => (
              <div
                key={index}
                className='card m-4 w-60 bg-base-100 shadow-xl text-center transition-all duration-200 ease-in-out transform element-on-scroll hover:scale-3 hover:scale-105'
              >
                <div className='avatar mt-4'>
                  <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto'>
                    <Image
                      src={src}
                      alt={`${role}`}
                      width={320}
                      height={240}
                    />
                  </div>
                </div>
                <div className='card-body flex flex-col items-center justify-center'>
                  <h3 className='card-title text-lg text-center'>{name}</h3>
                  <p className='text-center'>
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div>
            <h2 className='text-2xl font-semibold text-center mb-4'>
              Nuestra Misión
            </h2>
            <p className='leading-relaxed'>
              Difundimos las enseñanzas del Buda, cultivando una comunidad
              basada en el Noble Óctuple Sendero. Al seguir el Noble Óctuple
              Sendero, contribuimos al bienestar y armonía de todos los seres.
            </p>

            <div className='grid md:grid-cols-2 gap-8 mt-8'>
              {[
                'Compartir el Dhamma',
                'Cultivar una vida ética',
                'Fomentar la concentración mental',
                'Desarrollar la sabiduría',
                'Construir una comunidad'
              ].map((mission, idx) => (
                <div key={idx}>
                  <h3 className='text-xl font-bold text-center mb-4'>
                    {mission}
                  </h3>
                  <p className=''>
                    {mission === 'Compartir el Dhamma'
                      ? 'Hacemos accesibles las enseñanzas del Buda para que todos, sin importar su trasfondo cultural o creencias, puedan beneficiarse de su sabiduría. A través de actividades como charlas, retiros y contenido en línea, buscamos que el Dhamma esté al alcance de todos, promoviendo una vida consciente y libre de sufrimiento.'
                      : mission === 'Cultivar una vida ética'
                      ? 'Inspiramos a desarrollar una conducta moral basada en los preceptos del Buda, enfatizando la importancia de la compasión, el respeto y la integridad en nuestras acciones diarias. Creemos que vivir éticamente no solo beneficia a la persona que practica, sino que también fomenta la paz y el bienestar en la comunidad.'
                      : mission === 'Fomentar la concentración mental'
                      ? 'Guiamos en el desarrollo de una mente serena y enfocada a través de la práctica de la meditación y la atención plena. La concentración mental es fundamental para alcanzar estados de calma profunda y para liberar la mente de distracciones, permitiendo una mayor claridad y entendimiento de la naturaleza de la realidad.'
                      : mission === 'Desarrollar la sabiduría'
                      ? 'Ayudamos a cultivar la sabiduría interior que surge de la reflexión y el entendimiento profundo de las enseñanzas del Buda. Este tipo de sabiduría no se trata solo de conocimiento intelectual, sino de una comprensión vivencial que transforma la manera en que vemos y experimentamos el mundo.'
                      : 'Creamos un espacio de comunidad y apoyo mutuo, donde las personas pueden compartir sus experiencias y caminar juntas en el camino del Dhamma. En Dhammacari, fomentamos un ambiente de apertura y cooperación, donde cada miembro es valorado y apoyado en su desarrollo espiritual.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
