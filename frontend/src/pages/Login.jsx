import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Input from "../components/ui/Input"
import Button from "../components/ui/Button"

import {
  loginUser,
} from "../api/authApi"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const handleLogin =
    async () => {

      try {

        const data =
          await loginUser({
            email,
            password,
          })

        localStorage.setItem(
          "token",
          data.token
        )

        navigate("/applications")

      } catch (error) {

        console.log(error)
      }
}

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
          space-y-6
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-center
          "
        >
          Login
        </h1>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button
          text="Login"
          onClick={handleLogin}
        />

      </div>

    </div>
  )
}

export default Login