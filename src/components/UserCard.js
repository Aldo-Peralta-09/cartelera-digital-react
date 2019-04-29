import React, {Component} from 'react';

class UserCard extends Component{
    render(){
        return(
            <div className="col-12 col-md-6 col-lg-3">
                <div className="block-blog text-left">
                    <img src={require('../images/user.png')} alt="user img"/>
                    <div className="content-blog text-center">
                        <h4>{this.props.user.name}</h4>
                        <p>{this.props.user.email}</p>
                        <p>{this.props.user.dependency}</p>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info">Editar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;