// import Image from "next/image";
import About from '@/app/components/about_us'
import QuestionSection from './components/insights';


export default function Home() {
  return (
    <div>
      <main>
       <About/> 
       
       <QuestionSection/>
       
      </main>
    </div>
  );
}
