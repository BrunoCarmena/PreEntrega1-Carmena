import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>{greeting}</h2>
        </div>
    );
};


const containerStyle = {
    width: '80%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
};


const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '16px',
};

export default ItemListContainer;
