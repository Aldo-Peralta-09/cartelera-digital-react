import React, {Component} from 'react';

class Input extends Component{
    render(){
        return(
            <div className="wrap-input100 validate-input m-b-26" data-validate="Titulo es requerido">
				<span className="label-input100">¿A que evento pertenece?</span>
				<input className="input100" type="text" name="event"/>
				<span className="focus-input100"></span>
			</div>
        );
    }
}

export default Input;