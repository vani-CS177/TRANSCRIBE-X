// login.js
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", { // fixed URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      // Store token or user info for authentication
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // Redirect to home/dashboard page
      window.location.href = "dashboard.html"; 
    } else {
      alert(data.message || "Login failed!");
    }
  } catch (err) {
    console.error("Error connecting to backend:", err);
    alert("Error connecting to backend");
  }
});
