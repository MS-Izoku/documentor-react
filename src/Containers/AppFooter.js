import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer id="page-footer">
          <div>
        <ul>
          <li>
            <Link to="/report-bug">Report a Bug</Link>
          </li>
          <li>
            <Link to="/contact-admin">Contact an Admin</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
      <div>
          Other Section
      </div>
    </footer>
  );
};
