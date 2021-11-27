import "./navbar.css";

const Navbar = ({ getUser }) => {
  return (
    <>
      <nav>
        <div className="logo">Udila</div>
        <div className="get_user">
          <button onClick={getUser}>Get Users</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
