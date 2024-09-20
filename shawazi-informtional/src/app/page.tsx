import LandingPage from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"


export default function Home(){
  return (
    <main>
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </main>

  );
};