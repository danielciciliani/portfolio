import FadeIn from "../../utils/Animations/FadeIn";
import Profile from "../Profile/Profile";

function Card({ children }) {
  return (
    <>
      <div className="flex border-gradient rounded-4xl p-10 card-shadow">
        {children}
      </div>
    </>
  );
}

export default Card;