import "../styles/zombie_hand.css";

const ZombieHand = (props) => {
  let style = {
    top: props.top + "px",
    right: props.right + "px",
  };
  return (
    <div className="zombie-hand" style={style}>
      <div className="zombie-hand-image-container">
        <img
          src={props.image}
          className="zombie-hand-image"
          alt="zombie hand"
        />
      </div>
    </div>
  );
};

export default ZombieHand;
