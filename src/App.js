import './App.css';
import './stlye.css';
import logo from "./hamarosan_nyitunk.jpg";

function App() {
  return (
    <div className='main_container'>
      <p className="welcome">Üdvözlünk a  <p className='foldieden_title'>_Földi_Éden_</p>Webáruházában!</p>
    <div className='picture_container'>
      <img src={logo} className="logo" alt="" />
    </div>
    <footer>
      <p className="line anim-typewriter">Hamarosan nyitunk: 2022.09.01</p>
      <hr />
      <h3>Created by 3BM Corporation</h3>
    </footer>
    </div>
    );
}

export default App;
