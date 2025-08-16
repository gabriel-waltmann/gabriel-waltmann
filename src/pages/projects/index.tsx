import { usePageProject } from "@/hooks/pages/usePageProject";
import SlidePrimary from "@/components/slide/primary";

export default function Page() {
  const { projects, ulStyle } = usePageProject();

  return (
    <ul style={ulStyle}>
      {projects.map((projectSlide, projectSlideIndex) => (
        <li key={projectSlideIndex + "project-slide"}>
          <SlidePrimary
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
