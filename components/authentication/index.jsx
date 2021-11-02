import { useState } from "react";
import styles from "./authentication.module.scss";

import Register from "./components/register";

export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={styles.authcomponent}>
      {/* the heading tab of the login component */}
      <div className={styles.heading}>
        <div
          data-active={activeTab === 1 && "active"}
          onClick={() => setActiveTab(1)}
        >
          Register
        </div>
        <div
          data-active={activeTab === 2 && "active"}
          onClick={() => setActiveTab(2)}
        >
          Login
        </div>
      </div>
      {/* the heading tab of the login component */}

      {/* the content of the login component */}
      <div className={styles.content}>
        {/* tab one for register */}
        <Register />
        {/* tab one for register */}
        {/* tab two for login*/}
        {/* login component */}
        {/* tab two for login*/}
      </div>
      {/* the content of the login component */}
    </div>
  );
}
