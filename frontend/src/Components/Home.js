import gif1 from "./assets/accident1.gif";
import gif2 from "./assets/accident2.gif";

function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <h1>
          <i>Home:</i>
        </h1>
        <h4 className="desc">
          Welcome to our website! This is our Final project for 42028 Deep
          Learning and Convolutional Neural Networks where we are trying to
          detect car crash collision. Our team consists of{" "}
          <b>Sanskar Gauchan</b>, <b>Ahmed Khurseed</b> and{" "}
          <b>Sarrah Barodawola</b>.
        </h4>
      </div>
      <div className="gifs">
        <img src={gif1} />
        <img src={gif2} />
      </div>
    </div>
  );
}

export default Home;
