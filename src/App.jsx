import AppNavbar from "./component/header";
import HeroSection from "./component/Herosection";
import AboutSection from "./component/AboutSection";
import Main from "./component/Main";
import ContactPage from "./component/Form";
import Footer from "./component/footer";


function App() {
 
  return (
    <>
       <AppNavbar />
       <HeroSection />
       <AboutSection />
      <Main />
      {/* FAQ removed from primary navigation; keep file but not displayed */}
       <ContactPage />
       <Footer />  
    </>
  )
}

export default App
