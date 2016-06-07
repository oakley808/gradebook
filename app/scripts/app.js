var React = window.React = require('react'),
    ReactDOM = require('react-dom'),
    mountNode = document.getElementById('app')


var List = React.createClass({
  onBlur: function(i, e){
    var v = e.target.value
    //var val = ReactDOM.findDOMNode(this.refs["vote"+i]).value
    this.props.onBlur(i,v)
  },
  render: function(){
    var createItems = (item, i) => {
      var ref = "vote"+i
      return (
        <li>
          <input
            onBlur={this.onBlur.bind(this, i)}
            defaultValue={item} />
        </li>
      )
    }

    return (
      <ul>{this.props.items.map(createItems)}</ul>
    )
  }
})


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
        <hr />
        <List onBlur={this.onBlur} items={this.state.items} />
        <hr />
      </div>
    )
  }
})





ReactDOM.render(<App />, mountNode);
