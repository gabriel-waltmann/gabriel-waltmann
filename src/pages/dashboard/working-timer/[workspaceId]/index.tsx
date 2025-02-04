import TypographyTitle from "@/components/typography/title";
import ButtonContained from "@/components/button/contained";
import ButtonOutlined from "@/components/button/outlined";
import { 
  TPageDashboardWorkingTimeWorkspaceProps, 
  usePageDashboardWorkingTimeWorkspace 
} from "@/hooks/pages/dashboard/working-timer/workspace/usePageDashboardWorkingTimerWorkspace";

export default function PageDashboardWorkingTimerWorkspace(props: TPageDashboardWorkingTimeWorkspaceProps): JSX.Element {
  const { 
    // * actions
    onBackToWorkpaces,
    onEditWorkspace,
    onDeleteWorkspace,

    // * states
    workspaceLoading,
    workspace,

    // * styles
    headerStyle,
    navStyle,
  } = usePageDashboardWorkingTimeWorkspace(props);

  //  * loading
  if (workspaceLoading) {
  return (      
    <div style={headerStyle}>
      <TypographyTitle>Carregando...</TypographyTitle>
    </div>
  )
  }

  //  * not found
  if (!workspace) {
    return (      
      <div style={headerStyle}>
        <TypographyTitle>Working Timer não encontrado</TypographyTitle>

        <nav style={navStyle}>
          <ButtonContained onClick={onBackToWorkpaces}>BACK</ButtonContained>
        </nav>
      </div>
    )
  }

  return (
    <>
      <header style={headerStyle}>
        <TypographyTitle>Working Timer: {workspace.name}</TypographyTitle>

        <nav style={navStyle}>
          <ButtonOutlined>+ TIMER</ButtonOutlined>

          <ButtonContained onClick={onEditWorkspace}>EDIT</ButtonContained>

          <ButtonContained onClick={onDeleteWorkspace}>DELETE</ButtonContained>

          <ButtonContained onClick={onBackToWorkpaces}>BACK</ButtonContained>
        </nav>
      </header>

      <section>

      </section>
    </>
  )
}