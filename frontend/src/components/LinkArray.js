import "../styles/link_array.css";
import NavigationLink from "./NavigationLink";

const LinkArray = (props) => {
  return (
    <div className="link-array">
      {props.linkNames.map((name, n) => (
        <NavigationLink name={name} color={"white"} key={n} />
      ))}
    </div>
  );
};

export default LinkArray;
