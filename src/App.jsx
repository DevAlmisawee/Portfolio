import AppNavbar from "./component/header";
import HeroSection from "./component/Herosection";
import AboutSection from "./component/AboutSection";
import Main from "./component/Main";
import FAQ from "./component/Faq";
import ContactPage from "./component/Form";
import Footer from "./component/footer";


function App() {
 
  return (
    <>
       <AppNavbar />
       <HeroSection />
       <AboutSection />
       <Main />
       <FAQ />
       <ContactPage />
       <Footer />  
    </>
  )
}

export default App
