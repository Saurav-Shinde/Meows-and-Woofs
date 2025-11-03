import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import Animation2 from './../../src/assets/animations/Animation2.json';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const defaultOptionstwo = {
    loop: true,
    autoplay: true,
    animationData: Animation2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/users/register', form);
      alert('Registration successful!');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[88vh] w-full">
        <div className="bg-[#d4c7aa] w-[70%] h-[88vh] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-[#f6eeda] border-solid border-[3px] border-[#676f58] h-[80vh] w-[80%] flex justify-evenly items-center rounded-xl">
            <div className="bg-[#d4c7aa] w-2/5 h-[72vh] flex flex-col justify-around items-center border-[2px] border-solid border-[#676f58] rounded-[15px]">
              <h2 className="text-[2em] text-[#676f58] font-bold m-0">Sign Up</h2>

              <div className="w-[85%] h-[23vh] flex flex-col justify-between items-center">
                <div className="w-[90%] flex flex-col items-start gap-1">
                  <p>Your Name</p>
                  <input name="name" value={form.name} onChange={handleChange} className="w-[100%] bg-[#f6eeda] h-8 border border-[#676f58] rounded-lg p-2" type="text" placeholder="Your Name" required />
                </div>
                <div className="w-[90%] flex flex-col items-start gap-1">
                  <p>Your E-mail</p>
                  <input name="email" value={form.email} onChange={handleChange} className="w-[100%] bg-[#f6eeda] h-8 border border-[#676f58] rounded-lg p-2" type="email" placeholder="Your E-mail" required />
                </div>
                <div className="w-[90%] flex flex-col items-start gap-1">
                  <p>Your Password</p>
                  <input name="password" value={form.password} onChange={handleChange} className="w-[100%] bg-[#f6eeda] h-8 border border-[#676f58] rounded-lg p-2" type="password" placeholder="Password" required />
                </div>
              </div>

              <div className="w-[77%] h-32 flex flex-col justify-evenly items-start">
                <label htmlFor="mycheck" className="flex items-center gap-2">
                  <input className="w-5 h-5 bg-[#f6eeda]" type="checkbox" id="mycheck" /> Accept Terms and Conditions
                </label>
                <button type="submit" className="absolute bg-transparent border-solid border-[2px] border-[#676f58] rounded-lg w-[16.5%] h-12 text-center flex justify-center items-center  hover:bg-[#676f58] hover:text-[#d4c7aa] transition-colors">
                  Continue
                </button>
                <p className="m-0 mt-[45px]">
                  Already have an Account? <Link to={'/Login'}><span className="underline text-blue-500">Login</span></Link>
                </p>
              </div>

              <div className="w-3/4 flex justify-evenly items-center">
                <div className="w-1/6 h-12 flex justify-center items-center">
                  <img className="w-3/5" src="/images/google.png" alt="Google" />
                </div>
                <div className="w-1/6 h-12 flex justify-center items-center">
                  <img className="w-3/5" src="/images/communication.png" alt="Facebook" />
                </div>
                <div className="w-1/6 h-12 rounded-full flex justify-center items-center">
                  <img className="w-3/5" src="/images/apple-logo.png" alt="Apple" />
                </div>
              </div>
            </div>

            <div className="w-2/5 h-[72vh] rounded-lg">
              <Lottie options={defaultOptionstwo} height={350} width={400} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;