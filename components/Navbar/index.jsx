import NavLink from '../NavLink';

const Navbar = () => (
	<nav>
		<ul>
			<li>
				<NavLink href="/" name="Home" />
			</li>
			<li>
				<NavLink href="/about" name="Sobre" />
			</li>
		</ul>
	</nav>
);

export default Navbar;
