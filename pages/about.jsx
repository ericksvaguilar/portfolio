import Head from "next/head";
import Timeline from "components/Timeline";

import styles from "styles/pages/about.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>erick aguilar | sobre</title>
      </Head>

      <section className={styles.about}>
        <section>
          <h1>hobbies. paixões. carreira.</h1>
          <p>
            <strong>olá, meu nome é erick.</strong> iniciei no desenvolvimento
            web em 2021, porém já tinha me apaixonado por esse mundo bem antes,
            lá em 2019 quando tive o primeiro contato na faculdade.
          </p>
          <p>
            atualmente estou trabalhando no aiq como{" "}
            <strong>desenvolvedor front-end</strong>, mas antes disso eu já
            fazia alguns projetos pessoais com intuito de aprendizagem.
            atualmente moro em são paulo.
          </p>
          <p>
            sou apaixonado por café, entusiasta em calistenia e especialista em
            perder palhetas do violão hahah. uma curiosidade sobre mim é que eu
            gosto de trabalhar em pé.
          </p>
        </section>

        <section>
          <h2>carreira</h2>

          <Timeline />
        </section>
      </section>
    </>
  );
};

export default About;
