import React from 'react'

function DocumentationPage () {
  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
      <h1 className='text-center rainbow__text'>Que miras</h1>

      <section>
        <h2>Introducción</h2>
        <p>Esta es la documentación de nuestro proyecto. Aquí encontrarás información sobre cómo usar y contribuir a la aplicación.</p>
      </section>

      <section>
        <h2>Instalación</h2>
        <p>Para instalar este proyecto, sigue los siguientes pasos:</p>
        <ol>
          <li>Clona el repositorio: <code>git clone https://github.com/tu-repositorio.git</code></li>
          <li>Instala las dependencias: <code>npm install</code></li>
          <li>Inicia la aplicación: <code>npm start</code></li>
        </ol>
      </section>

      <section>
        <h2>Uso</h2>
        <p>Para utilizar esta aplicación, puedes navegar a través de las diferentes secciones usando la barra de navegación. Aquí hay algunas funciones clave:</p>
        <ul>
          <li><strong>Inicio:</strong> Página principal de la aplicación.</li>
          <li><strong>Documentación:</strong> Esta página con información útil.</li>
          <li><strong>Servicio de empanadas:</strong> Página dedicada a nuestro servicio de empanadas.</li>
          <li><strong>Sitios Útiles:</strong> Enlaces a recursos y sitios web útiles.</li>
        </ul>
      </section>

      <section>
        <h2>Contribución</h2>
        <p>Si deseas contribuir a este proyecto, sigue estos pasos:</p>
        <ol>
          <li>Haz un fork del repositorio.</li>
          <li>Crea una nueva rama: <code>git checkout -b feature/nueva-funcionalidad</code></li>
          <li>Realiza tus cambios y haz commit: <code>git commit -m 'Añadir nueva funcionalidad'</code></li>
          <li>Sube tus cambios: <code>git push origin feature/nueva-funcionalidad</code></li>
          <li>Abre un Pull Request.</li>
        </ol>
      </section>

      <section>
        <h2>Recursos Adicionales</h2>
        <p>Para más información, consulta los siguientes recursos:</p>
        <ul>
          <li><a href='https://reactjs.org/docs/getting-started.html' target='_blank' rel='noopener noreferrer'>Documentación de React</a></li>
          <li><a href='https://reactrouter.com/docs/en/v6/getting-started/overview' target='_blank' rel='noopener noreferrer'>Documentación de React Router</a></li>
          <li><a href='https://tailwindcss.com/docs' target='_blank' rel='noopener noreferrer'>Documentación de Tailwind CSS</a></li>
        </ul>
      </section>
    </div>
  )
}

export default DocumentationPage
