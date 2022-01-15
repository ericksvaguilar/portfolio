import styles from "styles/pages/about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.aboutSection}>
        <h1>Carreira. Hobbies. Paixões</h1>
        <p>
          <strong>Olá, meu nome é Erick.</strong> Iniciei no desenvolvimento web
          em 2021, porém já tinha me apaixonado por esse mundo bem antes, lá em
          2019 quando tive o primeiro contato na faculdade.
        </p>
        <p>
          Atualmente estou trabalhando na{" "}
          <a
            href="https://www.linkedin.com/company/docketbrasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docket
          </a>{" "}
          como <strong>Desenvolvedor Front-end Júnior I</strong>, mas antes
          disso eu já fazia alguns projetos pessoais com intuito de
          aprendizagem. Atualmente moro em São Paulo.
        </p>
        <p>
          Sou apaixonado por café, entusiasta em calistenia e especialista em
          perder palhetas do violão hahah. Uma curiosidade sobre mim é que eu
          gosto de trabalhar em pé.
        </p>
      </section>
    </div>
  );
};

export default About;
