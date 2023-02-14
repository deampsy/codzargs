import "../styles/home.css";

import Post from "../components/Post";
import CommentBox from "../components/CommentBox";

const Home = props => {
  return (
    <div className="home-page">
      <Post image={"/assets/photos/codzombies_origins.jpg"}
            aspect={"tall-image"}
            text={"i think origins is dumb and hard and not my type of map"}/>
	<CommentBox/>
	<Post image={"/assets/photos/tranzit.jpg"}
            aspect={"tall-image"}
            text={"tranzit is not that good of a map but is good on some occasions"}/>
	<CommentBox/>
	  <Post image={"/assets/photos/cod_zombies_perks.jpg"}
		aspect={"tall-image"}
	  	text={" my fav perks are jug dub quick revive speed cola and muile kick"}/>
	<CommentBox/>
    </div>
  );
}

export default Home;
