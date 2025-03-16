import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <h2>Viewing Post ID: {postId}</h2>;
};

export default Post;
