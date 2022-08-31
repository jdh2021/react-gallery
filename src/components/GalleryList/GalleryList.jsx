import Grid from '@mui/material/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryList, updateLikeCount, deleteItem}) {
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
         }
       </Grid>
    }

export default GalleryList;