import ButtonContained from "@/components/button/contained";
import TypographyTitle from "@/components/typography/title";
import {
  Dialog,
  DialogContent,
} from "@mui/material";
import { TPageDashboardProjectProps, usePageDashboardProject } from "@/hooks/pages/dashboard/project/usePageDashboardProject";
import FormProject from "@/components/form/project";
import LoadingPrimary from "@/components/loading/primary";
import ButtonOutlined from "@/components/button/outlined";

export default function PageDashboardProject(props: TPageDashboardProjectProps) {
  const {
    headerStyle,
    ulStyle, 
    liStyle,
    dialogStyle,
    projects, 
    fullScreen,
    projectDialog,
    formProjectFormStates,
    formProjectFormActions,
    projectsLoading,
  } = usePageDashboardProject(props);

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle value="Projects" />

        <ButtonContained value="+ Project" onClick={formProjectFormActions.showCreateProjectForm} />
      </div>

      <ul style={ulStyle}>
        {projectsLoading && <LoadingPrimary /> }

        {!projectsLoading && projects.map((project) => (
          <li key={project.id + "project"} style={liStyle}>
            <ButtonOutlined
              value={project.title}
              onClick={() => formProjectFormActions.showUpdateProjectForm(project)}
            />
          </li>
        ))}
      </ul>

      <Dialog fullScreen={fullScreen} open={projectDialog}>
        <DialogContent sx={dialogStyle}>
          <FormProject 
            states={formProjectFormStates}
            actions={formProjectFormActions} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
