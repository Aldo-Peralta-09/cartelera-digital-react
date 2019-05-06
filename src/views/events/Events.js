import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';
import {GET_EVENTS_ACTION} from '../../redux/actions/events/ActionType';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard';

class Events extends Component{

    componentDidMount(){
        this.props.getEvents();
    }

    render(){
        return(
            <section id="blog" className="padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Eventos Registrados</h2>
                                <p className="separator">Catalogo de tus eventos registrados en la Cartelera Digital</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <Link to="/add-event" className="btn btn-success scrollto">Agregar Evento</Link>
                                    <button type="button" className="btn btn-danger">Cerrar Sesión</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {this._renderEvents()}
                    </div>
                </div>
            </section>
        );
    }

    _renderEvents = () => {
        return this.props.stateEvents.map((evento,index) => {
            if(evento){
                return(
                    <EventCard evento={evento} key={index}/> 
                );
            }
            return null;
        })
    }
}

const mapStateToProps = ({stateEvents}) => {
    return {
        stateEvents: stateEvents
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(GET_EVENTS_ACTION())
    }; 
};

const ConnectUsers = connect(mapStateToProps,mapDispatchToProps)(Events);

export default ConnectUsers;