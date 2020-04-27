import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer id="page-footer">
          <div>
        <ul>
          <li>
            <Link>Report a Bug</Link>
          </li>
          <li>
            <Link>Contact an Admin</Link>
          </li>
          <li>
            <Link>Resources</Link>
          </li>
        </ul>
      </div>
      <div>
          Other Section
      </div>
    </footer>
  );
};
