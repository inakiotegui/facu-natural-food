import LandingComponent from '../components/Nosotros/LandingComponent';
import SecondComponent from '../components/Nosotros/SecondComponent';
import ThirdComponent from '../components/Nosotros/ThirdComponent';
import FirstComponent from '../components/Productos/FirstComponent';
import ProductsGallery from '../components/Productos/ProductsGallery';
import NationalProduct from '../components/Productos/NationalProduct';
import Separator from '../components/Contacto/Separator';
import ContactForm from '../components/Contacto/ContactForm';

const Inicio = () => {
  return (
      <main className='inicio-section-body'>
        <section id="landing-section">
          <LandingComponent />
          <SecondComponent />
          <ThirdComponent />
        </section>
        <section id="products-section">
          <FirstComponent />
          <ProductsGallery />
          <NationalProduct />
          <Separator />
        </section>
        <section id="contact-section">
          <ContactForm />
        </section>
      </main>
  );
};

export default Inicio;