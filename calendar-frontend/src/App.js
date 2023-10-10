import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseError = (error) => {
    console.log(error);
  }

  return (
    <div>
      <div className="App">
        <h1>Google Calendar API</h1>
      </div>
      <div>
        <GoogleLogin 
          buttonText='Sign In & Authorize Calendar'
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          responseType='code'
          accessType='offline'
          scope='openid email profile https://www.googleapis.com/auth/calendar' 
        />
      </div>
    </div>
  );
}

export default App;
