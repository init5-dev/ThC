import Link from 'next/link'

const DonationsPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='hero bg-base-200 rounded-lg shadow-lg mb-4 md:mb-8 md:w-2/3 lg:w-3/5 p-2'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-4xl font-bold mb-4'>Donaciones</h1>
            <p className='mb-6 text-justify md:text-center text-sm'>
              Si deseas colaborar con nuestra comunidad, aquí tienes una lista
              de donaciones esenciales. Puedes enviarlas directamente a nuestra
              comunidad o contactar a la{' '}
              <Link
                className='link link-success'
                href='/maestros/ayya-marajina'
                target='_blank'
                rel='noopener noreferrer'
              >
                Bhikkhuni Marajina
              </Link>{' '}
              para más información.
            </p>
            <a
              href='mailto:bhikkhuni.marajina@gmail.com'
              className='btn btn-primary gap-2'
            >
              Contactar vía Email
            </a>
          </div>
        </div>
      </div>

      <div className='card bg-base-100 shadow-lg mb-4 md:mb-8 md:w-2/3 lg:w-3/5'>
        <div className='card-body'>
          <div
            className='card-title mb-4 flex items-center justify-center'
          >
            
            <h2 className='text-2xl md:text-3xl uppercase text-yellow-500'>
              ¡Donaciones esenciales!
            </h2>
          </div>
          <p className='text-sm mb-4'>
            Estos artículos son de gran utilidad para la comunidad:
          </p>
          <ul className='list-disc list-inside text-sm'>
            <li>Medicamentos en tabletas y polvos (fáciles de transportar)</li>
            <li>Repelentes de insectos, especialmente para mosquitos</li>
            <li>Cepillos de dientes y pasta dental</li>
            <li>
              Productos de higiene personal (jabones, desodorantes, toallas
              sanitarias)
            </li>
            <li>Vitaminas para niños y adultos</li>
            <li>Suplementos de hierro</li>
            <li>Antihistamínicos (para alergias)</li>
            <li>Analgésicos como aspirina y acetaminofén (Duralgina)</li>
            <li>Compotas o purés para bebés</li>
            <li>Leche en polvo</li>
            <li>Frutos secos como nueces, almendras o maní</li>
            <li>Juguetes pequeños y ligeros (fáciles de transportar)</li>
            <li>Bolígrafos y útiles escolares</li>
            <li>Comidas en sobres o latas (ej. atún, sopas instantáneas)</li>
            <li>Otros artículos de primera necesidad que puedas donar.</li>
          </ul>
        </div>
      </div>

      <div className='alert alert-success shadow-lg mb-4 md:mb-8 md:w-2/3 lg:w-3/5'>
        <div className='flex gap-4 items-center justify-center'>
          <svg
            height='48px'
            width='48px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
          >
            <circle style={{ fill: '#B5F1F4' }} cx='256' cy='256' r='256' />
            <path
              style={{ fill: '#84DBFF' }}
              d='M507.475,304.064L401.051,197.641l-6.177,9.392l-60.469-60.469l-97.249,131.272L95.068,310.046 l46.551,46.551l-54.858,12.809l141.04,141.04c9.261,1.015,18.665,1.553,28.196,1.553C380.954,512,484.979,422.471,507.475,304.064z'
            />
            <path
              style={{ fill: '#66B31B' }}
              d='M420.547,369.407c-38.66-38.409-108.38-51.284-166.891-33.77 c-58.511-17.515-128.231-4.639-166.89,33.768l-0.002,0.002l0,0c51.336,26.465,119.293,24.333,166.891-2.048 C301.256,393.74,369.211,395.873,420.547,369.407L420.547,369.407L420.547,369.407z'
            />
            <path
              style={{ fill: '#599B13' }}
              d='M253.655,367.361c47.599,26.381,115.555,28.512,166.891,2.048l0,0l0,0 c-38.66-38.409-108.38-51.284-166.891-33.77V367.361z'
            />
            <path
              style={{ fill: '#FF80AA' }}
              d='M256,342.693l-40.539-40.539c-34.257-34.257-34.257-89.8,0-124.057L256,137.559l40.539,40.539 c34.257,34.257,34.257,89.8,0,124.057L256,342.693z'
            />
            <path
              style={{ fill: '#FF6472' }}
              d='M256,137.559l40.539,40.539c34.257,34.257,34.257,89.8,0,124.057L256,342.693V137.559z'
            />
            <path
              style={{ fill: '#E2407E' }}
              d='M334.407,146.565l-50.638,26.879c-42.793,22.714-59.068,75.819-36.354,118.612l26.881,50.638 l50.638-26.879c42.793-22.714,59.068-75.819,36.354-118.612L334.407,146.565z'
            />
            <path
              style={{ fill: '#FD5790' }}
              d='M232.372,342.693l-50.638-26.879c-42.793-22.714-59.068-75.819-36.354-118.612l26.881-50.638 l50.638,26.879c42.792,22.714,59.068,75.819,36.354,118.612L232.372,342.693z'
            />
            <path
              style={{ fill: '#BC2864' }}
              d='M401.051,197.642h-57.33c-48.447,0-87.721,39.274-87.721,87.721v57.33h57.33 c48.447,0,87.721-39.274,87.721-87.721V197.642z'
            />
            <path
              style={{ fill: '#A01F5A' }}
              d='M446.492,265.812L446.492,265.812C372.872,234.225,287.585,268.3,256,341.921l0,0l0,0 C329.619,373.508,414.906,339.434,446.492,265.812L446.492,265.812z'
            />
            <path
              style={{ fill: '#E2407E' }}
              d='M256,342.693h-57.33c-48.447,0-87.721-39.274-87.721-87.721v-57.33h57.33 c48.447,0,87.721,39.274,87.721,87.721V342.693z'
            />
            <path
              style={{ fill: '#BC2864' }}
              d='M256,341.921L256,341.921c-73.619,31.587-158.906-2.488-190.492-76.109l0,0l0,0 C139.128,234.225,224.415,268.302,256,341.921L256,341.921z'
            />
          </svg>

          <span className='font-semibold text-justify  text-sm'>
            ¡Gracias por tu apoyo! Cada pequeña donación cuenta para ayudar a
            nuestra comunidad.
          </span>
        </div>
      </div>
    </div>
  )
}

export default DonationsPage
