import { lazy } from 'react';

export default [
	{
		path: 'counter',
		component: lazy(() => import('@union-liferay/widget-counter')),
	},
];
