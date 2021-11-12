import Link from 'next/link';

const NavLink = ({ href, name }) => (
	<Link href={href}>
		<a>{name}</a>
	</Link>
);

export default NavLink;
