class Hello extends React.Component {
    render() {
        const props = this.props;
        return <p>Yo whats good {props.to} Nothing {props.from}

        </p>
        
    }
}
// THIS IS THE COMPONENET
// you can pass properties using this ans the variable you defined in the index ie to AND from