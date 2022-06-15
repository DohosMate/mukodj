import './App.css';
import './stlye.css';
import logo from "./hamarosan_nyitunk.jpg";

function App() {
  return (
    <div>
      <p className="welcome">Üdvözlünk a _<p className='foldieden_title'>Földi Éden_</p>Webáruházában!</p>
    <div className='picture_container'>
      <img src={logo} width={500} height={500} alt="" />
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
