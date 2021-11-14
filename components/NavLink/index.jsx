import { motion } from 'framer-motion';

import Link from 'next/link';

import styles from './index.module.scss';

const NavLink = ({ href, name }) => (
	<Link href={href} passHref>
		<motion.a
			whileHover={{ backgroundColor: '#272727', color: '#f2f2f2' }}
			className={styles.navlink}
		>
			{name}
		</motion.a>
	</Link>
);

export default NavLink;
