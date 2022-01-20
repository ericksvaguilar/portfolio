import styles from "./index.module.scss";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <ul>
        <li>
          <h3>Desenvolvedor Front-end Júnior I</h3>
          <p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Docket Brasil
            </a>{" "}
            • Nov 2021 - Presente
          </p>
        </li>
        <li>
          <h3>Desenvolvedor Front-end Assistente</h3>
          <p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Docket Brasil
            </a>{" "}
            • Mar 2021 - Nov 2021
          </p>
        </li>
		<li>
          <h3>Desenvolvedor Outsystems</h3>
          <p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Elaw Tecnologia S.A.
            </a>{" "}
            • Set 2019 - Abr 2020
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;