import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {

    const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},    
  ])

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log("Отработал useMemo 1")
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
        console.log("Отработал useMemo 2")

    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}> 
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0'}} />
      <PostFilter 
          filter={filter}
          setFilter={setFilter}      
      />
      
      <PostList remove={removePost} posts = {sortedAndSearchedPosts} title="Список постов 1" />    
           
    </div>
  ) 
  
}

export default App;
