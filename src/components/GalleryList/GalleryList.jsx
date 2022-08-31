import Grid from '@mui/material/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryList, updateLikeCount}) {
    return <Grid container 
         spacing = {3}
         justifyContent="center"
         direction="row"
         alignItems="center">
         { galleryList.map((item) => {
           return <Grid item> 
                    <GalleryItem key={item.id} item={item} updateLikeCount={updateLikeCount}/>
                </Grid>
           })
         }
       </Grid>
    }

export default GalleryList;