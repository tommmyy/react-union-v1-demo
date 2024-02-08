// import universal from 'react-universal-component';
import { lazy } from 'react';

export const routes = [
	{
		path: 'hero',
		component: lazy(() => import('@union-liferay/widget-hero')),
	},
	{
		path: 'content',
		component: lazy(() => import('@union-liferay/widget-content')),
	},
];
