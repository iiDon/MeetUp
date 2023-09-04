import { type AppType } from "next/app";

import { api } from "~/utils/api";
import "react-toastify/dist/ReactToastify.css";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-50">
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
