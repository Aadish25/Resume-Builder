import Temp_AdditionalExp from "../SingleTemp/Temp_AdditionalExp";
import Temp_Details from "../SingleTemp/Temp_Details";
import Temp_Education from "../SingleTemp/Temp_Education";
import Temp_Projects from "../SingleTemp/Temp_Projects";
import Temp_Skills from "../SingleTemp/Temp_Skills";
import Temp_Work_Exp from "../SingleTemp/Temp_Work_Exp";

export default function Template1() {
  return (
    <div className="max-w-[21cm] break-words">
      <Temp_Details />
      <div className="padding-template text-xs ">
        <p className="">
          Human resources generalist with 8 years of experience in HR, including
          hiring and terminating, disciplining employees and helping department
          managers improve employee performance. Worked with labor unions to
          negotiate compensation packages for workers. Organized new hire
          training initiatives as well as ongoing training to adhere to
          workplace safety standards. Worked with OSHA to ensure that all safety
          regulations are followed.
        </p>
        <Temp_Education />
        <Temp_Work_Exp />
        <Temp_Projects />
        <Temp_Skills />
        <Temp_AdditionalExp />
      </div>
    </div>
  );
}
