import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import InputFields from "../components/InputFields";
import { setAuthData } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const emailError = touchedEmail && email === "" ? "Email wajib diisi" : "";
  const passwordError =
    touchedPassword && password === "" ? "Password wajib diisi" : "";

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg();

    if (!email || !password) {
      setErrorMsg("Email dan Password wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://43.133.148.170:3005/api/auth/login", {
        email,
        password,
      });

      const { access_token, refresh_token, role } = res.data;
      setAuthData({ access_token, refresh_token, role });

      if (role === "Admin") {
        window.location.href = "/admin";
      } else if (role === "Juri") {
        window.location.href = "/juri";
      } else if (role === "AdminIndependen") {
        window.location.href = "/independen-admin";
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login gagal.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0 bg-[url('/img/login-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-50 rounded-lg bg-black/80 px-8 py-8 w-full max-w-sm">
        <div className="mx-auto mb-4 flex w-max items-center justify-center rounded-full bg-blue-500/10 p-3">
          <img src="/img/swimming-icon.png" alt="Swimming Icon" width="50" />
        </div>

        <h1 className="mb-3 w-full text-center text-2xl font-bold text-white">
          Selamat Datang di Website NTB Aquatic
        </h1>
        <p className="mb-5 text-center text-white">
          Silahkan masuk ke akun anda!
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <InputFields
            id="email"
            label="Email"
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouchedEmail(true)}
            error={emailError}
          />

          <div className="relative">
            <InputFields
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"} 
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouchedPassword(true)}
              error={passwordError}
            />

            <img
              src={showPassword ? "/img/eye-icon.png" : "/img/eye-close-icon.png"}
              alt="Toggle Password"
              className="absolute right-3 top-9 w-5 h-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

          <a
            href="/"
            className="inline-block py-3 text-sm font-medium text-gray-400 underline"
          >
            Lupa Password?
          </a>

          <Button
            type="submit"
            text={loading ? "Loading" : "Login"}
            onClick={handleLogin}
            icon={"/img/login-icon.png"}
          />
        </form>
      </div>
    </div>
  );
}
