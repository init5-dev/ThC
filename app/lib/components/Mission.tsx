const Mission = () => {
  return <div className="mb-16">
  <div>
    <h2 className='text-3xl text-center mb-4'>
      Nuestra misión
    </h2>
    <p className='leading-relaxed text-center'>
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
          <p className='text-justify'>
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
}

export default Mission