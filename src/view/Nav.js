import "../style/Nav.scss";
const Nav = () => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="/todo">Todo</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};
export default Nav;
