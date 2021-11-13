import Link from 'next/link';

import styles from './index.module.scss';

const NavLink = ({ href, name }) => (
	<Link href={href}>
		<a className={styles.navlink}>{name}</a>
	</Link>
);

export default NavLink;
