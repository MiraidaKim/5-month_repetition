const PostCard = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
        <h3>{post.title}</h3>
        <p>{post.body.slice(0, 80)}...</p>
    </div>
  );
};



export default PostCard;
