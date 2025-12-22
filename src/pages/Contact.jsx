import { useForm } from '../hooks/useForm';

export function ContactPage() {
  const validate = (values) => {
    let errors = {};
    if (!values.nombre) errors.nombre = "El nombre es obligatorio";
    if (!values.email) errors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email inválido";
    return errors;
  };

  const { values, errors, isSent, handleChange, handleSubmit } = useForm(
    { nombre: '', email: '', mensaje: '' },
    validate
  );

  if (isSent) return (
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
       <p style={{color: 'var(--primary-light)', fontSize: '1.5rem', fontWeight: 'bold'}}>
         ¡Mensaje enviado con éxito!
       </p>
    </main>
  );

  return (
    <main className="jobs-search" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ justifyContent: 'center' }}>Contacto</h1>
      <p style={{ textAlign: 'center' }}>Ponte en contacto con nuestro equipo de soporte.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '600px' }}>
        
        {/* Usamos un div envoltorio para que herede el estilo 'form > div' del CSS */}
        <div className="search-bar">
          <input 
            name="nombre" 
            type="text"
            placeholder="Tu nombre completo" 
            value={values.nombre} 
            onChange={handleChange} 
          />
        </div>
        {errors.nombre && <span style={{color: '#ff4444', marginTop: '-1rem', marginLeft: '1rem'}}>{errors.nombre}</span>}

        <div className="search-bar">
          <input 
            name="email" 
            type="email" /* Cambiado a email */
            placeholder="tu@email.com" 
            value={values.email} 
            onChange={handleChange} 
          />
        </div>
        {errors.email && <span style={{color: '#ff4444', marginTop: '-1rem', marginLeft: '1rem'}}>{errors.email}</span>}

        <div className="search-bar" style={{alignItems: 'start'}}>
          <textarea 
            name="mensaje" 
            placeholder="¿En qué podemos ayudarte?" 
            value={values.mensaje} 
            onChange={handleChange} 
            style={{ 
              flex: 1, 
              background: 'transparent', 
              border: 'none', 
              outline: 'none', 
              color: 'white', 
              padding: '0.75rem 0.5rem',
              minHeight: '150px',
              fontFamily: 'inherit',
              resize: 'none'
            }}
          />
        </div>
        
        <button type="submit" style={{ width: 'fit-content', paddingInline: '3rem', alignSelf: 'center' }}>
          Enviar Mensaje
        </button>

      </form>
    </main>
  );
}