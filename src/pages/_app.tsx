import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import DashboardLayout from "@/layouts/dashboard";
import LayoutDefault from "@/layouts/primary";
import AuthLayout from "@/layouts/auth";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>

        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </>
    );
  }

  if (router.pathname.startsWith("/auth")) {
    return (
      <>
        <Head>
          <title>Auth</title>
        </Head>

        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Gabriel Waltmann</title>
      </Head>

      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </>
  );
}
