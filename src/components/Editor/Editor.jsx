import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import Template1 from "../Temp_All/Template_1";
import Details from "../Details/Details.jsx";
import Education from "../Education/Education.jsx";
import Work from "../Work/Work.jsx";
import Summary from "../Summary/Summary.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import AdditionalExp from "../AdditionalExp/AdditionalExp.jsx";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Editor() {
  const { pathname } = useLocation();
  const idx = useSelector((state) => state.temp_index.index);
  const TemplatesArr = [Template1];
  const Templates = TemplatesArr.map((Item, index) => {
    return (
      <div className=" w-full hidden sm:block lg:w-1/2" key={index}>
        <Item />
      </div>
    );
  });
  let componentToRender = null;
  if (pathname == "/editor/details") {
    componentToRender = <Details />;
  } else if (pathname == "/editor/education") {
    componentToRender = <Education />;
  } else if (pathname == "/editor/work-experience") {
    componentToRender = <Work />;
  } else if (pathname == "/editor/projects") {
    componentToRender = <Projects />;
  } else if (pathname == "/editor/skills") {
    componentToRender = <Skills />;
  } else if (pathname == "/editor/additional-experience") {
    componentToRender = <AdditionalExp />;
  } else if (pathname == "/editor/summary") {
    componentToRender = <Summary />;
  }
  return (
    <>
      <Navbar />
      <div className="flex gap-2 padding w-full flex-col lg:flex-row absolute top-10">
        {componentToRender}
        {Templates[idx]}
        <Drawer />
      </div>
    </>
  );
}
