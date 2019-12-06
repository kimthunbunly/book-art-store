import Link from "next/link";
import { useEffect, useState } from "react";

const Menubar = props => {
  const [url, setUrl] = useState("");
  const clickRoute = e => {
    setUrl(e);
  };
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mx-auto">
        <li className={url === "/" ? "nav-item mx-3 active" : "nav-item mx-3"}>
          <Link href="/">
            <a onClick={() => clickRoute("/")} className="nav-link">
              HOME
            </a>
          </Link>
        </li>
        <li
          className={url === "books" ? "nav-item mx-3 active" : "nav-item mx-3"}
        >
          <Link href="/books">
            <a onClick={() => clickRoute("books")} className="nav-link">
              BOOKS
            </a>
          </Link>
        </li>
        <li
          className={
            url === "used-book" ? "nav-item mx-3 active" : "nav-item mx-3"
          }
        >
          <Link href="/used-book">
            <a onClick={() => clickRoute("used-book")} className="nav-link">
              USEDBOOKS
            </a>
          </Link>
        </li>
        <li
          className={
            url === "children-book" ? "nav-item mx-3 active" : "nav-item mx-3"
          }
        >
          <Link href="/children-book">
            <a onClick={() => clickRoute("children-book")} className="nav-link">
              CHILDREN'S BOOKS
            </a>
          </Link>
        </li>
        <li
          className={
            url === "bussiness" ? "nav-item mx-3 active" : "nav-item mx-3"
          }
        >
          <Link href="/bussiness-money">
            <a
              onClick={() => clickRoute("bussiness")}
              className="nav-link"
            >
              BUSSINESS & MONEY
            </a>
          </Link>
        </li>
        <li
          className={
            url === "sale-off" ? "nav-item mx-3 active" : "nav-item mx-3"
          }
        >
          <Link href="/sale-off">
            <a onClick={() => clickRoute("sale-off")} className="nav-link">
              SALE OFF
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Menubar;
