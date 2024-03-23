import Template1 from "../Temp_All/Template_1";

export default function Drawer() {
  return (
    <dialog id="my_modal_2" className="modal w-full">
      <div className="modal-box rounded-none max-w-[23cm]">
        <Template1 />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
