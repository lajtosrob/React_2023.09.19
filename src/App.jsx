import React from 'react'
import ItemCard from './components/itemCard'
import './App.css'
import jeans from '../src/assets/jeans.jpeg'
import jeans1 from '../src/assets/jeans_2.jpeg'
import jeans2 from '../src/assets/jeans_1.jpeg'
import pullover1 from '../src/assets/pullover_1.webp'
import pullover2 from '../src/assets/pullover_2.webp'
import pullover3 from '../src/assets/pullover_3.webp'

const App = () => {
  return (
    <div>
      <h1>StyleZen</h1>
      <div className='cardHolder'>
        <ItemCard ItemName='Pulóver' price={8000} discount={0.5} picture={jeans1}/>
        <ItemCard ItemName='Farmer' price={10000} picture={jeans} />
        <ItemCard ItemName='Májki cipő' price={53000} discount={.2} picture={jeans2}/>
        <ItemCard ItemName='Májki cipő' price={53000} discount={.3} picture={pullover1}/>
        <ItemCard ItemName='Májki cipő' price={53000} discount={.4} picture={pullover2}/>
        <ItemCard ItemName='Májki cipő' price={53000} discount={.6} picture={pullover3}/>

      </div>
    </div>
  )
}

export default App