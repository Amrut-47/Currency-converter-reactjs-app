import React from 'react'

function InputBase({textLabel, ...props}) {
    return (
        <>
           <input type="number" className="form-control" {...props}/>
           <span className="input-group-text">{textLabel}</span> 
        </>
    )
}

export default InputBase
