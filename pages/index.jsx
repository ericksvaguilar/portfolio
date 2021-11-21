import { motion } from 'framer-motion';
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
				<p className={styles.description}>Desenvolvedor Front-end</p>
				<ul className={styles.linkList}>
					<li>
						<motion.a
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							href="https://github.com/ericksvaguilar"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</motion.a>
					</li>
					<li>
						<motion.a
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							href="https://www.linkedin.com/in/aguilar-erick/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</motion.a>
					</li>
				</ul>
			</section>
		</div>
	</>
);

export default Home;
