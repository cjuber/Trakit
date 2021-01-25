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
                    <div className='listAll'>
                        <h1>List All</h1>
                    </div>
                   </div>
                   
             
               <div className='areaBox'>
                   <div className='title'>
                        <h1 >Basement</h1> 
                   </div>

                   <div className='areas'>
                        <div className='areasTitle'>
                                <h2>Areas</h2><h2>(3)</h2>
                        </div>
                        <div className='areaList'>
                            <h1>Area 1</h1>
                            <h1>Area 2</h1>
                            <h1>Area 3</h1>
                            
                        </div>
                   </div> 
                    <div className='items'>
                   <div className='itemsTitle'>
                        <h2>Items</h2><h2>(100)</h2>
                   </div>
                   <div className='itemList'>
                            <h1>Item 1</h1>
                            <h1>Item 2</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                            <h1>Item 3</h1>
                                                     
                    </div>
                    <div className='seeMore'>
                        <h2>See More</h2> 
                    </div>
                    </div>
               </div>
            </div>
            </div>
        )
    }
}
