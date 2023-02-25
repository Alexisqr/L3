import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

	render() {
		return (<div >
		<div id = 'N1'>
		</div>
		<div id = 'N2'>
		</div>
		<div id = 'N3'>
		</div>
		<div id = 'N4'>
		</div>
		<div id = 'N5'>
		</div>
	    <div id = 'N6'>
		</div>
		<div id = 'N7'>
		</div>
		<div id = 'N8'>
		</div>
		<div id = 'N9'>
		</div>
		<div id = 'N10'>
		</div>
	    <div id = 'N11'>
		</div>
	
	
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class Nom1 extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Іван', age: 25}; 
	}
	render() 
	{
       return (
			<div>
		<h3>1</h3>
			Ім’я:{this.state.name}, Вік: {this.state.age}
		</div>
			)
	}
}
ReactDOM.render(<Nom1/>,document.getElementById('N1'));
class Nom2 extends React.Component {
	showMessage() {
		alert('hello');
	}

	render() {
		return (<div >
			<h3>2</h3>
			<button onClick={this.showMessage}> Кнопка </button>
		</div>)
	}
}
ReactDOM.render(<Nom2/>,document.getElementById('N2'));
class Nom3 extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Іван', age: 25}; 
	}

    showName() {
		alert(this.state.name);
	}
//V Була помилка але додавши bind(this) вона зникла
//це повязано з втрата контексту 
	render() {
		return (<div >
			<h3>3</h3>
			<button onClick={this.showName.bind(this)}> Кнопка </button>
		</div>)
	}
}
ReactDOM.render(<Nom3/>,document.getElementById('N3'));
class Nom4 extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Іван', age: 25}; 
	}

 showName() {

         //this.state.name = 'jjjj'; - не змінит виведене значення проте якщо через 
         //alert тут вивести значення воно буде jjjj

		this.setState({name: 'Коля'});//setState-моментално зміює теререшній name
	}

	render() {
		return (<div>
				<h3>4</h3>
			<div>
			Ім’я:{this.state.name}, Вік: {this.state.age}
		</div>
			<div >
			<button onClick={this.showName.bind(this)}> Кнопка </button>
		</div>
		</div>)
	}
}
ReactDOM.render(<Nom4/>,document.getElementById('N4'));

class Nom5 extends React.Component {
		constructor() {
		super();
		this.state = {show: true, name: 'Іван'};
	}

	render() {
		return (<div >
				<h3>5</h3>
		{this.state.show ? 'Привіт, ' : 'Пока, '}{this.state.name}!
	
		</div>)
	}

}
ReactDOM.render(<Nom5/>,document.getElementById('N5'));
class Nom6 extends React.Component {
		constructor() {
		super();
		this.state = {name: 'Іван', age: 25,show: true}; 
		
	}

	
	hideText() {
		this.setState({show: false});
	}

	render() {
		
	
		if (!(this.state.show)) {
			var message = <p>Ім’я:{this.state.name}, Вік: {this.state.age}</p>;
		}

		return <div>
			<h3>6</h3>
			{message}
			<button onClick={this.hideText.bind(this)}>Натисни на мене</button>
		</div>;
	}

}
ReactDOM.render(<Nom6/>,document.getElementById('N6'));
class Nom7 extends React.Component {
		constructor() {
		super();
		this.state = {name: 'Іван', age: 25,show: true}; 
		
	}
	
	hideText() {
		if (this.state.show) {
			this.setState({show: false});
		}else{
			this.setState({show: true});
		}
		
	}
	render() {
			
		if (!(this.state.show)) {
			var message = <p>Ім’я:{this.state.name}, Вік: {this.state.age}</p>;
		}else{
			var message = <p></p>;
		}

		return <div>
			<h3>7</h3>
			{message}
			<button onClick={this.hideText.bind(this)}>Натисни на мене</button>
		</div>;
	}

}
ReactDOM.render(<Nom7/>,document.getElementById('N7'));
class Nom8 extends React.Component {
		constructor() {
		super();
		this.state = {name: 'Іван', age: 25,show: true}; 
		
	}
	
	hideText() {
		if (this.state.show) {
			this.setState({show: false});
		}else{
			this.setState({show: true});
		}
		
	}
	render() {
			
		if (!(this.state.show)) {
			var message = <p>Ім’я:{this.state.name}, Вік: {this.state.age}</p>;
		}else{
			var message = <p></p>;
		}

		return <div>
			<h3>8</h3>
			{message}
			<button onClick={this.hideText.bind(this)}>{this.state.show ? 'показати' : 'сховати'}</button>
		</div>;
	}

}
ReactDOM.render(<Nom8/>,document.getElementById('N8'));
class Nom9 extends React.Component {
       constructor() {
		super();
		this.state = {names: ['Коля', 'Вася', 'Петя']};
	}

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}</li>;
		});

		return <ul>
		<h3>9</h3>
			{list}
		</ul>;
	}


}
ReactDOM.render(<Nom9/>,document.getElementById('N9'));
class Nom10 extends React.Component {
       constructor() {
		super();
		this.state = {names: ['Коля', 'Вася', 'Петя']};
	}

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name} - {index}</li>;
		});

		return <ul>
		<h3>10</h3>
			{list}
		</ul>;
	}


}
ReactDOM.render(<Nom10/>,document.getElementById('N10'));

class Nom11 extends React.Component {
       constructor() {
		super();
		this.state = {
	hrefs: [
		{href: '1.html', text: 'посилання 1'},
		{href: '2.html', text: 'посилання 2'},
		{href: '3.html', text: 'посилання 3'},
	]
};

	}

	render() {
		const list = this.state.hrefs.map((hrefs, index) => {
			return <li  key={index}><a href = {hrefs.href}>{hrefs.text}</a></li>;
		});

		return <ul>
		<h3>11</h3>
			{list}
		</ul>;
	}


}
ReactDOM.render(<Nom11/>,document.getElementById('N11'));