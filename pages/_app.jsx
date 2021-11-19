import Layout from 'components/Layout';

import { AnimatePresence } from 'framer-motion';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps, router }) => (
	<Layout>
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	</Layout>
);

export default MyApp;
