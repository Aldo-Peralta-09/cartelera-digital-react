import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AlertSuccess extends Component{
    render(){
        return(
            <div 
                className="alert alert-success alert-dismissible fade show text-center" 
                style={{
                    width:"75%",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginBottom:"0",
                    marginTop:"15px"
                }} 
                role="alert">
                <h4 className="alert-heading text-center">{this.props.item.msg}</h4>
                <p className="text-center">{this.props.item.text}</p>
                <Link to={this.props.item.route} style={{marginTop:"10px",marginLeft:"5px"}} className="btn btn-success">Ir al panel</Link>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default AlertSuccess;