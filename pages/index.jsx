import PageTransition from 'components/PageTransition';
import Head from 'next/head';

import styles from 'styles/pages/home.module.scss';

const Home = () => (
	<PageTransition>
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
	</PageTransition>
);

export default Home;
