var React = require("react");
var bs = require("react-bootstrap");
var RHEditableElement = require("./RHEditableElement.jsx");
var RHEditableForm = require("./RHEditableForm.jsx");
var validators = require("./validatorEnum.js");

var App = React.createClass({

    displayName:'app',
    getInitialState: function() {
        return {
            "firstName":"",
            "lastName":"",
            "isEditing":false
        };
    },

    onIsEditingChange:function(button, isValid){
        if(button === 'ok' && isValid)
        {
            // all this will actually be values collected and sent to an action in flux
            this.setState({"firstName": this.refs.firstName.getValue()});
            this.setState({"lastName": this.refs.lastName.getValue()});
            this.setState({"isEditing":false});
        }else if(button === 'cancel'){
            this.setState({"isEditing":false});
        }else{
            this.setState({"isEditing":true});
        }
    },
    render: function() {
        return (<bs.Grid>
            <bs.Row className='show-grid'>
                <bs.Col md={8}>
                    <RHEditableForm isEditing={this.state.isEditing} onIsEditingChange={this.onIsEditingChange} >
                        <RHEditableElement name='firstName' ref="firstName" value={this.state.firstName} isEditing={this.state.isEditing} validators={[validators.REQUIRED]}  />
                        <RHEditableElement name='lastName' ref="lastName" value={this.state.lastName} isEditing={this.state.isEditing}  />
                    </RHEditableForm >
                </bs.Col>
            </bs.Row>
        </bs.Grid> );
    }
});


React.render(<App/>, document.getElementById("example"));