import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


function App() {

    const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},    
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log("Отработал useMemo 1")
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
        console.log("Отработал useMemo 2")

    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e=>setSearchQuery(e.target.value)} 
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts} 
          defaultValue="Сортировка по"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}          
          />
          
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts = {sortedAndSearchedPosts} title="Список постов 1" />    
        :
        <h1 style={{textAlign: 'center'}}>
           Посты не найдены 
        </h1>
      }      
    </div>
  ) 
  
}

export default App;
