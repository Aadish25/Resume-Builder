"use client";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../utlis/cn.ts";
import { Login } from "./Login.jsx";

export function LoginHome() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Login/>
    </div>
  );
}
