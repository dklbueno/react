import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="inputQtde">Qtde: </label>
            <input value={props.qtde} onChange={e => props.setQtde(+e.target.value)} id="inputQtde" type="number"/>
        </div>        
    )
}