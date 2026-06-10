import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { registerUser } from "../api/authApi";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await registerUser({
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      navigate("/applications");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          border
          rounded-2xl
          p-8
          space-y-6 pb-10
        "
      >
        <h1
          className="
            text-4xl
            font-bold
            text-center
          "
        >
          Register
        </h1>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Register" onClick={handleRegister} />

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
