import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
   const navigate =useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }}
const reg = ()=>{
    
     if (formData.password !== formData.confirmPassword ) {
      alert("Passwords do not match");
     }
     if(formData.name==""||formData.email==""){
      alert("Must be filled all fields")
     }
     else{
    axios.post("http://localhost:5000/getlogin",formData
    
    )
    navigate (`/Home/${formData.name}`);
    console.log("Registered Data:", formData);
    alert("Registration Successful 🎉");}
  };
  

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Register Now</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button className="reg-btn" type="submit" onClick={() => reg()}
>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f2f2f2"
  },
  form: {
    background: "#fff",
    padding: "25px",
    borderRadius: "8px",
    width: "95%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  
};

export default Register;
