import { Outlet } from "react-router-dom";
import Info from "../components/Panel/Info";

interface RefreshProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ refresh, setRefresh }: RefreshProps) {
  return (
    <main className="p-4 lg:p-8 !pt-12 min-h-screen">
      <div
        className="max-w-screen-2xl mx-auto pb-2"
        style={{zIndex: 2, position: 'relative'}}
      >
        <div className="flex items-center text-sm font-semibold justify-between gap-4 py-3">
          <a href="/">
            <img
              src="/images/logo2.png"
              alt=""
              className="hidden lg:block h-14"
            />
          </a>
        </div>
      </div>
      <Info refresh={refresh} setRefresh={setRefresh}  />
      <div className="mt-8">
        <Outlet />
      </div>
      <div className="bgwrapper">
        <div className="imageContainer" />
      </div>
    </main>
  );
}
