import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './authentication.module.scss';
import Register from './segments/register';
import Login from './segments/login';

const KEY = 'confirmed';

export default function Index() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const [confirmationMode, setConfirmationMode] = useState(false);

  useEffect(() => {
    if (router.query.hasOwnProperty(KEY) && !confirmationMode) {
      setActiveTab(2);
      setConfirmationMode(true);
    }
  }, [router.query, confirmationMode]);

  return (
    <div className={styles.authcomponent}>
      {/* the heading tab of the login component */}
      {!confirmationMode && (
        <div className={styles.heading}>
          <div
            data-active={activeTab === 1 && 'active'}
            onClick={() => setActiveTab(1)}
          >
            Register
          </div>
          <div
            data-active={activeTab === 2 && 'active'}
            onClick={() => setActiveTab(2)}
          >
            Login
          </div>
        </div>
      )}
      {/* the heading tab of the login component */}

      {/* the content of the login component */}
      <div className={styles.content}>
        {activeTab === 1 ? (
          <Register />
        ) : (
          <Login confirmationMode />
        )}
      </div>
      {/* the content of the login component */}
    </div>
  );
}
