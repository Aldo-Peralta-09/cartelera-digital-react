import React, {Component} from 'react';

class EventCard extends Component{
    render(){
        return(
            <div className="col col-lg-4">
                <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                    <img src={this.props.url + this.props.evento.image} alt="event img"/>
                    <div className="content-blog text-center">
                        <h4>{this.props.evento.title}</h4>
                        <p>{this.props.evento.start}</p>
                        <p>{this.props.evento.place}</p>
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

export default EventCard;