import "../styles/Home.css";

const Home = () => {
  const bgImage = "https://stoneforest.ru/wp-content/uploads/2014/11/film-interstellar.jpg";


  return (
    <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="home-overlay">
        <h1>Добро пожаловать в блог по фильму "Интерстеллар"</h1>
        <p>
            "Интерстеллар" — научно-фантастический фильм режиссёра Кристофера Нолана,
          рассказывающий историю космической миссии через червоточину в поисках
          нового дома для человечества.
        </p>
        <p>
          Здесь вы найдете интересные факты о персонажах, событиях фильма и
          научных аспектах, связанных с космосом и временем.
        </p>
      </div>
    </div>
  );
  
}



export default Home;
