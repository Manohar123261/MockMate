import Topbar from "@/Topbar/Topbar";
import Image from "next/image";
import Workspace from "@/Workspace/Workspace";

export default function Home() {
  return (
    <>
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar/>
      <Workspace/>
      </main>
    </>
  );
}
