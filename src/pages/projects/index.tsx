import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { useEffect, useState } from "react";
import * as projectsMiddleware from "@/middlewheres/projects"
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<ProjectEntity[]>([]);
    
    const handleProjects = async () => {
      const result = await projectsMiddleware.retrieves();
  
      setProjects(result);
    }

    useEffect(() => {
      handleProjects();
    }, []);

  return (
    <List>
      {projects.map((project) => <>
        <ListItemButton>
          <ListItemText
            primary={project.title}
            secondary={project.description}
          />
        </ListItemButton>

        <Divider component="li" />
      </>)}
    </List>
  )
}