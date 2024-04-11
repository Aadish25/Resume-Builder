import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function TempSummary() {
  const { pathname } = useLocation();
  const summaryRedux = useSelector((state) => state.summary.summaryDesc);

  const summaryLocal =
    JSON.parse(localStorage.getItem("summary")) === null
      ? summaryRedux
      : JSON.parse(localStorage.getItem("summary"));

  const summary = pathname === "/editor/summary" ? summaryRedux : summaryLocal;

  return (
    <div className="w-full">
      {summary ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">Summary</h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <div dangerouslySetInnerHTML={{ __html: summary }} className="text-justify" />
    </div>
  );
}
