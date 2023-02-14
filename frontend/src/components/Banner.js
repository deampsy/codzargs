import "../styles/banner.css";
import LinkArray from "./LinkArray";

const Banner = (props) => {
  const linkNames = ["wildlife", "piano", "chess", "sports"];
  return (
    <div className="banner">
      <LinkArray linkNames={linkNames} />
    </div>
  );
};

export default Banner;
