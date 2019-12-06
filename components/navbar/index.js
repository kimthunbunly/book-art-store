import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link mx-0 p-0" href="/">
            <FontAwesomeIcon
              className="mx-3"
              style={{ width: "18px" }}
              icon={["fab", "instagram"]}
            />
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link mx-0 p-0" href="/">
            <FontAwesomeIcon
              className="mx-3"
              style={{ width: "10px" }}
              icon={["fab", "facebook-f"]}
            />
          </a>
        </li>
      </ul>
      <a className="navbar-brand" href="/">
        <h5 className="nav-link mx-0">THEDRAGONFLY</h5>
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link mx-0 p-0" href="/">
            <FontAwesomeIcon
              className="mx-3"
              style={{ width: "16px" }}
              icon={["fas", "search"]}
            />
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link mx-0 p-0" href="/">
            <FontAwesomeIcon
              className="mx-3"
              style={{ width: "14px" }}
              icon={["fas", "user"]}
            />
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link mx-0 p-0" href="/">
            <FontAwesomeIcon
              className="mx-3"
              style={{ width: "20px" }}
              icon={["fas", "shopping-bag"]}
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
