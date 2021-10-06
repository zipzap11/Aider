import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TagContainer from "../../../Components/Tag/TagContainer";
import Tag from "../../../Components/Tag/Tag";
import { useHistory } from "react-router";

function BlogCard({ image, author, title, id, tags }) {
  console.log("IDDD = ", id);
  const history = useHistory();
  const clickHandler = () => {
    history.push(`/blog/${id}`);
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      sx={{ maxWidth: 300 }}
    >
      <div>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="blog-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Created by{author}
          </Typography>
          <TagContainer size="small">
            {tags.map((tag) => (
              <Tag
                size="small"
                text={tag.tag}
                removeable={false}
                key={tag.id}
              />
            ))}
          </TagContainer>
        </CardContent>
      </div>
      <CardActions>
        <Button onClick={clickHandler} size="small">
          Read Blog
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
