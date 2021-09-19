import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator', price:'$89.99'},
    {name:'Adobe', price:'6.99'}
      ]
  const nayoks=['a','b','c','d','e']
  const friends=[
    {name:'tazmilur', university:'aust'},
    {name:'shuvo' , university:'kuet'},
    {name:'moudud' , university:'iut'},
    {name:'nabil', university:'kuet'},
    {name:'showmic', university:'aust'},
    {name:'robin', university:'aust'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <ul>
           {nayoks.map(nayok=><li>{nayok}</li>)}
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        {/* <Friends name={friends[0].name} university={friends[0].university}></Friends> */}
        {
          friends.map(fd=><Friends friend={fd}></Friends>)
        }
        <Counter></Counter>
        <Users></Users>
        
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        {/* <Person name="tazmilur" job=" engr."></Person>
        <Person name="roni" job=" business"></Person> */}
        
        
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
  //console.log(props)
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
function Friends(props){
  console.log(props);
  const friendsStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue',
    height:'200px',
    width:'200px',
    float:'left'

  }
  return(
       <div style={friendsStyle}>
          <h1>{props.friend.name}</h1>
          <h2>{props.friend.university}</h2>
       </div>
  )
}
function Counter(){
const [count, setCount]=useState(0);

  return(
    <div>
       <h1>Count: {count}</h1>

       <button onClick={()=>setCount(count+1)}>Increase</button>
       <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(data=>setUsers(data))
  },[]);

  return(
    <div>
       <h1>user:{users.length}</h1>
       <ul>
         {
           users.map(user=><li>{user.name}</li>)
         }
       </ul>
    </div>
  )
}

export default App;
