import styles from "./index.module.scss";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <ul>
        <li>
          <h3>desenvolvedor front-end júnior</h3>
          <p>
            <a
              href="https://aiqfome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aiqfome
            </a>{" "}
            • mar 2022 - presente
          </p>
        </li>
        <li>
          <h3>desenvolvedor front-end júnior</h3>
          <p>
            <a
              href="https://docket.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              docket brasil
            </a>{" "}
            • nov 2021 - fev 2022
          </p>
        </li>
        <li>
          <h3>desenvolvedor front-end assistente</h3>
          <p>
            <a
              href="https://docket.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              docket brasil
            </a>{" "}
            • mar 2021 - nov 2021
          </p>
        </li>
        <li>
          <h3>desenvolvedor outsystems</h3>
          <p>
            <a
              href="https://elaw.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              elaw tecnologia s.a.
            </a>{" "}
            • set 2019 - abr 2020
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
