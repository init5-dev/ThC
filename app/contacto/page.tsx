'use client'

import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    emailjs.send(
      'service_hh2vc87', 
      'template_eyty6qg', 
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      '1rEUixL_l4gvqc7Zc' 
    )
    .then(() => {
      setIsSubmitted(true)
      setForm({ name: '', email: '', message: '' }) 
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center md:px-20">
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">¿Tienes preguntas o comentarios?</h2>
            <p className="leading-relaxed">
              Nos encantaría escuchar de ti. Ya sea que tengas preguntas sobre nuestras actividades,
              quieras saber más sobre el budismo Theravada, o simplemente quieras saludarnos,
              estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto
              contigo lo antes posible.
            </p>
            <p className="leading-relaxed">
              Correo: <a href="mailto:theravada.cuba@gmail.com" className="text-primary">theravada.cuba@gmail.com</a>
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered w-full"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Correo electrónico</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="Tu correo"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="message">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="textarea textarea-bordered w-full"
                  placeholder="Tu mensaje"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Enviar
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">¡Gracias por tu mensaje!</h2>
              <p>Nos pondremos en contacto contigo pronto.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3668.7369497097566!2d-82.36207202599505!3d23.143288411815018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1725575441446!5m2!1ses!2sus"
            width="600"
            height="450"
            className="w-full h-64 rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
