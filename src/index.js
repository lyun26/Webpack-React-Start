// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

class ImageDesigner {
	constructor(selector, options = {}){
        this.selector = selector;
		this.node = document.querySelector(this.selector)	
		this.init()
	}

	init(){
        const root = ReactDOMClient.createRoot(this.node);
		return root.render(
			<h1 className='bg-neutral-300'>hello world!</h1>

		)
	}
	
}
export { ImageDesigner }
