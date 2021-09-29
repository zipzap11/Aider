import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { markdownToDraft, draftToMarkdown } from "markdown-draft-js";
import { convertFromRaw } from "draft-js";
import { draftjsToMd, mdToDraftjs } from "draftjs-md-converter";

const str = `
\`\`\`css
.outer {
    display: flex;
    align-items: center;
    justify-content: center;
}
\`\`\`
You can use this code, in your css files. Make sure to connect your html to the correct css files.
`;

function TextEditor({ editorState, onChange }) {
  const rawData = markdownToDraft(str);
  const state = convertFromRaw(rawData);
  console.log("state = ", state);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const onChangeEditorState = (editorState) => {
  // setEditorState(editorState);
  // };
  return (
    <>
      <Editor
        editorStyle={{
          backgroundColor: "#fff",
          color: "#333533",
          padding: "0 1rem",
          fontWeight: "",
          border: "1px solid #333533",
          minHeight: "150px",
          borderRadius: "5px",
          marginTop: "1rem",
          boxShadow: "2px 2px 3px 0px #00000040 inset",
        }}
        toolbarStyle={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          border: "none",
          padding: "0",
        }}
        wrapperStyle={{
          border: "1px solid #333533",
          borderRadius: "7px",
          padding: "1.2rem",
          backgroundColor: "white",
        }}
        editorState={editorState}
        onEditorStateChange={onChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      ></Editor>
    </>
  );
}

export default TextEditor;
