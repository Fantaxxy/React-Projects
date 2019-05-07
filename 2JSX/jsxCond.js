function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7){
            msg = 
            <div>
                <h2>YOU LIT MY GUY!</h2>
                <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
            </div>
        } else {
            msg = <p>YOU NOT THAT HOT FR</p>
        }
        return (
        <div>
            <h1>your number is: {num}</h1>
            {msg}
        </div> 
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
// CHECK YOUR SPELLING FOR EVERYTHING
// we used const to define the function get Num outside the Div
// This {num === 7 ? 'Congrats!' : 'Unlucky!'} ---- is a ternary operator  it takes 3 arguements in javascript
// ? = if : = else
// where we will say yes or no to something {num === 7 ? 'Congrats!' : 'Unlucky!'}
// it reads if num is === 7 then say congrats else Unlucky!