import { useParams, useNavigate } from "react-router-dom";
import "../styles/PostDetail.css";

const postsData = [
  {

    id: 1,
    title: "Черные дыры и червоточины",
    content:
      "В фильме показано, как команда исследователей использует червоточину, чтобы путешествовать через космос. Это ключевой научный элемент фильма.",
    images: [
      "https://cdn.7days.ru/pic/fdf/964419/1337408/86.jpg",
      "https://naked-science.ru/wp-content/uploads/2016/04/article_interstellar-teaser08166921.jpg",
    ],
  },
  {

    id: 2,
    title: "Миссия в космосе",
    content:
      "Команда преодолевает огромные расстояния, сталкивается с опасностями и проявляет мужество, чтобы спасти человечество.",
    images: [
      "https://irl.by/wp-content/uploads/2014/11/kinopoisk.ru-Interstellar-2503688-w-19201.jpg",
    ],
  },
  {

    id: 3,
    title: "Эмоции и время",
    content:
      "Фильм показывает, как время по-разному течет для героев в космосе и на Земле. Любовь и жертва становятся важной темой.",
    images: [
      "https://api.kinoart.ru/storage/post/block/image/4606/image-2cc581fd7bb3a37c972ee436c544d11f.jpeg",
    ],
  },
];

const PostDetail = () => {

   const { id } = useParams();
  const navigate = useNavigate();

  const post = postsData.find((p) => p.id === +id);

  if (!post) {

    return (
      <div className="post-detail">
          <h1>Пост не найден</h1>
          <button onClick={() => navigate("/posts")}>Назад к списку постов</button>
      </div>
    );
  }

  return (

    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="post-images">
        {post.images.map((img, index) => (
            <img key={index} src={img} alt={post.title} />
        ))}
      </div>
      <button onClick={() => navigate("/posts")}>Назад к списку постов</button>
    </div>
  );
}



export default PostDetail;
