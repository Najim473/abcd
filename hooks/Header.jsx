const Header = ({ title, subtitle }) => {
  return (
    <div className="">
      <h1 style={{ fontSize: "30px" }} className="text-white">
        {title}
      </h1>
      <p className="text=4xl text-white mt-2">{subtitle}</p>
    </div>
  );
};

export default Header;
