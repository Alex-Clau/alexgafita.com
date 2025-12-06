import {type Project} from "@/data/portfolio";
import {CardContent} from "@/components/ui/card";
import CardQuickStack from "@/components/projectPage/card/cardQuickStack";
import CardHighlights from "@/components/projectPage/card/cardHighlights";
import CardTechStack from "@/components/projectPage/card/cardTechStack";
import CardDescription from "@/components/projectPage/card/cardDescription";

type AnimatedProjectContentProps = {
  project: Project;
};

export default function ProjectCardComponent({project}: AnimatedProjectContentProps) {

  return <CardContent className="relative space-y-8 p-8 sm:p-10 pt-0 text-sm text-stone-300">
    <CardDescription project={project}/>

    <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent"/>

    <CardTechStack project={project}/>

    <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent"/>

    <CardHighlights project={project}/>

    <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent"/>

    <CardQuickStack project={project}/>
  </CardContent>
}