import { type AppType } from "next/app";

import { api } from "~/utils/api";
import "react-toastify/dist/ReactToastify.css";

import "~/styles/globals.css";
import { Layout } from "~/components/Layout/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-50">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default api.withTRPC(MyApp);
