import React, {Component} from 'react';

class Signup extends Component{

    _getData(){
        const data = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            dependency: this.refs.dependency.value,
            password: this.refs.password.value
        }

        console.log(data);
    }

    render(){
        return(
            <section className="wow fadeIn">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{backgroundImage:"url(" + require('../../images/culture.jpg') + ")"}}>
                                <span className="login100-form-title-1">Registrate</span>
                            </div>

                            <div className="text-center" style={{paddingTop:"15px"}}>
                                <img src={require('../../images/cartelera.png')} className="rounded" alt="Cartelera Logo"/>
                            </div>

                            <form className="login100-form validate-form">
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Nombre</span>
                                    <input className="input100" type="text" ref="name" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" ref="email" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px"}} data-validate="Dependencia es requerido">
                                    <span className="label-input100">Dependencia</span>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" for="inputGroupSelect01">Áreas</label>
                                        </div>
                                        <select className="custom-select input100" ref="dependency" required id="inputGroupSelect01">
                                            <option defaultValue>Seleccione un área</option>
                                            <option defaultValue="Despacho del Secretario">Despacho del Secretario</option>
                                            <option defaultValue="Innovación y Emprendimiento Cultural">Innovación y Emprendimiento Cultural</option>
                                            <option defaultValue="Patrimonio Cultural">Patrimonio Cultural</option>
                                            <option defaultValue="Centro de las Artes">Centro de las Artes</option>
                                            <option defaultValue="Museos">Museos</option>
                                            <option defaultValue="Biblioteca Ricardo Garibay">Biblioteca Ricardo Garibay</option>
                                            <option defaultValue="Bibliotecas">Bibliotecas</option>
                                            <option defaultValue="Arte Popular">Arte Popular</option>
                                            <option defaultValue="Fomento Editorial">Fomento Editorial</option>
                                        </select>
                                    </div>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-18" data-validate = "La contraseña es requerida">
                                    <span className="label-input100">Contraseña</span>
                                    <input className="input100" type="password" ref="password" required minLength="8"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input className="login100-form-btn" defaultValue="Registrar" onClick={this._getData.bind(this)} type="button">
                                        
                                    </input>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;