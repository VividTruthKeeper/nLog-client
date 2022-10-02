import Article from "../components/article/Article";
import SideBar from "../components/global/SideBar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <SideBar />
      <div className="home-wrapper-overflower">
        <div className="home-wrapper-inner">
          <div className="home-head">Latest SUKA</div>
          <main className="home-main">
            <Article />
            <Article />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
