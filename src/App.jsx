import {useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import MainArtBoard from './components/MainArtBoard'

const data = [{
  "id":"1",
  "product" : "GT3RS",
  "cost"    : "$2,50,000",
  "img"      : "https://tse2.mm.bing.net/th/id/OIP.rlpSi-7Mo_1pHwQEyyyyAQHaEK?rs=1&pid=ImgDetMain",
},
{
  "id":"2",
  "product" : "GT2RS",
  "cost"    : "$2,10,000",
  "img"     : "https://tse2.mm.bing.net/th/id/OIP.68lVNr6JR13B8oJgkN8eDQHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7"
},
{
  "id"      :"3",
  "product" : "Panemera",
  "cost"    : "$1,80,000",
  "img"     : "https://tse4.mm.bing.net/th/id/OIP.eBTtK_iviqsrKhCyfkgnCwHaE7?w=250&h=180&c=7&r=0&o=5&pid=1.7"
},
{
  "id":"4",
  "product" : "Tycan",
  "cost"    : "$2,00,000",
  "img"     : "https://tse2.mm.bing.net/th/id/OIP.F_cruUes9M6yGgUlAEzT5wHaEK?w=283&h=180&c=7&r=0&o=5&pid=1.7"
},
{
  "id":"5",
  "product" : "991 Turbo S",
  "cost"    : "$2,35,000",
  "img"     : "https://tse1.mm.bing.net/th/id/OIP.hKC5p8eozM7Y53b-YhT71AHaE7?w=330&h=180&c=7&r=0&o=5&pid=1.7"
},
]

function App() {
  const [count,setCount] = useState(0);
  const [cart , setCart] = useState([]);
  return (
    <div className='flex flex-col gap-2 place-content-start h-screen bg-base-300'>
     <Header data={count} cart={cart}/>
    <MainArtBoard>
    <Cards data={data} setCount={setCount} count={count} setCart={setCart} cart={cart}/>
    </MainArtBoard>
    </div>
  )
}

export default App
