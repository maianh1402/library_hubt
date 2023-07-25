import HomePage from "@/components/MainLayout/Home";
import LogIn from "@/components/MainLayout/LogIn";
import ProgramItem from "@/components/MainLayout/Program/ProgramItem";
import Register from "@/components/MainLayout/Register";
import NotFound from "@/components/NotFound/NotFound";
import UserDetail from "@/components/User/UserDetail";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <ProgramItem /> */}
      {/* <Register /> */}
      {/* <LogIn /> */}
      {/* <NotFound /> */}
      <UserDetail />
    </div>
  );
}
