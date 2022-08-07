import React from 'react'

export class Click extends React.Component {
    constructor(props) {
        super(props)
        this.clickBind = this.clickBind.bind(this);
    }

    clickHandler() {
        console.log('no', this)
    }
    clickBind() {
        console.log('bind', this)
    }

     clickArrow = () => console.log('arrow', this)

    render() {
        return (
            <div>
                 <button onClick={this.clickHandler()}>Click Me</button>
                <button onClick={this.clickHandler}>Click Me</button>
                <button onClick={this.clickBind}>Click bind</button>
                <button onClick={this.clickArrow}>Click Arrow</button>
            </div>
        )
    }
}