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
                   <h1>Title</h1>
             
               <div className='areaBox'>
               </div>
            </div>
            </div>
        )
    }
}
