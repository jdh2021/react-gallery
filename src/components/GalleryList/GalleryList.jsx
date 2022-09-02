import Container from '@mui/material/Container';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList({ galleryList, updateLikeCount, deleteItem }) {
  return <Container className="gallery-container" maxWidth="md">
    <Grid container
      spacing={3}
      justifyContent="left"
      direction="row"
      alignItems="center">
      {galleryList.map((item) => {
        return <GalleryItem
          key={item.id}
          item={item}
          updateLikeCount={updateLikeCount}
          deleteItem={deleteItem} />
        })
      }
    </Grid>
  </Container>
}

export default GalleryList;