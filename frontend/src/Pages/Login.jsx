import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import Animation2 from './../../src/assets/animations/Animation2.json';

const Login = () => {
  const defaultOptionstwo = {
    loop: true,
    autoplay: true,
    animationData: Animation2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className="h-[88vh] w-[100%] flex justify-center items-center">
        <div className="bg-[#d4c7aa] w-[70%] h-[88vh] flex justify-center items-center">
          <div className="bg-[#f6eeda] h-[80vh] w-[80%] border-[3px] border-solid border-[#676f58] flex justify-evenly items-center rounded-[1rem]">
            <div className="w-[45%] h-[72vh] rounded-[0.5rem]">
              <Lottie options={defaultOptionstwo} height={350} width={400} />
            </div>

            <div className="bg-[#d4c7aa] w-[45%] h-[72vh] border-[2px] border-solid border-[#676f58] flex flex-col justify-around items-center rounded-[15px]">
              <h2 className='text-[2em] text-[#676f58]  font-[700]'>Login</h2>

              <div className="w-[85%] h-[18vh] flex flex-col justify-between items-center">
                <div className="w-[90%] flex flex-col  justify-center items-start gap-[-5px]">
                  <p className=" m-0">Your E-mail</p>
                  <input className='w-full h-[2em] bg-[#f6eeda] border-solid border-[1px] border-[#676f58] rounded-[8px] pl-[15px]' type="email" placeholder='Your E-mail' />
                </div>
                <div className="w-[90%] flex flex-col justify-center items-start gap-[-5px]">
                  <p className="m-0">Your Password</p>
                  <input className='w-full bg-[#f6eeda] h-[2em] border-solid border-[1px] border-[#676f58] rounded-[8px] pl-[15px]' type="password" placeholder='Password' />
                </div>
              </div>

              <div className="w-[77%] h-[8em] flex flex-col justify-evenly items-start">
                <label htmlFor="mycheck" className="flex items-center text-sm gap-2">
                  <input className='text-lg w-5 h-5' type="checkbox" id="mycheck" /> Accept Terms and Conditions
                </label>
                <Link className="w-full" to={'/Shop'}>
                  <button className='w-full bg-transparent border-solid border-[2px] text-[#676f58] border-[#676f58] hover:bg-[#676f58] hover:text-[#d4c7aa] transition-colors rounded-lg h-12'>Continue</button>
                </Link>
                <p className="signup text-sm">Don't have an Account? <Link to={'/Signup'} className='underline text-blue-500'>Signup</Link></p>
              </div>

              <div className="w-[77%] flex justify-evenly items-center">
                <div className="border border-black rounded-full w-[15%] h-[5vh] flex justify-center items-center">
                  <img className="w-[60%]" src="/images/google.png" alt="Google" />
                </div>
                <div className="border border-black rounded-full w-[15%] h-[5vh] flex justify-center items-center">
                  <img className="w-[60%]" src="/images/communication.png" alt="Facebook" />
                </div>
                <div className="border border-black rounded-full w-[15%] h-[5vh] flex justify-center items-center">
                  <img className="w-[60%]" src="/images/apple-logo.png" alt="Apple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
