import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Homepage.scss"

function Homepage() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  return (
    <div>
      <h3>Customers that have registered for Pharmacy opt-in</h3>
      <table border="1">
        <tr>
          <th className="c-homepage__table-header">Name</th>
          <th className="c-homepage__table-header">Email</th>
          {!isTabletOrMobile && <th>Gender</th>}
          <th className="c-homepage__table-header">DOB</th>
          {!isTabletOrMobile && <th>OptIn Status</th>}
        </tr>
        <tr>
          <td className="c-homepage__table-cell">Ramesh Raman</td>
          <td className="c-homepage__table-cell">5000</td>
        </tr>
        <tr>
          <td className="c-homepage__table-cell">Shabbir Hussein</td>
          <td className="c-homepage__table-cell">7000</td>
        </tr>
      </table>
    </div>
  );
}

export default Homepage;
