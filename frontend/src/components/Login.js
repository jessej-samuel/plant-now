import React from "react";
import Email from "./Form/Email";
import Password from "./Form/Password";
import LoginSubmit from "./Form/LoginSubmit";
// import Form from "./base/Form";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        className="h-screen w-full flex justify-center items-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/assets/home_page.png)` }}
      >
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-8 w-[75vw] min-w-[16rem] h-2/4 min-h-[24rem] rounded-md">
          <div className="invisible hidden lg:visible bg-lightgreen bg-opacity-[0.66] lg:flex lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:row-span-full rounded-l-md lg:p-8 lg:items-center lg:justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/assets/Logo.png" className="w-64" alt="Logo" />
              <h1 className="text-primary text-4xl font-semibold font-serif py-6">
                PlantNow.io
              </h1>
            </div>
          </div>
          <div className=" col-span-full w-full lg:col-start-4 lg:col-span-5 bg-primary rounded-l-md lg:rounded-l-none rounded-r-md flex flex-col justify-center items-center">
            <div className="w-5/6 h-5/6 flex flex-col justify-between">
              <h1 className="text-3xl font-semibold">Login</h1>
              <p>Please sign in to continue</p>
              <Email />
              <Password />
              <LoginSubmit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
