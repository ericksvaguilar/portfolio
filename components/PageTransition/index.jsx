import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
