import { TLayoutAuthProps } from "@/hooks/layouts/auth/useLayoutAuth";

export default function Layout(props: TLayoutAuthProps) {

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, height: "100vh", width: "100vw" }}>
      {props.children}
    </div>
  );
}
