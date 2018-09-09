import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    
    <Family lastName="Moreira">
        <Member name="Guilherme"/>
        <Member name="Gustavo"/>
        <Member name="John Doe"/>
    </Family>

,document.getElementById('app'))