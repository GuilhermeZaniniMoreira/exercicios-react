import React from 'react'

// export default -> no index.jsx o primeiro 'parâmetro' é o default
export default props => (
    <h1>Primeiro componente!</h1>
)

export const Segundo = props => (
    <h1>Segundo componente!</h1>
)

/*  
    Se criar duas variaveis (Primeiro e segundo) poder ser exportado assim:
    export { Primeiro, Segundo }
*/