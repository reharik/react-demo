var React = require("react");
var Html = require('./Html');


var App = React.createClass({

    displayName:'app',
    getInitialState: function() {
        return {
            "firstName":"",
            "lastName":""
        };
    },

    handleChangeFirstName: function(){
        this.setState({firstName: event.target.value});
    },

    handleChangeLastName: function(){
        this.setState({lastName: event.target.value});
    },

    render: function() {
        return (<Html.Grid>
            <Html.Row className='show-grid'>
                <Html.Col md={8}>
                        <Html.Well>
                            <Html.Input type='text'
                                label='First Name'
                                placeholder='First Name'
                                value={this.state.firstName}
                                onChange={this.handleChangeFirstName} />
                            <Html.Input type='text'
                                label='Last Name'
                                placeholder='Last Name'
                                value={this.state.lastName}
                                onChange={this.handleChangeLastName} />
                            <Html.Button bsStyle='success' name="ok" onClick={this.handleClick}>Ok</Html.Button>
                            <Html.Button bsStyle='danger' name="cancel" onClick={this.handleClick}>X</Html.Button>
                        </Html.Well>
                </Html.Col>
            </Html.Row>
        </Html.Grid> );
    }
});


React.render(<App/>, document.getElementById("example"));