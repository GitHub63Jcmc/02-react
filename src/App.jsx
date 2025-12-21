
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import {HomePage} from './pages/Home.jsx';
import {SearchPage} from './pages/Search.jsx';
import {AboutPage} from './pages/About.jsx';
import { ContactPage } from './pages/Contact.jsx';
import { Route } from './components/Route.jsx';
 
function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Footer />
    </>
  );
}

// ejercicios:
  // crear una nueva ruta /about
  // crear una nueva ruta /contacto y en esta usar el useState para manejar valores del formulario, crear castingHooks, validación basica y mostrar mensajes de error si es necesario, los campos requeridos, mostrar mensaje enviado.
  // mejorar el componente link
export default App
