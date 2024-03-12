import { Editor } from "@tinymce/tinymce-react";
import { useDispatch } from "react-redux";
import { setWorkDetails } from "../../reducers/work-exp/work";

export default function Text_Editor({ index }) {
  const dispatch = useDispatch();
  const handleEditorChange = (newContent) => {
    dispatch(
      setWorkDetails({
        name: "workSummary",
        value: newContent,
        index: index,
      })
    );
  };

  return (
    <Editor
      apiKey="z6olk7kaduh5ss324x8ufkg5ij1ijsww0x4azjb99q1sxjol"
      initialValue=""
      onEditorChange={handleEditorChange} // Call handleEditorChange on editor content change
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo " +
          "bold italic forecolor | bullist numlist outdent indent | alignleft aligncenter " +
          "alignright alignjustify  " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
