import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component' // Como o primeiro elemento é export default é declarado assim
                                                // Segundo elemento não é default, assim, é necessários chaves


ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
,document.getElementById('app'))