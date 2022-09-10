// Modules
import { Link } from "react-router-dom";

// Components
import SignGreeting from "../components/sign/SignGreeting";
import SignBackground from "../components/sign/SignBackground";
import SignInput from "../components/sign/SignInput";

const Login = () => {
  return (
    <section className="sign">
      <SignBackground title="Login" />
      <div className="sign-container">
        <div className="sign-inner">
          <SignGreeting
            textBig="Welcome"
            textSmall="Let’s log you in quickly"
          />
          <form className="sign-form">
            <SignInput
              type="email"
              placeholder="Enter your email"
              required={true}
              errorMsg={"Email is incorrect"}
            />
            <SignInput
              type="password"
              placeholder="Enter your password"
              required={true}
              errorMsg={"Password is incorrect"}
            />
            <div className="sign-form-footer">
              <button type="submit">LOGIN</button>
              <p>
                <span>
                  don’t have an account<span className="green">?</span>
                </span>
                <Link to={"/sign_up"} className="green">
                  sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
