import AddItem from '../AddItem/AddItem';

function Header ({addItem, itemPath, setItemPath, itemDescription, setItemDescription}) {
    return <header className="App-header">
            <h1 className="App-title">Pepper Perusal</h1>
            <AddItem 
                addItem = {addItem} 
                itemPath = {itemPath}
                setItemPath = {setItemPath}
                itemDescription = {itemDescription}
                setItemDescription = {setItemDescription} />
        </header>
}

export default Header;