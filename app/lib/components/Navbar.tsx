'use client'

import { useEffect, useState } from 'react'
import Facebook from './social-media/Facebook'
import WhatsApp from './social-media/WhatsApp'

const Navbar = ({ ...args }) => {
  const [navBgClass, setNavBgClass] = useState('bg-base-100')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavBgClass('bg-base-100')
      } else {
        setNavBgClass('dark-glass')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`navbar text-white ${navBgClass} z-50 md:fixed`}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='/nosotros'>Nosotros</a>
            </li>
            <li>
              <details>
                <summary>
                  <a href='/teachers'>Maestros</a>
                </summary>
                <ul className='p-2'>
                  <li>
                    <a href='/teachers/ayya-marajina'>Ayya Marajina</a>
                  </li>
                  <li>
                    <a href='/teachers/ayya-marajina'>Bhikkhu Mihita</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Recursos</summary>
                <ul className='p-2'>
                  <li>
                    <a href='/libros'>Libros</a>
                  </li>
                  <li>
                    <a href='/sitios-de-interes'>Sitios de interés</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <li>
              <a href='/contacto'>Contacto</a>
            </li>
          </ul>
        </div>
        <a href='/' className='text-lg btn btn-ghost'>
          Theravada Cuba
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/nosotros'>Nosotros</a>
          </li>
          <li>
            <details>
              <summary>
                <a href='/teachers'>Maestros</a>
              </summary>
              <ul  className={`${navBgClass} p-2 w-40`}>
                <li>
                  <a href='/teachers/ayya-marajina'>Ayya Marajina</a>
                </li>
                <li>
                  <a href='/teachers/ayya-marajina'>Bhikkhu Mihita</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Recursos</summary>
              <ul className='p-2 w-40'>
                <li>
                  <a href='/libros'>Libros</a>
                </li>
                <li>
                  <a href='/sitios-de-interes'>Sitios de interés</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/contacto'>Contacto</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Facebook />
        <WhatsApp />
      </div>
    </div>
  )
}

export default Navbar
