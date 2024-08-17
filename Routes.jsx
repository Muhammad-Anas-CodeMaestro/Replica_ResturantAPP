import React from "react";
import { Link } from "react-router-dom";

function Routes() {
  const routes = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "About",
      path: "/",
    },
    {
      pageName: "Content",
      path: "/",
    },
    {
      pageName: "Contact US",
      path: "/",
    }
  ];
  return (
    <ul>
      {routes.map(({ pageName, path }, index) => {
        return (
          <li>
            <Link to={path}>{pageName}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Routes;
