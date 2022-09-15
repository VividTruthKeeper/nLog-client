import User from "../sidebar/User";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-top">
          <User name="suka" />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
