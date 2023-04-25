import { render } from "react-dom"

class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.state({ count: this.state.count + 1})
        this.state({ count: this.state.count + 1})
        this.state({ count: this.state.count + 1})
        alert(this.state.count)
    }
}

render(){
    const result =  { count } = this.state
    return (
     <result ></result>
    )
}

export default StateDemo