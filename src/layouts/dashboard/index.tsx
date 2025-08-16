import HeaderDashboard from "@/components/header/dashboard";
import { TLayoutDashboardProps, useLayoutDashboard } from "@/hooks/layouts/dashboard/useLayoutDashboard";

export default function Layout(props: TLayoutDashboardProps) {
  const data = useLayoutDashboard(props);

  if (data.loading) return <></>

  return (
    <div style={data.divStyles}>
      <HeaderDashboard />

      <main style={data.mainStyles}> {props.children} </main>
    </div>
  );
}
