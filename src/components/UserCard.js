import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DELETE_USER_ACTION, GET_USERS_ACTION } from '../redux/actions/users/ActionType';
import { Link } from 'react-router-dom';

class UserCard extends Component{

    componentWillReceiveProps(nextProps){
        const ActualProps = this.props;
        const NewProps = nextProps;

        if(ActualProps.responseDeleteUser.status === "Pending" && NewProps.responseDeleteUser.status === "OK"){
            this.props.getUsers();
        }
    }

    render(){
        const id = "/user/edit/" + this.props.user._id;
        return(
            <div className="col-12 col-md-6 col-lg-3">
                <div className="block-blog text-left">
                    <img src={require('../images/user.png')} alt="user img"/>
                    <div className="content-blog text-center">
                        <h4>{this.props.user.name}</h4>
                        <p>{this.props.user.email}</p>
                        <p>{this.props.user.dependency}</p>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link
                                className="btn btn-info"
                                to={id}
                                params={{
                                    id: this.props.user._id
                                }}>Editar</Link>
                            <button type="button" onClick={this.props.deleteDato.bind(this,this.props.user._id)} className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({responseDeleteUser}) => {
    return{
        responseDeleteUser: responseDeleteUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS_ACTION()),
        deleteDato: (id) => dispatch(DELETE_USER_ACTION(id))
    };
}

const UserCardConnect = connect(mapStateToProps,mapDispatchToProps)(UserCard);

export default UserCardConnect;