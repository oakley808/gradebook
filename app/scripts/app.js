var React = window.React = require('react'),
    ReactDOM = require('react-dom'),
    mountNode = document.getElementById('app')




var App = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  onClick: function(e){
    var grade = parseInt(this.refs.grade.value, 10)

    var newItems = this.state.items.concat([grade])

    this.setState({items: newItems})
  },
  onBlur: function(i, v){
    var val = parseInt(v,10)

    var newItems = this.state.items.map( (item, idx) => {
      return idx === i ? val : item
    })
    this.setState({items: newItems})
  },
  render: function() {
    console.log('render, state is:', this.state.items)

    return (
      <div>
        <input name="grade" ref="grade" />
        <button onClick={this.onClick}>Add New Grade</button>
      </div>
    )
  }
})





ReactDOM.render(<App />, mountNode);
