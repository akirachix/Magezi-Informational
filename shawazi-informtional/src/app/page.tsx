import Products from "./components/Products";
import Services from "./components/Services";
import LandingPage from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import About from './components/about_us'
import QuestionSection from './components/Insights';


export default function Home(){
  return (
    <main>
     
        <Navbar/>
        <LandingPage/>
        <Products/>
        <Services/>
        <About/>
        <QuestionSection/>
        <Footer/>
    </main>

  );
};