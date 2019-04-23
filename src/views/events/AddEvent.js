import React, {Component} from 'react';
import {DISCIPLINES,CATEGORIES} from '../../data/data';

class AddEvent extends Component{

    render(){
        return(
            <section className="wow fadeIn">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{backgroundImage:"url(" + require('../../images/culture.jpg') + ")"}}>
                                <span className="login100-form-title-1">Agrega un Evento</span>
                            </div>

                            <div className="text-center" style={{paddingTop:"15px"}}>
                                <img src={require('../../images/cartelera.png')} className="rounded" alt="Cartelera Logo"/>
                            </div>

                            <form className="login100-form validate-form">
                                
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Titulo es requerido">
                                    <span className="label-input100">Titulo del Evento</span>
                                    <input className="input100" type="text" name="title" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Descripcion es requerido">
                                    <span className="label-input100">Descripción</span>
                                    <textarea name="description" className="input100" required></textarea>
                                    <span class="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Disciplina es requerido">
                                    <span className="label-input100">Disciplina</span>
                                    <select className="input100" style={{height:"45px"}} name="discipline">
                                        {DISCIPLINES.map((discipline,index) => {
                                            return <option value={discipline.name} key={index}>{discipline.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Categoria es requerido">
                                    <span className="label-input100">Categoria</span>
                                    <select className="input100" style={{height:"45px"}} name="category">
                                        {CATEGORIES.map((category,index) => {
                                            return <option value={category.name} key={index}>{category.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Tipo de Evento</span>
                                    <select className="input100" style={{height:"45px"}} name="type">
                                        <option value="Eventos">Eventos</option>
                                        <option value="Exposiciones Temporales">Exposiciones Temporales</option>
                                        <option value="Actividades Permanentes">Actividades Permanentes</option>
                                        <option value="Convocatoria">Convocatoria</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-sb-m w-full p-b-30 validate-input" style={{paddingTop:"15px"}} data-validate="Jerarquia es requerido">
                                    <span className="label-input100">Jerarquia</span>
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="radio" value="Evento" name="hierarchy" required/>
                                        <label className="label-checkbox100" for="ckb1">
                                            Evento
                                        </label>
                                        <br></br>
                                        <input className="input-checkbox100" id="ckb2" type="radio" value="Sub-Evento" name="hierarchy" required/>
                                        <label className="label-checkbox100" for="ckb2">
                                            Sub-Evento
                                        </label>
                                    </div>
                                </div>

                                <div id="schedule"></div>

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

export default AddEvent;