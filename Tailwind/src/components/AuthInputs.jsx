import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);

    const isEmailValid = enteredEmail.includes("@");
    const isPasswordValid = enteredPassword.trim().length >= 6;
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-4 mb-6">
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          value={enteredEmail}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          value={enteredPassword}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-between">
        <Button
          type="button"
          className="text-amber-400 bg-transparent hover:underline"
        >
          Create a new account
        </Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
