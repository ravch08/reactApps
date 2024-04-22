import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="container">
        <Link to="/">
          <h1 className="py-6 text-2xl uppercase text-white">
            React<span className="font-extrabold">Apps</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
