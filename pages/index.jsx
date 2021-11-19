import Head from 'next/head';

import styles from 'styles/pages/home.module.scss';

const Home = () => (
	<>
		<Head>
			<title>Erick Aguilar</title>
		</Head>

		<div className={styles.home}>
			<section>
				<h1>Erick Aguilar</h1>
				<p className={styles.description}>
					Desenvolvedor Front-end na Docket Brasil.
				</p>
			</section>
		</div>
	</>
);

export default Home;
