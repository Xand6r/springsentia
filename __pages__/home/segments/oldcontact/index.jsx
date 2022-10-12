import styles from "./contact.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <p>CONTACT US</p>
      <h2>An inspiring journey, together!</h2>
      <h5>
        We would love to go with you through your hair and skin care journey,
        inspiring each other along the way. We’re always here; reach out
        whenever you need us.
      </h5>
      <div>
          <button
            className="--lined"
          >
              <span>
                GET IN TOUCH
              </span>
              <Arrow />
          </button>
      </div>
    </div>
  );
}

const Arrow = () => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6826 9.01023L0.510461 9.01023L0.51046 7.01054L12.6819 7.00983L7.31848 1.64642L8.7327 0.23221L16.5109 8.01038L8.7327 15.7886L7.31848 14.3743L12.6826 9.01023Z" fill="#014C37"/>
    </svg>
)
