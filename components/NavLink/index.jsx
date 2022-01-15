import { motion } from 'framer-motion';

import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from './index.module.scss';

const NavLink = ({ href, name }) => {
	const router = useRouter();
	const isSelected = router.pathname === href;

	return (
		<Link href={href} passHref>
			<motion.a
				whileHover={{ backgroundColor: '#272727', color: '#f2f2f2' }}
				className={`${styles.navlink} ${isSelected && styles.selected}`}
			>
				{name}
				{isSelected && (
					<motion.div className={styles.underline} layoutId="underline" />
				)}
			</motion.a>
		</Link>
	);
};

export default NavLink;
