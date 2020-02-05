/* ===     IMPORT SCRIPTS     ===*/

    import React from 'react';
    import ReactDom from 'react-dom';
    import App from './App';

/* ===     IMPORT SCRIPTS     ===*/

/*===   GET ELEMENT FOR REACT RENDER    ===*/

    let root = window.document.body.querySelector('#root');

/*===   GET ELEMENT FOR REACT RENDER    ===*/

/*=== RENDER APP TO ROOT   ===*/

    let jsx = <App />;
    ReactDom.render(jsx,root);

/*=== RENDER APP TO ROOT   ===*/
