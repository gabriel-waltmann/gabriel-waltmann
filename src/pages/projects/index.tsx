import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { CSSProperties, useEffect, useState } from "react";
import * as projectsMiddleware from "@/middlewheres/projects";
import * as projectFilesMiddleware from "@/middlewheres/project-files";
import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";
import Carousel, { ICarouselSlide } from "@/components/carousel";

interface ProjectSlide {
  project: ProjectEntity;
  slides: ICarouselSlide[];
}

const formatProjectSlide = (
  project: ProjectEntity,
  files: ProjectFileEntity[]
): ProjectSlide => {
  return {
    project,
    slides: files.map((file, index) => ({
      url: file.file.key,
      name: project.title,
    })),
  };
};

const getProjectSlides = async (): Promise<ProjectSlide[]> => {
  const projects = await projectsMiddleware.retrieves();

  const projectFiles: ProjectSlide[] = await Promise.all(
    projects.map(async (project) => {
      let files: ProjectFileEntity[] = await projectFilesMiddleware.retrieves(
        project.id
      );

      return formatProjectSlide(project, files);
    })
  );

  return projectFiles;
};

const ulStyle: CSSProperties = {
  maxWidth: 800,
  margin: "1rem auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectSlide[]>([]);

  const handleProjectSlides = async () => {
    const projectFiles = await getProjectSlides();

    setProjects(projectFiles);
  };

  useEffect(() => {
    handleProjectSlides();
  }, []);

  return (
    <ul style={ulStyle}>
      {projects.map((projectSlide, projectSlideIndex) => (
        <li key={projectSlideIndex + "project-slide"}>
          <Carousel
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
