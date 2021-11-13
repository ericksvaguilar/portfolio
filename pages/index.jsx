import Head from 'next/head';

import styles from 'styles/pages/home.module.scss';

const Home = () => (
	<>
		<Head>
			<title>Erick Aguilar</title>
			<meta name="description" content="Meu site pessoal" />
		</Head>
		<section className={styles.home}>
			<h1>Erick Aguilar</h1>
			<p className={styles.description}>
				Desenvolvedor Front-end na Docket Brasil.
			</p>
		</section>
	</>
);

export default Home;
