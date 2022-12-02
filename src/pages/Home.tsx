import { Outlet } from "react-router-dom";
import Info from "../components/Panel/Info";

interface RefreshProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ refresh, setRefresh }: RefreshProps) {
  return (
    <main className="p-4 lg:p-8 !pt-12 min-h-screen">
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
