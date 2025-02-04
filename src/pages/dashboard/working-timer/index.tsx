import ButtonContained from "@/components/button/contained";
import LoadingPrimary from "@/components/loading/primary";
import TypographyTitle from "@/components/typography/title";
import { TPageDashboardWorkingTime, usePageDashboardWorkingTimer } from "@/hooks/pages/dashboard/working-timer/usePageDashboardWorkingTimer";
import TableWorkpace from "@/components/table/workspace";

export default function PageDashboardWorkingTimer(props: TPageDashboardWorkingTime): JSX.Element {
  const { 
    // * actions
    onGoToNewWorkspacePage,
    onGoToWorkspacePage,
    
    // * states
    workspacesLoading,
    workspaces,
    
    // * styles
    headerStyle,
    tableStyle,
    navStyle,
  } = usePageDashboardWorkingTimer(props);

  return (
    <>
      <header style={headerStyle}>
        <TypographyTitle>Working Timer</TypographyTitle>

        <nav style={navStyle}>
          <ButtonContained onClick={onGoToNewWorkspacePage}>
            + WORKSPACE
          </ButtonContained>
        </nav>
      </header>

      <section style={tableStyle}>
        {workspacesLoading && <LoadingPrimary />}

        {!workspacesLoading && <TableWorkpace 
          workspaces={workspaces} 
          onWorkspaceClick={onGoToWorkspacePage} 
        />}
      </section>
    </>
  )
}