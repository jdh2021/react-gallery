import { useState } from 'react';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';
import { faPepperHot, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

function GalleryItem({ item, updateLikeCount, deleteItem }) {
  /* conditional to show like count when greater than zero */
  let likeCount;
  if (item.likes > 0) {
    likeCount = <span className="Like-count">{item.likes}</span>
  } else {
    likeCount = <span className="Like-count"></span>
  };

  /* useState variable created for toggle between display photo and display description */
  const [displayPhoto, setDisplayPhoto] = useState(true);

  return <Grid item>
    <Card elevation={3}>
      <Box onClick={() => setDisplayPhoto(!displayPhoto)}>
        {displayPhoto ?
          /*render if displayPhoto is true */
          <CardActionArea>
            <CardMedia sx={{
              width: 175,
              height: 175,
              '&:hover': {
                opacity: 0.7
              }
            }}
              component="img"
              image={item.path}
            />
          </CardActionArea> :
          /* render if displayPhoto is false */
          <CardActionArea>
            <CardMedia sx={{
              width: 175,
              height: 175,
              color: "#A31919",
              fontSize: "1.25rem",
              fontFamily: "'Dosis', sans-serif",
              backgroundColor: "#C9E05E",
              '&:hover': {
                backgroundColor: "#CFE470"
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              {item.description}
            </CardMedia>
          </CardActionArea>
        }
      </Box>
      <Box sx={{ backgroundColor: "#DBEB94" }}>
        <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Box>
            <IconButton color="error" onClick={() => updateLikeCount(item.id)}>
              <FontAwesomeIcon icon={faPepperHot} />
            </IconButton>
            {likeCount}
          </Box>
          <IconButton sx={{ color: "#90B001" }} onClick={() => deleteItem(item.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  </Grid>
}

export default GalleryItem;