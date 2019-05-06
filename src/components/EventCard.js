import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DELETE_EVENT_ACTION, GET_EVENTS_ACTION } from '../redux/actions/events/ActionType';
import { Link } from 'react-router-dom';

class EventCard extends Component{

    componentWillReceiveProps(nextProps){
        const ActualProps = this.props;
        const NewProps = nextProps;

        if(ActualProps.responseDeleteEvent.status === "Pending" && NewProps.responseDeleteEvent.status === "OK"){
            this.props.getEvents();
        }
    }
    
    render(){
        const id = '/event/edit/' + this.props.evento._id;
        return(
            <div className="col col-lg-4">
                <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                    <img src={'http://localhost:3000' + this.props.evento.image} alt="event img"/>
                    <div className="content-blog text-center">
                        <h4>{this.props.evento.title}</h4>
                        <p>{this.props.evento.start}</p>
                        <p>{this.props.evento.place.name}</p>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link 
                                className="btn btn-info"
                                to={id}
                                params={{
                                    id: this.props.evento._id
                                }}
                                >Editar</Link>
                            <button type="button" onClick={this.props.deleteEvent.bind(this,this.props.evento._id)} className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({responseDeleteEvent}) => {
    return {
        responseDeleteEvent: responseDeleteEvent
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(GET_EVENTS_ACTION()),
        deleteEvent: (id) => dispatch(DELETE_EVENT_ACTION(id))
    };
}

const EventCardConnect = connect(mapStateToProps,mapDispatchToProps)(EventCard);

export default EventCardConnect;