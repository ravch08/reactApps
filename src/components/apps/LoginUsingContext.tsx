import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import BackToHome from "../features/BackToHome";

const LoginUsingContext = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser, isLogin, setIsLogin } = useContext(AuthContext);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLogin(true);
    setUser({
      name,
      password,
    });

    setName("");
    setPassword("");
  };

  const handleLogout = () => {
    setIsLogin(false);
    setUser({});
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Radio Selection">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <h2 className="mb-12 text-4xl font-semibold">
              Login using context
            </h2>

            <form className="mb-12 flex gap-4" onSubmit={handleLogin}>
              <input
                type="text"
                value={name}
                id="userEmail"
                placeholder="Enter Username..."
                onChange={(e) => setName(e.target.value)}
                className="rounded-md bg-slate-200 p-3 text-sm"
              />
              <input
                type="password"
                value={password}
                id="userPassword"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md bg-slate-200 p-3 text-sm"
              />

              <button
                type="submit"
                className="rounded-md bg-slate-800 px-6 py-2 text-white"
              >
                Login
              </button>
            </form>

            <div className="relative flex w-full items-center justify-center gap-4 bg-amber-100 p-4 text-center">
              <div
                className={`h-12 w-12 rounded-full ${isLogin ? "bg-green-500" : "bg-red-600"}`}
              ></div>
              {isLogin ? `Welcome, ${user.name}` : `Welcome Guest!`}

              {isLogin && (
                <svg
                  viewBox="0 0 24 24"
                  fill="bg-slate-800"
                  onClick={handleLogout}
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 cursor-pointer hover:fill-red-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginUsingContext;
