import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react'


function getTitle(title) {
  return title;
}
const App = () => { 
  const [count, setCount] = useState(0)
  
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm,setSearchTerm]= React.useState(localStorage.getItem('search') ||'React');
  React.useEffect(()=>{
    localStorage.setItem('search', searchTerm);},[searchTerm]);


  
  const handleSearch = (event) =>{
    setSearchTerm(event.target.value);
    console.log(event.target.value);
    localStorage.setItem('search',event.target.value);
  };
  const searchedStories = stories.filter((story)=>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div>
      <h1>Hello {getTitle("react")}</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
);
};

const Search = ({search, onSearch}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange= (event) => {
    setSearchTerm(event.target.value);
    onSearch(event);  
  };
    
  return(
    <div>
      <label htmlfor="search">Search:</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};
const List = ({list}) =>(
  

  
    <ul>
        {list.map((item)=> (
          <Item key={item.objectID} item={item} />
        ))}
        </ul>
);
    
    const Item=({item}) => (
      <li>
        <span>
              <a href={item.url}> {item.title}</a></span>
              <span> {item.author}</span>
              <span> {item.num_comments}</span>
              <span> {item.points}</span>
              </li>
          
        );
      
  
  


export default App;



