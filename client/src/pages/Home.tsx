import Article from "../components/article/Article";
import SideBar from "../components/global/SideBar";

const Home = () => {
  return (
    <div className="home-wrapper">
        <SideBar />
        <main className="home-main">
            <Article />
            <Article />
        </main>
    </div>
  )
}

export default Home;