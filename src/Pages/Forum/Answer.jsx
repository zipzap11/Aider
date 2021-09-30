import React, { useState } from "react";
import CommentButton from "../../Components/Button/CommentButton";
import Card from "../../Components/Card/Card";
import CommentList from "../../Components/Comment/CommentList";
import Markdown from "../../Components/Markdown/Markdown";
import CommentForm from "../../Components/Comment/CommentForm";

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

function Answer({ str }) {
  const [commentState, setCommentState] = useState(false);
  return (
    <Card>
      <Markdown str={str} />
      <CommentList />
      {!commentState && <CommentButton onClick={() => setCommentState(true)} />}
      {commentState && <CommentForm onCancel={() => setCommentState(false)} />}
    </Card>
  );
}

export default Answer;
