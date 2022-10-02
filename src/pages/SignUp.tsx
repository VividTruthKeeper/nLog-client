// Modules
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Components
import SignGreeting from "../components/sign/SignGreeting";
import SignBackground from "../components/sign/SignBackground";
import SignInput from "../components/sign/SignInput";

const SignUp = () => {
  interface passwordType {
    value: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
  }
  const [password, setPassword] = useState<string>("");
  const passwordMemo = useMemo<passwordType>(() => {
    return { value: password, setter: setPassword };
  }, [password, setPassword]);
  return (
    <section className="sign">
      <SignBackground title="Sign Up" />
      <div className="container">
        <div className="sign-inner">
          <SignGreeting
            textBig="Welcome"
            textSmall="Let’s sign you up quickly"
          />
          <form className="sign-form">
            <SignInput
              type="text"
              placeholder="Enter your name"
              required={true}
              errorMsg={"This field is required"}
            />
            <SignInput
              type="email"
              placeholder="Enter your email"
              required={true}
              errorMsg={"Email is incorrect"}
            />
            <SignInput
              type="password"
              placeholder="Enter password"
              required={true}
              errorMsg={"Password is incorrect"}
              related={{ type: "origin", state: passwordMemo }}
            />
            <SignInput
              type="password"
              placeholder="Confirm password"
              required={true}
              errorMsg={"Passwords must match"}
              related={{ type: "checker", state: passwordMemo }}
            />
            <div className="sign-form-footer">
              <button type="submit">SUBMIT</button>
              <p>
                <span>
                  already have an account<span className="green">?</span>
                </span>
                <Link to={"/login"} className="green">
                  log-in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
