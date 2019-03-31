import React from 'react';

export const ControlPanel = (props) => {
    return(
        <div className="control-panel">
            <button onClick={() => props.increment(props.count)}>+</button>
            <button onClick={() => props.decrement(props.count)}>-</button>
        </div>
    )
};
