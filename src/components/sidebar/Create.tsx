// Modules
import { Link } from "react-router-dom";

// Icons
import createGreen from "../../assets/icons/create_green.svg";

const Create = () => {
  return (
    <Link to="/sidebar" className="create-wrapper">
      <div className="create-img">
        <img src={createGreen} alt="create" />
      </div>
      <h3 className="create-text">create</h3>
    </Link>
  );
};

export default Create;
