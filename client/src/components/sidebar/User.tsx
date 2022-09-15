interface Props {
  name: string;
}

const User = ({ name }: Props) => {
  return (
    <div className="user-view">
      <span>{name[0].toUpperCase()}</span>
    </div>
  );
};

export default User;
