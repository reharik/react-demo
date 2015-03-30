var React = require("react");
var validationRunner = require('./validation.js');
var bs = require("react-bootstrap");



var RHInput = React.createClass({
    natural: function (val) {
        return val.replace(/([A-Z])/g, ' $1')
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); })
    },
    getInitialState: function () {
        return {"myValue": this.props.value,
        "isValid": true};
    },
    getValue:function(){
        return this.state.myValue;
    },
    isValid:function(){
        return this.state.isValid;
    },
    validate:function(value){
        var result = validationRunner(this.props.validators, value, "text");
        this.setState({"isValid" : result.valid});
        if(result.valid){
            this.setState({bsStyle:"success"});
        }else {
            this.setState({bsStyle: "error"});
        }
    },
    handleChange: function (event) {
        event.preventDefault();
        this.validate(event.target.value);
        this.setState({myValue: event.target.value});
    },

    render: function () {
        var label = this.natural(this.props.label || this.props.name);
        var placeholder = this.natural(this.props.placeholder || this.props.name);

        return(<bs.Input type='text'
            label={label}
            placeholder={placeholder}
            value={this.state.myValue}
            className={this.state.classNames}
            onChange={this.handleChange}
            bsStyle={this.state.bsStyle} />);
    }
});

module.exports = RHInput;
 
 