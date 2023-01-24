import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
	const params = useParams() 
	
	const [post, setPost] = useState({})
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		
		const response = await PostService.getById(params.id)
		console.log(response.data)
		setPost(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id)
	}, [])

	return(
		<div>
		<h1>POST  {params.id}</h1>
		{isLoading
			? <Loader />
			: <div>{post.id}. {post.title}</div>
			}
		
		</div>
	)
}

export default PostIdPage;