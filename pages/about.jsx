import Head from "next/head";
import Timeline from "components/Timeline";

import styles from "styles/pages/about.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <section className={styles.about}>
        <section>
          <h1>Hobbies. Paixões. Carreira.</h1>
          <p>
            <strong>Olá, meu nome é Erick.</strong> Iniciei no desenvolvimento
            web em 2021, porém já tinha me apaixonado por esse mundo bem antes,
            lá em 2019 quando tive o primeiro contato na faculdade.
          </p>
          <p>
            Atualmente estou trabalhando na Docket como{" "}
            <strong>Desenvolvedor Front-end</strong>, mas antes disso eu já
            fazia alguns projetos pessoais com intuito de aprendizagem.
            Atualmente moro em São Paulo.
          </p>
          <p>
            Sou apaixonado por café, entusiasta em calistenia e especialista em
            perder palhetas do violão hahah. Uma curiosidade sobre mim é que eu
            gosto de trabalhar em pé.
          </p>
        </section>

        <section>
          <h2>Carreira</h2>

          <Timeline />
        </section>
      </section>
    </>
  );
};

export default About;
