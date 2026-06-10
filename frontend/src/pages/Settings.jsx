import { useState } from "react";

import Button
from "../components/ui/Button";

function Settings() {

  const [name,
  setName] =
    useState("Rishitha");

  const [email,
  setEmail] =
    useState(
      "rishitha@gmail.com"
    );

  return (

    <div
      className="
        max-w-4xl
        mx-auto

        space-y-6

        py-8
      "
    >

      <h1
        className="
          text-5xl
          font-extrabold
        "
      >
        Settings
      </h1>

      <div
        className="
          bg-white
          border

          rounded-3xl

          p-8

          space-y-6
        "
      >

        <div
          className="
            space-y-2
          "
        >

          <label
            className="
              font-semibold
            "
          >
            Full Name
          </label>

          <input

            type="text"

            value={name}

            onChange={(e) =>
              setName(
                e.target.value
              )
            }

            className="
              w-full
              border

              rounded-2xl

              p-4

              outline-none
            "
          />

        </div>

        <div
          className="
            space-y-2
          "
        >

          <label
            className="
              font-semibold
            "
          >
            Email Address
          </label>

          <input

            type="email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="
              w-full
              border

              rounded-2xl

              p-4

              outline-none
            "
          />

        </div>

        <div
          className="
            space-y-2
          "
        >

          <label
            className="
              font-semibold
            "
          >
            Preferred Theme
          </label>

          <select
            className="
              w-full
              border

              rounded-2xl

              p-4

              outline-none
            "
          >

            <option>
              Light
            </option>

            <option>
              Dark
            </option>

          </select>

        </div>

        <Button
          text="Save Changes"
        />

      </div>

    </div>
  );
}

export default Settings;