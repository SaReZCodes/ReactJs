import logo from './logo.svg';
import './App.css';
import mygif from './anim.gif';
function App() {
  let rand = Math.floor(Math.random() * 10) + 1;
 
  if (rand !== 5) {
    return (
      <div className="login">
        <h1>{rand}</h1>
        <div className="login-screen">
          <div className="app-title">
            <h1>ورود</h1>
          </div>
          <div className="login-form">
            <div className="group-control">
              <input type="text" placeholder="نام کاربری" className="login-field" />
            </div>
            <div className="group-control">
              <input type="password" placeholder="رمز عبور " className="login-field" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="login">
        <img src={mygif}/>
      </div >
    );
  }

}

export default App;
