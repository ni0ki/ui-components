import * as React from 'react';

const Button = ({title = 'Nothing will happen!'}) =>
    (
        <button style={{
            color: 'white',
            backgroundColor: 'purple',
            padding: '5px',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>{title}</button>
    );

export default Button
