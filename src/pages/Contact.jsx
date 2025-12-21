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

  if (isSent) return <p style={{color: 'green'}}>¡Mensaje enviado con éxito!</p>;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '800px', margin: '50px auto' }}>
      <h1 style={{alignSelf: 'center'}}>Contacto</h1>
      <input name="nombre" placeholder="Tu nombre" value={values.nombre} onChange={handleChange} style={{pading: '20px'}} />
      {errors.nombre && <span style={{color: 'red'}}>{errors.nombre}</span>}

      <input name="email" placeholder="Tu email" value={values.email} onChange={handleChange} />
      {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}

      <textarea name="mensaje" placeholder="Tu mensaje" value={values.mensaje} onChange={handleChange} />
      <button type="submit" style={{fontWeight: 'bold', fontSize: '20px'}}>Enviar</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </form>
    
  );
}