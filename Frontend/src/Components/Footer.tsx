type UserRoute = string;

const Footer = () => {
  const PageTitle: UserRoute = `Copyright | Ryan James`;

  return (
    <footer
      className="bg-gray-800 px-9 
      text-center p-4 relative top-205 font-bold text-white"
    >
      <p>{PageTitle}</p>
    </footer>
  );
};

export default Footer;
