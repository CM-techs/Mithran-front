import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:3000/register?email=${email}`
      );
      if (res.data.length === 0) {
  alert("User not found");
  return;
}
      const apiUser = res.data[0];

const apiEmail = apiUser.email;
const apiPassword = apiUser.password;
const Name = apiUser.name
console.log(apiEmail,apiPassword,password,email)


      if (apiEmail==email &&apiPassword==password) {
        alert("Login successful");
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        navigate(`/Home/${Name}`);
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Account;
