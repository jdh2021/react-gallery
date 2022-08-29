import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer, faPepperHot } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';

import { useState } from 'react';

function GalleryItem ({item, updateLikeCount}) {

    const [displayPhoto, setDisplayPhoto] = useState(true);

    const togglePhoto = () => {
        console.log('in togglePhoto');
        setDisplayPhoto(!displayPhoto);
    }

    return <Card elevation={3}>
        <Box onClick={togglePhoto}>
            { displayPhoto ?
                <CardMedia 
                    sx={{ 
                        width: 175,
                        height: 175,
                        '&:hover': {
                            opacity: 0.7},
                        }}
                    component="img" 
                    image={item.path}/> :
                <CardMedia
                    sx={{ 
                        width: 175,
                        height: 175,
                        color: "#A31919",
                        fontSize: "1.2rem",
                        fontFamily: "'Dosis', sans-serif",
                        backgroundColor: "#C9E05E",
                        '&:hover': {
                            backgroundColor: "#CFE470",
                            cursor: 'default'},
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                        }}>
                    {item.description}
                </CardMedia>
            }
        </Box> 
        <Box sx={{backgroundColor: "#DBEB94"}}>
            <CardActions disableSpacing color="error">
                <IconButton 
                    aria-label="add to favorites" 
                    color="error"
                    onClick={(event) => updateLikeCount(item.id)}>
                    <FontAwesomeIcon 
                    icon={faPepperHot}/>
                </IconButton>
                <span className="like-count">{item.likes}</span>
            </CardActions>
        </Box>
    </Card>
}

export default GalleryItem;