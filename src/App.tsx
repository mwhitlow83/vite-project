import ListGroup from "./assets/ListGroup";


function App(){
  let items = [
    "new york",
    "san francisco",
    "tokiyo",
    "london",
    "paris"
];

const handleSelectItem = (item: string) => {
  console.log(item);
}

  return (<div>
    <ListGroup items={items} heading="Cities"  onSelectItem={handleSelectItem}/>
    </div>
    );
    }

export default App;
