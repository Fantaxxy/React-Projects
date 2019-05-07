class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <NumPicker />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
// so you can write code in a seperate file and render that same file as a component on one page
// so in all of react, you will create a class app react.component where you will render other components
// written in a seperate file similar to rails partials