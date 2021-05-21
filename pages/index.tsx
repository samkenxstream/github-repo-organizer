import dynamic from "next/dynamic";
import { LoginStateSwitch } from "../features/UserLogin";
import LoginPage from "../features/LoginPage";

const DynamicRepos = dynamic(() => import("../features/ReposPage"), {
  ssr: false,
});

export default function MyRepositories() {
  return (
    <>
      <DynamicRepos />
    </>
  );
}

export {};
