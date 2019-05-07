class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Black" from="Meech"/>
                <Hello to="Woe" from="Lor yo"/>
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// THIS IS WHERE THE COMPONENTS WILL BE RENDERED
// you can pass data as properties to the various components ex <Hello to="Black" from="Meech"/>