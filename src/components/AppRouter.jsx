import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';


const AppRouter = () => {
	return(
		<Routes>
			<Route path="/"element={<Posts />} />
			<Route path="/about" element={<About/>} />
			<Route path="posts"element={<Posts />} />
			<Route path="posts/:id"element={<PostIdPage />} />
        	<Route path="*" element={<NotFound />} />       
      	</Routes>
	);
};

export default AppRouter;