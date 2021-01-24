import React, { Component } from 'react'

export default class Header extends Component {
    render() {
       
        return (
            <div>
                <header>
                    <div className='title'>
                    <h1>TrakIt</h1>
                    </div>
                    <div className='account'>
                    <button>ACCT</button>
                    
                    </div>
                </header>
            </div>
        )
    }
}