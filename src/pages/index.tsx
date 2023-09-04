import Link from "next/link";
import About from "../components/Home/About/About";
import Companies from "../components/Home/Companies";
import { Layout } from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="w-full">
      <Layout>
        <About />
        {/*  Devider */}
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-1 w-96 rounded border-0 bg-gray-200 " />
          <div className="absolute left-1/2 -translate-x-1/2 bg-gray-50 px-4 ">
            <Link href="#companies">
              <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 text-center text-3xl">
                🡫
              </div>
            </Link>
          </div>
        </div>
        <Companies />
      </Layout>
    </div>
  );
}
