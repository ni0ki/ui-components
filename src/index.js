import React from 'react';

const SimpleButton = ({title = 'Nothing will happen!'}) =>
    (
        <button style={{
            color: 'white',
            backgroundColor: 'gray',
            padding: '5px',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>{title}</button>
    );

export default SimpleButton;
