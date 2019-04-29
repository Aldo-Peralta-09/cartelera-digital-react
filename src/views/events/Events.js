import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';
import {GET_EVENTS_ACTION, DELETE_EVENT_ACTION} from '../../redux/actions/ActionType';
import { connect } from 'react-redux';

class Events extends Component{

    componentDidMount(){
        this.props.getEvents();
    }

    componentWillReceiveProps(nextProps){
        const ActualProps = this.props;
        const NewProps = nextProps;

        if(ActualProps.responseDeleteEvent.status === "Pending" && NewProps.responseDeleteEvent.status === "OK"){
            this.props.getEvents();
        }
    }

    render(){
        return(
            <section id="blog" className="padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Eventos Registrados</h2>
                                <p className="separator">Catalogo de Eventos registrados en la Cartelera Digital</p>
                                <Link to="/add-event" className="btn btn-success scrollto">Agregar Evento</Link>
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
        return this.props.stateEvents.map((evento) => {
            if(evento){
                const BASE_URL = 'https://cartelera-digital.herokuapp.com';
                const id = evento._id;
                return(
                    <div className="col col-lg-4">
                        <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                            <img src={BASE_URL + evento.image} alt="event img"/>
                            <div className="content-blog text-center">
                                <h4>{evento.title}</h4>
                                <p>{evento.start}</p>
                                <p>{evento.place}</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-info">Editar</button>
                                    <button 
                                        type="button" 
                                        onClick={this.props.deleteEvent.bind(this,id)} 
                                        className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        })
    }
}

const mapStateToProps = ({stateEvents,responseDeleteEvent}) => {
    return {
        stateEvents: stateEvents,
        responseDeleteEvent: responseDeleteEvent
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(GET_EVENTS_ACTION()),
        deleteEvent: (id) => dispatch(DELETE_EVENT_ACTION(id))
    }; 
};

const ConnectUsers = connect(mapStateToProps,mapDispatchToProps)(Events);

export default ConnectUsers;