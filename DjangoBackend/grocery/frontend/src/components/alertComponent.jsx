import React, { Component } from 'react';
import { withAlert } from 'react-alert'

class Alerts extends Component {
    componentDidUpdate(prevProps){
        const error = this.props.errors
        const alert = this.props.alert
        const message = this.props.message

        //Handle errors......................
        if(error !== prevProps.errors){
            if(error.msg.licno){
                alert.error(error.msg.licno)
            }
            if(error.msg.non_field_errors){
                alert.error(error.msg.non_field_errors.join())
            }
            if(error.msg.username){
                alert.error(error.msg.username.join())
            }
        }

        //Handle success messages.................
        if(message !== prevProps.message){
            if(message.shopdeleted){
                alert.success(message.shopdeleted)
            }
            if(message.shopadded){
                alert.success(message.shopadded)
            }
            if(message.loginsuccessfull){
                alert.success(message.loginsuccessfull)
            }
            if(message.logoutsuccessfull){
                alert.success(message.logoutsuccessfull)
            }
        }
    }
    render() { 
        return (  
            <React.Fragment/>
        );
    }
}
 
export default withAlert()(Alerts);