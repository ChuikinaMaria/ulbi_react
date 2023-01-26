import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';


const AppRouter = () => {
	
	return(
		<Routes>
			{privateRoutes.map(route => 
				<Route
					 path={route.path}
					 element={route.element}
				 />
			)}

			{publicRoutes.map(route => 
				<Route
					 path={route.path}
					 element={route.element}
				 />
			)}
      	</Routes>
	);
};

export default AppRouter;