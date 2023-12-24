import React from 'react'
import burger from './../images/burger.png'
export default function Home() {

  return (
    <div className='home-page-body'>
      < div >
      <p className="home-page-text"><strong><span className='welcome'>Welcome</span> to
        <br/>The World of<br/>
        Testy & Fresh Food.</strong> </p>
    
      <p className='home-page-text2'>keep it easy with these simple but delicious recipes<br/>
      from make-ahead lunches and midweek meals to<br/>
      fuss-free sides.</p>
    </div>
    <div className='home-page-burgerimage'>
      <img src={burger} width="50%" height="100%"/>
    </div>
    </div>
    
   

    
  )
}
