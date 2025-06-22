import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { useInView } from "react-intersection-observer";

const ProjectsFinished = () => {

    const[projectsFinished, setProjectsFinished] = useState(10);

      const {ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.5       
  });
    
  return (
    <div ref = {ref}>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={projectsFinished}
        fontStyle={{
          fontSize: 40,
          color: "red",
        }}
      />): null}
      
    </div>
  )
}

export default ProjectsFinished
