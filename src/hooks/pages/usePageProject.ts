import { CSSProperties, useEffect, useState } from "react";
import * as projectsMiddleware from "@/middlewheres/project/project";
import * as projectFilesMiddleware from "@/middlewheres/project/project-file";
import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";
import { ICarouselSlide } from "@/hooks/components/slide/primary/useSlidePrimary";

interface ProjectSlide {
  project: ProjectEntity;
  slides: ICarouselSlide[];
}

const formatProjectSlide = (
  project: ProjectEntity,
  files: ProjectFileEntity[]
): ProjectSlide => ({
  project,
  slides: files.map((file) => ({
    url: file.file.key,
    name: project.title,
  })),
});

const getProjectSlides = async (): Promise<ProjectSlide[]> => {
  try {
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
  } catch (error: any) {
    console.error(error);
    
    return [];
  }
};

const ulStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const usePageProject = () => {
  const [projects, setProjects] = useState<ProjectSlide[]>([]);

  const handleProjectSlides = async () => {
    const projectFiles = await getProjectSlides();

    setProjects(projectFiles);
  };

  useEffect(() => {
    handleProjectSlides();
  }, []);

  return {
    projects,
    ulStyle,
  };
};
