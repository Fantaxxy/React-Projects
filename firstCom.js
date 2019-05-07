class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

// using function componenets are simple to use, but i beinf replaces by react hooks which allows for full featured componenets

// function Hello () {
//     return (
//         <div>
//             <h1>Hello there!</h1>
//             <h1>Hello there!</h1>       
//             <h1>Hello there!</h1>
//         </div>
//     );
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
