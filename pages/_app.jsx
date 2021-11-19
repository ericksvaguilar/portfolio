import Layout from 'components/Layout';
import PageTransition from 'components/PageTransition';

import { AnimatePresence } from 'framer-motion';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps, router }) => (
	<Layout>
		<AnimatePresence exitBeforeEnter>
			<PageTransition key={router.route}>
				<Component {...pageProps} />
			</PageTransition>
		</AnimatePresence>
	</Layout>
);

export default MyApp;
