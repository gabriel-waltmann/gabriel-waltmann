import TypographyTitle from "@/components/typography/title";
import ButtonContained from "@/components/button/contained";
import ButtonOutlined from "@/components/button/outlined";
import { 
  TPageDashboardWorkingTimeWorkspaceProps, 
  usePageDashboardWorkingTimeWorkspace 
} from "@/hooks/pages/dashboard/working-timer/workspace/usePageDashboardWorkingTimerWorkspace";
import TableTimer from "@/components/table/timer";
import LoadingPrimary from "@/components/loading/primary";

export default function PageDashboardWorkingTimerWorkspace(props: TPageDashboardWorkingTimeWorkspaceProps): JSX.Element {
  const { 
    // * actions
    onBackToWorkpaces,
    onEditWorkspace,
    onDeleteWorkspace,
    onTimerClick,
    onGoToNewTimerPage,

    // * states
    workspaceLoading,
    workspace,
    editLoading,
    deleteLoading,
    backLoading,
    timersLoading,
    timers,
    newTimerPageLoading,

    // * styles
    headerStyle,
    navStyle,
    tableStyle,
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
          <ButtonOutlined onClick={onGoToNewTimerPage}>{
            newTimerPageLoading ? <LoadingPrimary /> : "+ TIMER"
          }</ButtonOutlined>

          <ButtonContained onClick={onEditWorkspace}>{
            editLoading ? <LoadingPrimary /> : "EDIT"
          }</ButtonContained>

          <ButtonContained onClick={onDeleteWorkspace}>
            {deleteLoading ? <LoadingPrimary /> : "DELETE"}
          </ButtonContained>

          <ButtonContained onClick={onBackToWorkpaces}>{
            backLoading ? <LoadingPrimary /> : "BACK"
          }</ButtonContained>
        </nav>
      </header>

      <section>
        {timersLoading && <LoadingPrimary />}

        {!timersLoading && <TableTimer 
          style={tableStyle} 
          timers={timers} 
          onTimerClick={onTimerClick} 
        />}
      </section>
    </>
  )
}