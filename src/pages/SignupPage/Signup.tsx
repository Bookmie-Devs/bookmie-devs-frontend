import { useState } from "react";
import learingSvg from "../../assets/learning.svg";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

// interface signupFormData {
//   username: string;
//   password: string;
// }

function Signup() {
  const [value, setValue] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  function checkUsername(e: any) {
    setIsAvailable(false);
    const value = e.target.value;
    // console.log();
    setValue(value);
  }

  function handleSignup(e: any): void {
    setLoading(true);
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  }

  return (
    <div className="h-auto pt-16 items-center bg-slate-800 justify-center flex space-y-5">
      <div className="flex justify-center space-x-32">
        <div className="hidden sm:inline">
          <img className="animate-bounce" src={learingSvg} />
        </div>
        <form action="" onSubmit={handleSignup}>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-xl text-white m-1">Username</label>
              <input
                onInput={checkUsername}
                type="text"
                name="username"
                className="bg-slate-100 rounded-md text-xl px-7 py-3"
                placeholder="Username"
              />
              {!isAvailable ? (
                <p className="bg-red-500 text-white mt-2 text-start px-3 py-0.5 rounded-md">
                  {value} is not available
                </p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-xl text-white m-1">Password</label>
              <input
                type="password"
                name="password"
                className="bg-slate-100 rounded-md text-xl px-7 py-3"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <button className="flex items-center justify-center bg-green-400 text-lg text-center py-3 rounded-md w-full">
              Submit
              <div className="ml-3">
                <RotatingLines
                  strokeColor="black"
                  visible={loading}
                  width="25"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              </div>
            </button>
          </div>
          <p className="text-white text-lg pt-3">
            Already have an account &nbsp;
            <Link className="text-green-400 hover:underline" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;