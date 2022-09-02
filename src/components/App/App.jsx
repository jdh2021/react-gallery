import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [itemPath, setItemPath] = useState('');

  useEffect(() => {
    fetchGalleryItems();
  }, []);

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

  const updateLikeCount = (id) => {
    console.log('in updateLikeCount', id);
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

  const deleteItem = (id) => {
    console.log('in deleteItem', id)
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

  const addItem = () => {
    console.log('in addItem');
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


