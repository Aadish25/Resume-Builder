import TempSummary from "../SingleTemp/TempSummary";
import Temp_AdditionalExp from "../SingleTemp/Temp_AdditionalExp";
import Temp_Details from "../SingleTemp/Temp_Details";
import Temp_Education from "../SingleTemp/Temp_Education";
import Temp_Projects from "../SingleTemp/Temp_Projects";
import Temp_Skills from "../SingleTemp/Temp_Skills";
import Temp_Work_Exp from "../SingleTemp/Temp_Work_Exp";

export default function Template1() {
  return (
    <div className="break-words">
      <Temp_Details />
      <div className="sm:padding-template text-xs ">
        <TempSummary />
        <Temp_Education />
        <Temp_Work_Exp />
        <Temp_Projects />
        <Temp_Skills />
        <Temp_AdditionalExp />
      </div>
    </div>
  );
}
