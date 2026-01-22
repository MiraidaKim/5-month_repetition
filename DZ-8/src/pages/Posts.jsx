import { useNavigate } from "react-router-dom";
import "../styles/Posts.css";

const postsData = [

  {
    id: 1,

    title: "Черные дыры и червоточины",
    description: "Уникальные астрономические явления, которые показаны в фильме.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrb7xOYdZpDQcBJFV97rfeFkSWoxm5GWWp9g&s",
  },
  {
    id: 2,
    title: "Миссия в космосе",
    description: "Как герои фильма преодолевают огромные расстояния во Вселенной.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuCCaE0cPrY1IUcH15Q9e-q0Az2xHriQ3BA&s",
  },
  {
    id: 3,
    title: "Эмоции и время",
    description: "Любовь, потеря и релятивистское время в сюжете фильма.",
    image: "https://static.kinoafisha.info/k/articles/1200/upload/articles/317953704238.jpg",
  },
];

const Posts = () => {
   
  const navigate = useNavigate();

  return (
    <div className="posts-page">
      <h1>Посты о фильме "Интерстеллар"</h1>
      <div className="posts-list">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Posts;
