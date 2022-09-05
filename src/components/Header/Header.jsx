import AddItem from '../AddItem/AddItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

function Header({ addItem, itemPath, setItemPath, itemDescription, setItemDescription }) {
  return <Box sx={{ flexGrow: 1 }}>
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item sm={1} md={2}></Grid>
      <Grid item sm={10} md={8}>
        <header className="App-header">Capsaicin Capture</header>
      </Grid>
      <Grid item sm={1} md={2}>
        <AddItem
          addItem={addItem}
          itemPath={itemPath}
          setItemPath={setItemPath}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
        />
      </Grid>
    </Grid>
  </Box>
}

export default Header;
