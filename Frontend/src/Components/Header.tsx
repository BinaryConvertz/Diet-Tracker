const Header = () => {
  const Title = "Diet Tracker";

  return (
    <>
      <header className="p-5">
        <div>
          <a className="text-white font-bold text-lg px-6" href="/">
            {Title}
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
