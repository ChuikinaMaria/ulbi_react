import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
	const params = useParams() 
	
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async () => {		
		const response = await PostService.getById(params.id)
		setPost(response.data);
	})

	const [fetchComments, isComLoading, comError] = useFetching(async () => {		
		const response = await PostService.getCommentsByPostId(params.id)
		setComments(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return(
		<div>
		<h1>POST  {params.id}</h1>
		{isLoading
			? <Loader />
			:  <div>
					<h2>{post.id}. {post.title}</h2>
				</div>
		}
		<h2>Comments</h2>
		{isComLoading
			? <Loader />
			: <div>
				{comments.map(comm =>
					<div style={{marginTop: 15}}>
						<h5>{comm.name}</h5>
						<div>{comm.body}</div>
					</div>
				)}
			</div>
		}		
		</div>
	)
	}
export default PostIdPage;