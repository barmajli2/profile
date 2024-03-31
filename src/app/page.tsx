import Image from "next/image";
import ProjectsPage from "./projects/page";
import Slide from "@/components/Slide";
import  Skills  from '@/components/skills';

export default function Home() {
  return (
    <main>
      <Slide/>
      <ProjectsPage/>
      <Skills/>
    </main>
  );
}
