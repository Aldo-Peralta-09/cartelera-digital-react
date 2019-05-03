import React, {Component} from 'react';

class Alert extends Component{
    render(){
        return(
            <div 
                className="alert alert-danger alert-dismissible fade show" 
                style={{
                    width:"75%",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginBottom:"0",
                    marginTop:"15px"
                }} 
                role="alert">
                <strong>{this.props.item.mesage}</strong> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default Alert;