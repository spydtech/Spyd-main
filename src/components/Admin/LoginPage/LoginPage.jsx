import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import main from "../../../assets/Admin/login.png";
import logo from "../../../assets/Admin/logo.png";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // to manage the loading state

  const navigate = useNavigate();

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setIsLoading(true); // Set loading state

    try {
      // Send POST request to your backend authentication endpoint
      const response = await axios.post("http://15.206.94.23:8080/auth/signin", {
        email,
        password,
      });

      // If login is successful (HTTP 200), handle the token and redirect
      if (response.status === 200) {
        const { jwt, status } = response.data;

        if (status) {
          // Store JWT token in localStorage
          localStorage.setItem("token", jwt);

          // Redirect based on role or other criteria, for example:
          navigate("/admin"); // Adjust this route to where you want users to go after login
        } else {
          setError("Login failed. Please try again.");
        }
      }
    } catch (err) {
      // Handle errors
      if (err.response) {
        setError(err.response.data.message || "Invalid credentials. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex  flex-col md:flex-row min-h-screen">
      <div
        className="lg:w-1/2 w-full h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${main})` }}
      >
        <img src={logo} className="w-[250px] p-5" alt="Logo" />
      </div>

      <div className="lg:w-1/2 flex items-center justify-center p-12 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Please enter your details</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition duration-300"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
