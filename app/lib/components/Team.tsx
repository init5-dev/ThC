import Image from "next/image"
import members from '@/app/lib/mocks/contents/members.json'

const Team = () => {
  return <div className='flex flex-col items-center justify-center mb-8'>
  <h2 className='text-2xl font-semibold text-center mb-4'>
    Nuestro Equipo
  </h2>
  <div className='md:grid md:grid-cols-3 gap-8 justify-center'>
    {members.map(({name, role, src}, index) => (
      <div
        key={index}
        className='card m-4 w-60 bg-base-100 shadow-xl text-center'
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
}

export default Team