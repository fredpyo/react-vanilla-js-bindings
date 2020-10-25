import React from 'react';
import ReactDOM from 'react-dom';
import {Game, Square} from './game';

// TODO comment me if you wanna do things by hand
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

// ========================================

// React is just Javascript,
// everything you need is pretty much available from the get go
// you just need to make the React components avaiable to the outside world.
// An innocent approach like this won't suffice thouhg 
window.Square = Square;

// THIS won't work at all
// $ ReactDOM.render(Square, #node);

// ... this will render, but will bring in no behavior:
// $ ReactDOM.render(Square.render, #node)

// ... we need to construct the element first and THEN render it
// el = $ React.createElement(Square, ...)
// $ ReactDOM.render(el, #node)
// ... we might be better of with a wrapper, huh?

// slightly better solution, create a global variable with all widgets and necessary wrappers
// idea from: https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_components_with_vanilla_js.html


// ========================================


var nodes = [];

// render a react component on screen
let render = (component, props, targetNode, callback) => {
    const reactElement = React.createElement(component, props, null);
    ReactDOM.render(reactElement, targetNode, callback);
    nodes.push(targetNode);
    return reactElement;
};

// reconstruct directly from HTML
let hidrate = (targetNode) => {
    const elementName = targetNode.tagName.toLowerCase();
    let props = {};
    const attributes = targetNode.attributes;
    var attribute;
    for (var i = 0; i < attributes.length; i++) {
        attribute = attributes[i];
        props[attribute.name] = attribute.value;
    }
    render(SUPER.widgets[elementName], props, targetNode, null);
}

// detach all 
let unmountAll = () => {
    if (nodes.length === 0) {
        return;
    }

    nodes.forEach(node => ReactDOM.unmountComponentAtNode(node));
    nodes = [];
}

// detach one
let unmount = (node) => {
    ReactDOM.unmountComponentAtNode(node);
    nodes = nodes.splice(nodes.findIndex(node), 1); 
}

// magic 🧙‍♀️
const SUPER = {
    render: render,
    hidrate: hidrate,
    unmountAll: unmountAll,
    unmount: unmount,
    widgets: {
        square: Square,
        game: Game
    },
};
window.SUPER = SUPER;