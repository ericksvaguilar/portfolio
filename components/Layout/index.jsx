import Header from '../Header';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
	<>
		<Header>
			<Navbar />
		</Header>
		<main>{children}</main>
	</>
);

export default Layout;
