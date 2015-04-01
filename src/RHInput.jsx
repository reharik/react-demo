var React = require("react");
var Input = require("react-bootstrap").Input;

var RHInput = React.createClass({
    natural: function (val) {
        return val.replace(/([A-Z])/g, ' $1')
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); })
    },
    getInitialState: function () {
        return {"myValue": this.props.value};
    },
    getValue:function(){
        return this.state.myValue;
    },

    handleChange: function (event) {
        event.preventDefault();
        this.setState({myValue: event.target.value});
    },

    render: function () {
        var label = this.natural(this.props.label || this.props.name);
        var placeholder = this.natural(this.props.placeholder || this.props.name);

        return(<Input type='text'
            label={label}
            placeholder={placeholder}
            value={this.state.myValue}
            className={this.state.classNames}
            onChange={this.handleChange} />);
    }
});

module.exports = RHInput;
 
 