import React from "react";
import { MacbookScroll } from "../ui/mackbook-scroll";
import { Link, Navigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpeg";
import Navbar from "../Navbar/Navbar";
import { SparklesPreview } from "../SparklesPreview/SparklesPreview";
import { Analytics } from "@vercel/analytics/react"

export default function MacbookScrollDemo() {
  return (
    <>
      {localStorage.getItem("SavedToken") === null ? (
        <Navigate to={"/login"} replace={true} />
      ) : (
        <div className="bg-[#0B0B0F] w-full">
          <Navbar />
          <Analytics/>
          <SparklesPreview />
          <MacbookScroll
            title={<span className="text-8xl font-title">Career Canvas</span>}
            badge={<Link to="http://localhost:5173/choose-template"></Link>}
            src={avatar}
            showGradient={false}
          />
          
        </div>
      )}
    </>
  );
}
