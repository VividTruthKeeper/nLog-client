// Types
import { SignGreetingType } from "../../types/sign";

const SignGreeting = ({ textBig, textSmall }: SignGreetingType) => {
  return (
    <div className="sign-greeting">
      <h2>{textBig}</h2>
      <h3>{textSmall}</h3>
    </div>
  );
};

export default SignGreeting;
