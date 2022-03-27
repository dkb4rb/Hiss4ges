import React from "react";
import { MdFingerprint } from "react-icons/md";

import GoogleLogin from "react-google-login";
import Facebooklogin from "react-facebook-login";
import "./Login.css";

function Response_F(response) {
  console.log(response);
}

function Response_G(response) {
  console.log(response);
}

const FormLogin = () => {
  return (
    <form type="submit" className="FormSquare">
      <div className="icon_loginn">
        <MdFingerprint />
      </div>

      <input
        autoComplete="off"
        className="inp inpusr"
        name="nickname"
        placeholder="Username"
      />
      <input
        autoComplete="off"
        className="inp inppsw"
        type="password"
        name="usr_passw"
        placeholder="Password"
      />

      <button
        onClick={() => (window.location.href = "./Home")}
        type="button"
        className="btnn_login btn-primary-dark"
      >
        Let's Go!
      </button>

      <div className="buttons_login">
        <Facebooklogin
          appId="309717757927145"
          autoload="false"
          callback={Response_F}
          textButton="Facebook"
          icon="fa-facebook"
        />

        <GoogleLogin
          clienteId="720064979353-1h3ipkmm743kgl1jhe43hi730i9bq7j8.apps.googleusercontent.com"
          buttonText="Sign Up Googl"
          onSuccess={Response_G}
          onFailure={Response_G}
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <p className="Forgotpsw">Forgot Your Password?</p>
    </form>
  );
};

export { FormLogin };
