import HeaderDashboard from "@/components/header/dashboard";
import { TLayoutDashboardProps, useLayoutDashboard } from "@/hooks/layouts/dashboard/useLayoutDashboard";

export default function DashboardLayout(props: TLayoutDashboardProps) {
  const { divStyle, mainStyles } = useLayoutDashboard(props);

  return (
    <div style={divStyle}>
      <HeaderDashboard />

      <main style={mainStyles}> {props.children} </main>
    </div>
  );
}
