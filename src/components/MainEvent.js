import React from 'react';

class MainEvent extends React.Component{
    render(){
        return(
            <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Evento principal es requerido">
                <span className="label-input100">Evento Principal</span>
                <input className="input100" type="text" name="event"/>
                <span className="focus-input100"></span>
            </div>
        );
    }
}

export default MainEvent;