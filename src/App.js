import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator', price:'$89.99'},
    {name:'Adobe', price:'6.99'}
      ]

  return (
    <div className="App">
      <header className="App-header">
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        <Person name="tazmilur" job=" engr."></Person>
        <Person name="roni" job=" business"></Person>
        
        
      </header>
    </div>
  );
}
function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px',padding:'20px'}}>
       <h1>Name: {props.name}</h1>
       <p> profession:{props.job}</p>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'purple',
    height:'200px',
    width:'200px',
    float:'left'

  }
  const{name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
