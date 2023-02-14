import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";

import ZombieHand from "./components/ZombieHand";

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = props => {
  return (
    <div className="app">
      <div className="page-container">
        <ZombieHand image={"/assets/photos/zombie_right_hand.png"}
                    top={200}
                    right={-30}/>
       <ZombieHand image={"/assets/photos/zombie_right_hand.png"}
                    top={50}
                    right={-30}/>
       <ZombieHand image={"/assets/photos/zombie_right_hand.png"}
                    top={400}
                    right={-30}/>

        <ZombieHand image={"/assets/photos/zombie_left_hand.png"}
                    top={200}
                    right={1800}/>
        <ZombieHand image={"/assets/photos/zombie_left_hand.png"}
                    top={50}
                    right={1820}/>
        <ZombieHand image={"/assets/photos/zombie_left_hand.png"}
                    top={350}
                    right={1820}/>

        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="/" element={<Navigate to="/home" replace={true}/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </div>
    </div>
  );
}

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
