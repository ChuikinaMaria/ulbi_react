import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Posts from '../pages/Posts';
import About from '../pages/About';


const AppRouter = () => {
	return(
		<Routes>
        <Route path="/about" element={<About/>} />          
        <Route path="posts"element={<Posts />} />
        <Route path="*" element={<NotFound />} />
       
      	</Routes>

	)
}

export default AppRouter;