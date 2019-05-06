import React, {Component} from 'react';

class Schedule extends Component{

    state={
        value: ""
    }

    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }

    render(){
        return(
            <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}}>
				<span className="label-input100">{this.props.data.title}</span>
                <div className="input-group mb-3">
                    <input type="datetime-local" ref={this.props.data.name} onChange={this.props.addHour.bind(this, this.props.index)} className="form-control input100" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-danger" style={{color:"#fff"}} type="button" id="button-addon2" onClick={this._remove.bind(this)}>Close</button>
                    </div>
                </div>
				<span className="focus-input100"></span>
			</div>
        );
    }
}

export default Schedule;