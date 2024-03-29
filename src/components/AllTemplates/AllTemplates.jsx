import Template1 from "../Temp_All/Template_1";

export default function AllTemplates() {
  const templatesArr = [Template1];
  const templates = templatesArr.map((Item, index) => {
    return (
      <div className="h-32 w-64" key={index}>
        <Item />
      </div>
    );
  });

  return (
    <div className="flex flex-col p-5">
      <h1>Choose Template</h1>
      <div className="flex flex-wrap gap-5">{templates}</div>
    </div>
  );
}
