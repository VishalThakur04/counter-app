import React from 'react'

export const Chlid = React.memo(
    (props) => {
        console.log('clhid re-render')
      return (
        <div>
            <button onClick={props.handleclick}>
                {props.buttonName}
            </button>
        </div>
      )
    }
)
