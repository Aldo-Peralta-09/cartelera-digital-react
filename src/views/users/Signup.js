import React, {Component} from 'react';

class Signup extends Component{
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
                                    <input className="input100" type="text" name="name" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" name="email" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Dependencia es requerido">
                                    <span className="label-input100">Dependencia</span>
                                    <select className="input100" style={{height:"45px"}} name="dependency" required>
                                        <option value="Secretaria de Cultura">Secretaria de Cultura</option>
                                        <option value="Independiente">Independiente</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-18" data-validate = "La contraseña es requerida">
                                    <span className="label-input100">Contraseña</span>
                                    <input className="input100" type="password" name="password" required minLength="8"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input className="login100-form-btn" type="submit">

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