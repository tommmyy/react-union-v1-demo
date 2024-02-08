import React, { Suspense } from 'react';
import { Union } from 'react-union';
import { hot } from 'react-hot-loader';

import { routes } from '../../routes';

import './Root.css';

const Root = () => (
	<Suspense fallback={null}>
		<Union routes={routes} />
	</Suspense>
);

export default hot(module)(Root);
