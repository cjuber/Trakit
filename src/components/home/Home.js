import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>

                <div className='areaBg'>
                   
                   <div className='search'>
                        <input></input>
                    <div>
                       <label> Areas<input type='radio'></input></label>
                       <label> Items<input type='radio'></input></label>
                       <label> All<input type='radio' checked='checked'></input></label>
                    </div>
                   </div>
                   <h1>List All</h1>
             
               <div className='areaBox'>
                   <div className='title'>
                        <h1 >Basement</h1> 
                   </div>
                   <div className='areas'>
                        <h2>Cold Storage</h2><h2>(3)</h2>
                   </div>
                   <div className='items'>
                        <h2>Items</h2><h2>(100)</h2>
                   </div>
               </div>
            </div>
            </div>
        )
    }
}
