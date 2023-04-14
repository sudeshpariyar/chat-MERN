import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

  return (
    <div className="bg-purple-200 h-screen w-screen">
      <form
        className="flex flex-col gap-3 items-center justify-center h-full"
        onSubmit={handleRegister}
      >
        <input
          placeholder="username"
          type="text"
          value={name}
          className="block w-3/12 rounded-lg p-2 border"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          className="block w-3/12 rounded-lg p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-indigo-500 text-white block w-3/12 rounded-lg p-2"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
