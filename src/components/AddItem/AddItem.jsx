import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddItem ({addItem}) {
    return <Grid item>
        <Card elevation={3}>
            <form onSubmit={addItem}>
                <Box>
                    <CardMedia sx={{ 
                        width: 175,
                        height: 175,
                        color: "#A31919",
                        fontSize: "1.2rem",
                        fontFamily: "'Dosis', sans-serif",
                        backgroundColor: "#C9E05E",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                        }}>
                        <span>Find a pepper?</span>
                        <span>Add a pepper!</span>
                    </CardMedia>
                </Box> 
                <Box sx={{backgroundColor: "#DBEB94"}}>
                    <CardActions 
                        disableSpacing color="error"
                        sx= {{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <Box>
                            <IconButton 
                                aria-label="add to favorites" 
                                color="error"
                                type="submit"
                                onClick={() => addItem }>
                                <FontAwesomeIcon icon={faPlus}/>
                            </IconButton>
                        </Box>
                    </CardActions>
                </Box>
            </form>
        </Card>
    </Grid> 
}

export default AddItem;