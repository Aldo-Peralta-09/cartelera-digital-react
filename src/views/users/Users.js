import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';
import { GET_USERS_ACTION } from '../../redux/actions/users/ActionType';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard';

class Users extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return(
            <section id="blog" className="padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Usuarios Registrados</h2>
                                <p className="separator">Directorio de Usuarios registrados en la Cartelera Digital</p>
                                <Link to="/signup" className="btn btn-success scrollto">Agregar Usuario</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {this._renderUsers()}
                    </div>
                </div>
            </section>
        );
    }

    _renderUsers = () => {
        return this.props.stateUsers.map((user,index) => {
            if(user){
                return(
                    <UserCard user={user} key={index}/>
                );
            }
            return null;
        });
    }
}

const mapStateToProps = ({stateUsers}) => {
    return {
        stateUsers: stateUsers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS_ACTION())
    };
};

const ConnectUsers = connect(mapStateToProps,mapDispatchToProps)(Users);

export default ConnectUsers;