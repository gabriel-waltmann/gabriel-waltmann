import { CSSProperties, useEffect, useState } from "react";
import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";
import { ICarouselSlide } from "@/hooks/components/slide/primary/useSlidePrimary";
import { ProjectController } from "@/controller/project/ProjectController";
import { ProjectFileController } from "@/controller/project/ProjectFileController";

interface ProjectSlide {
  project: ProjectEntity;
  slides: ICarouselSlide[];
}

export const usePageProject = () => {
  const [projects, setProjects] = useState<ProjectSlide[]>([]);

  const projectController = new ProjectController()

  const projectFileController = new ProjectFileController()

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
  
  const ulStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const getProjectSlides = async (): Promise<ProjectSlide[]> => {
    try {
      const projects = await projectController.retrieves();
    
      const projectFiles: ProjectSlide[] = await Promise.all(
        projects.map(async (project) => {
          const files = await projectFileController.retrieves(
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
