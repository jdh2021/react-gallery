import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import './App.css';

function App() {
  /* creation of useState variables for data that will change and be displayed on DOM */
  const [galleryList, setGalleryList] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [itemPath, setItemPath] = useState('');

  /* useEffect calls function fetchGalleryItems when App component first renders */
  useEffect(() => {
    fetchGalleryItems();
  }, []);

  /* GET request to server. Response is array of gallery objects. */
  const fetchGalleryItems = () => {
    console.log('in fetchGalleryItems');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch(error => {
      console.log(error);
      alert('There\'s an error.');
    })
  }

  /* PUT request to server takes in id as argument, called from GalleryItem component */
  const updateLikeCount = (id) => {
    console.log('in updateLikeCount. Id is:', id);
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then(response => {
      console.log(response.data);
      fetchGalleryItems();
    }).catch(error => {
      console.log(error);
      alert('There\'s an error.');
    })
  }

  /* DELETE request to server takes in id as argument, called from GalleryItem component */
  const deleteItem = (id) => {
    console.log('in deleteItem. Id is:', id)
    axios({
      method: 'DELETE',
      url: `/gallery/${id}`
    }).then(response => {
      console.log(response.data);
      fetchGalleryItems();
    }).catch(error => {
      console.log(error);
      alert('There\'s an error.');
    });
  }

  /* POST request to server, called from AddItem component */
  const addItem = () => {
    console.log('in addItem');
    /* conditionals to check if input fields are empty or URL already in database */
    if (itemPath === '' || itemDescription === '') {
      alert('Please add a pepper type and image URL below.');
      return;
    }
    for(let item of galleryList) {
      if (item.path === itemPath)  {
        alert('A photo with this URL has already been added.');
        return;
      }
    }
    axios({
      method: 'POST',
      url: '/gallery',
      data: {
        path: itemPath,
        description: itemDescription,
        likes: 0
      }
    }).then(response => {
      console.log(response);
      /* empty the inputs and clear state upon successful POST */
      setItemDescription('');
      setItemPath('');
      fetchGalleryItems();
    }).catch(error => {
      console.log(error);
      alert('There\'s an error.');
    });
  }

  return (
    <div className="App">
      <Container className="Header-gallery" maxWidth="md">
        <Header
          addItem={addItem}
          itemPath={itemPath}
          setItemPath={setItemPath}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription} 
        />
        <GalleryList
          galleryList={galleryList}
          updateLikeCount={updateLikeCount}
          deleteItem={deleteItem}
          addItem={addItem}
          itemPath={itemPath}
          setItemPath={setItemPath}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription} 
        />
      </Container>
    </div>
  );
};

export default App;


