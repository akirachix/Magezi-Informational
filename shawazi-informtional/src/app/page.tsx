import LandingPage from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"
import About from '@/app/components/about_us'
import QuestionSection from './components/insights';


export default function Home(){
  return (
    <main>
        <Navbar/>
        <LandingPage/>
        <About/>
        <QuestionSection/>
        <Footer/>
    </main>

  );
};