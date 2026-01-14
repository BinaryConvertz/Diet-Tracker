import "../App.css";

const Header = () => {
  const Title = "Diet Tracker";

  return (
    <>
      <header className="p-5 bg-blue-900 flex justify-around">
        <div>
          <a
            className="text-white left-0 justify-start font-bold text-lg px-6"
            href="/"
          >
            {Title}
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/" className="text-lg text-white p-3">
                Home
              </a>

              <a href="/dash" className="text-lg text-white p-3">
                Dashboard
              </a>

              <a href="/weight" className="text-lg text-white p-3">
                Weight Tracker
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
