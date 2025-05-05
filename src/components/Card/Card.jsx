import Profile from "../Profile/Profile";

function Card({ children }) {
  return (
    <>
      <div className="flex border-gradient rounded-4xl p-10">{children}</div>
    </>
  );
}

export default Card;
