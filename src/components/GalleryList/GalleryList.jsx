import Grid from '@mui/material/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';
import AddItem from '../AddItem/AddItem';

function GalleryList ({galleryList, updateLikeCount, deleteItem, addItem, itemPath, itemDescription, setItemPath, setItemDescription}) {
    return <Grid container 
         spacing = {3}
         justifyContent="center"
         direction="row"
         alignItems="center">
         { galleryList.map((item) => {
           return <GalleryItem 
                    key={item.id} 
                    item={item} 
                    updateLikeCount={updateLikeCount}
                    deleteItem={deleteItem}
                  />
           })
         } <AddItem 
              addItem = {addItem} 
              itemPath = {itemPath}
              setItemPath = {setItemPath}
              itemDescription = {itemDescription}
              setItemDescription = {setItemDescription} 
            />
       </Grid>
    }

export default GalleryList;