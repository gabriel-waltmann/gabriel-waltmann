import { usePageProject } from "./usePageProject";
import SlideDefault from "@/components/slides/default";

export default function ProjectsPage() {
  const { projects, ulStyle } = usePageProject();

  return (
    <ul style={ulStyle}>
      {projects.map((projectSlide, projectSlideIndex) => (
        <li key={projectSlideIndex + "project-slide"}>
          <SlideDefault
            autoPlay
            slides={projectSlide.slides}
            name={projectSlide.project.title}
            description={projectSlide.project.description}
          />
        </li>
      ))}
    </ul>
  );
}
