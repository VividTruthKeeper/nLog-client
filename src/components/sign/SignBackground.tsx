// Modules

// Types
interface Props {
  title: string;
}

const SignBackground = ({ title }: Props) => {
  return (
    <div className="sign-bg">
      <div className="sign-bg-darkener">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SignBackground;
