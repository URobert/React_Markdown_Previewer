import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');

var App = React.createClass ({

  getInitialState: function (){
  	return {
      userInput: ''
    }
  },

	handleUserInput: function (e) {
	  this.setState({
	    userInput: e.target.value
	  });
	},

	getMarkdownText() {
    var rawMarkup = marked(this.state.userInput, {sanitize: true});
    return { __html: rawMarkup }
  },

	render: function () {
		return(
			<div>
				<h2> React Markup Converter </h2>
				<div className='inputBox'>
					Input Box.
					<br /><br />
						<textarea
		          type="text"
		          onChange = {this.handleUserInput}
		          value= {this.state.userInput}/>
				</div>
				<div className='outputBox'
					style={{color: 'red',
					 				marginLeft: '50%',
									marginTop: '-4.5%'}}>
					Output box.
					<div dangerouslySetInnerHTML={this.getMarkdownText()} />
				</div>
			</div>
		);
	}
});

export default App;
