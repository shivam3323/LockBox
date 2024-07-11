import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwords, setPasswords] = useState([]);
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    try {
      const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
      if (Array.isArray(savedPasswords)) {
        setPasswords(savedPasswords);
      } else {
        console.error("Passwords in localStorage is not an array");
        setPasswords([]);
      }
    } catch (error) {
      console.error("Error parsing passwords from localStorage", error);
      setPasswords([]);
    }
  }, []);

  const showPassword = () => {
    setShow(!show);
  };

  const savePassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
    try {
      const newPasswords = [...passwords, { ...form, id: uuidv4() }];
      setPasswords(newPasswords);
      localStorage.setItem("passwords", JSON.stringify(newPasswords));
      console.log(newPasswords);
      setForm({ site: "", username: "", password: "" });
    } catch (error) {
      console.error("Error saving password", error);
    }
  }
  else{
    toast('Password Not Saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }
  };

  const deletePassword = (id) => {
    try {
      toast('Password Deleted Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
        const newPasswords = passwords.filter(item => item.id !== id);
        setPasswords(newPasswords);
        localStorage.setItem("passwords", JSON.stringify(newPasswords));
    } catch (error) {
      console.error("Error deleting password", error);
    }
  };

  const editPassword = (password) => {
    try {
      setForm(password);
      deletePassword(password.id);
    } catch (error) {
      console.error("Error editing password", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast('Copy to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };
  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm({ ...form, password });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container text-white mx-auto lg:w-1/2 w-full px-4">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-1 bg-gradient-to-r from-white via-purple-300 to bg-purple-800 text-transparent bg-clip-text">
            LockBox
          </h1>
          <p className="bg-gradient-to-r from-white via-purple-200 to bg-purple-400 text-transparent bg-clip-text">
            Your Own Password Manager
          </p>
        </div>

        <div className="input text-white my-6">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="border border-white w-full rounded-xl bg-black p-4 py-1"
            type="text"
            name="site"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 text-white">
          <input
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="border border-white w-full rounded-xl bg-black p-4 py-1"
            type="text"
            name="username"
          />
          <div className="relative w-full">
            <div className="flex flex-col">
            <input
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="border border-white w-full rounded-xl bg-black p-4 py-1 "
              type={show ? "text" : "password"}
              name="password"
            />
            <p onClick={generatePassword } className="hover:text-violet-700 text-sm text-gray-300 hover:cursor-pointer absolute -bottom-6 left-2" > Genrate Random Password</p></div>
            <div className="absolute w-6 top-1 right-3" onClick={showPassword}>
              <img ref={ref} src={show ? "./icons/hide.png" : "./icons/view.png"} alt="toggle visibility" />
            </div>
          </div>
        </div>
        <div className="button flex justify-center my-4">
          <button
            onClick={savePassword}
            className="flex items-center justify-center bg-gradient-to-r from-black to bg-violet-800 text-white px-5 py-1 rounded-full font-bold border-2 border-x-violet-300 border-y-violet-200 my-7"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="pass overflow-y-auto max-h-screen">
          <h2 className="font-bold py-4 text-2xl bg-gradient-to-r from-white via-purple-200 to bg-purple-400 w-fit text-transparent bg-clip-text">
            Your Passwords
          </h2>
          {passwords.length === 0 && <div>No Passwords to Show</div>}
          {passwords.length !== 0 &&
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-violet-800 border-2 border-white">
                <tr className="text-center">
                  <th className="py-1">Site</th>
                  <th className="py-1">Username</th>
                  <th className="py-1">Password</th>
                  <th className="py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwords.map((password) => (
                  <tr key={password.id} className="border-2 border-white">
                    <td className="text-center py-1">
                      <div className="flex items-center gap-2 justify-center">
                        <a href={password.site} target="_blank" rel="noopener noreferrer">{password.site}</a> <img onClick={() => { copyText(password.site) }} className="w-4 cursor-pointer invert" src="./icons/copy.png" alt="" />
                      </div>
                    </td>
                    <td className="text-center py-1">
                      <div className="flex items-center gap-2 justify-center">
                        {password.username} <img onClick={() => { copyText(password.username) }} className="w-4 cursor-pointer invert" src="./icons/copy.png" alt="" />
                      </div>
                    </td>
                    <td className="text-center py-1">
                      <div className="flex items-center gap-2 justify-center">
                        {password.password} <img onClick={() => { copyText(password.password) }} className="w-4 cursor-pointer invert" src="./icons/copy.png" alt="" />
                      </div>
                    </td>
                    <td className="flex items-center justify-center text-center py-1 gap-2">
                      <img onClick={() => editPassword(password)} className="w-5 cursor-pointer invert" src="./icons/edit.png" alt="" />
                      <img onClick={() => deletePassword(password.id)} className="w-5 cursor-pointer invert" src="./icons/trash-bin.png" alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
