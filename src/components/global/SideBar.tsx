// Components
import User from "../sidebar/User";
import Search from "../sidebar/Search";
import Trending from "../sidebar/Trending";
import Create from "../sidebar/Create";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-top">
          <User name="suka" />
          <div className="sidebar-top-inner">
            <Search />
            <Trending />
          </div>
        </div>
        <div className="sidebar-bottom">
          <Create />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
