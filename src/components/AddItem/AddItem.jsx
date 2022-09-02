import { useState} from 'react';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPepperHot, faXmark, faUpload } from '@fortawesome/free-solid-svg-icons';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';


function AddItem ({addItem, itemDescription, itemPath, setItemPath, setItemDescription}) {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return <Card 
                elevation={3}
                sx={{ 
                    width: 75,
                    height: 75}}>
            <CardActionArea>
                <Box onClick={()=> setOpen(!open)}>
                    <CardMedia sx={{ 
                        width: 75,
                        height: 75,
                        color: "#A31919",
                        fontSize: "1.2rem",
                        fontFamily: "'Dosis', sans-serif",
                        backgroundColor: "#DBEB94",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                        }}>
                        <Box>
                            <FontAwesomeIcon
                                icon={faPepperHot}
                                color="#d32f2f"
                                size="lg"/>
                            <FontAwesomeIcon 
                                color="#d32f2f"
                                icon={faPlus}
                                size="xs"/>
                        </Box>
                        </CardMedia>
                </Box> 
            </CardActionArea>
        <Dialog 
            open={open}    
            onClose={handleClose}
            PaperProps={{ sx: { backgroundColor: "#DBEB94", color: "#A31919"} }}>
            <DialogTitle>Upload a pepper picture</DialogTitle>
            <DialogContent>
                <TextField
                    color="error"
                    margin="dense"
                    id="pepper-description"
                    label="Pepper Type"
                    fullWidth
                    variant="standard"
                    value={itemDescription}
                    onChange={(event) => setItemDescription(event.target.value)}
                    />
                <TextField
                    color="error"
                    margin="dense"
                    id="pepper-path"
                    label="URL"
                    fullWidth
                    variant="standard"
                    value={itemPath}
                    onChange={(event) => setItemPath(event.target.value)}
                    />
            </DialogContent>
            <DialogActions>
                <IconButton onClick={addItem}>
                    <FontAwesomeIcon color="#A31919" icon={faUpload} />
                </IconButton>
                <IconButton onClick={()=> setOpen(!open)}>
                    <FontAwesomeIcon color="#90B001" icon={faXmark} />
                </IconButton>
            </DialogActions>
        </Dialog>
    </Card>
}

export default AddItem;