import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import IndexLayout from "@/layouts";
import DashboardLayout from "@/layouts/dashboard";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  return (
    <IndexLayout>
      <Component {...pageProps} />
    </IndexLayout>
  );
}
