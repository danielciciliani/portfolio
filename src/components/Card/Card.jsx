import FadeIn from "../../utils/Animations/FadeIn";
import Profile from "../Profile/Profile";

function Card({ children }) {
  return (
    <>
      <div className="flex border-gradient rounded-4xl p-10 shadow-[0_0_20px_1px_rgba(255,255,255,0.1)]">
        {children}
      </div>
    </>
  );
}

export default Card;