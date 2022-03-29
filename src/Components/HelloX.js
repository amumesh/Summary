import React from 'react';

const print = () => {
    // return ( 
    //     <div>
    //     <h1> Welcome Aman </h1>  
    //     </div>
    // )
    return React.createElement(
        'div', { id: 'hello', className: 'dumCls' },
        React.createElement('h1', null, 'Hello World'))
}

export default print