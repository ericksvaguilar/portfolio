import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
	};

	return (
		<motion.div variants={variants} initial="hidden" animate="enter">
			{children}
		</motion.div>
	);
};

export default PageTransition;
