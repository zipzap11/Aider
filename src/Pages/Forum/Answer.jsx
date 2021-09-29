import React from "react";
import CommentButton from "../../Components/Button/CommentButton";
import Card from "../../Components/Card/Card";
import CommentList from "../../Components/Comment/CommentList";
import Markdown from "../../Components/Markdown/Markdown";

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

function Answer() {
  return (
    <Card>
      <Markdown str={str} />
      <CommentList />
      <CommentButton />
    </Card>
  );
}

export default Answer;
