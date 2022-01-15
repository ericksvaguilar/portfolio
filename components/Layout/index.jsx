import Header from 'components/Header';
import Navbar from 'components/Navbar';

import styles from './index.module.scss';

const Layout = ({ children }) => (
	<div className={styles.layout}>
		<Header>
			<Navbar />
		</Header>
		<main>{children}</main>
	</div>
);

export default Layout;
