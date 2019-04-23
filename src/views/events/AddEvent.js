import React, {Component} from 'react';
import {DISCIPLINES,CATEGORIES, MUNICIPALITIES, PLACES} from '../../data/data';

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
                                
                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Titulo es requerido">
                                    <span className="label-input100">Titulo del Evento</span>
                                    <input className="input100" type="text" name="title" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                
                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Descripcion es requerido">
                                    <span className="label-input100">Descripción</span>
                                    <textarea name="description" className="input100" required></textarea>
                                    <span class="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Disciplina es requerido">
                                    <span className="label-input100">Disciplina</span>
                                    <select className="input100" style={{height:"45px"}} name="discipline">
                                        {DISCIPLINES.map((discipline,index) => {
                                            return <option value={discipline.name} key={index}>{discipline.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Categoria es requerido">
                                    <span className="label-input100">Categoria</span>
                                    <select className="input100" style={{height:"45px"}} name="category">
                                        {CATEGORIES.map((category,index) => {
                                            return <option value={category.name} key={index}>{category.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Tipo de Evento</span>
                                    <select className="input100" style={{height:"45px"}} name="type" required>
                                        <option value="Eventos">Eventos</option>
                                        <option value="Exposiciones Temporales">Exposiciones Temporales</option>
                                        <option value="Actividades Permanentes">Actividades Permanentes</option>
                                        <option value="Convocatoria">Convocatoria</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-sb-m w-full p-b-30 validate-input" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Jerarquia es requerido">
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

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Evento principal es requerido">
                                    <span className="label-input100">Evento Principal</span>
                                    <input className="input100" type="text" name="event"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Fecha de Inicio es requerido">
                                    <span className="label-input100">Fecha de Inicio</span>
                                    <input className="input100" type="date" name="start" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Fecha de Termino es requerido">
                                    <span className="label-input100">Fecha de Termino</span>
                                    <input className="input100" type="date" name="finish" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Municipio es requerido">
                                    <span className="label-input100">Municipio</span>
                                    <select className="input100" style={{height:"45px"}} name="municipality" required>
                                        {MUNICIPALITIES.map((municipality,index) => {
                                            return <option value={municipality.name} key={index}>{municipality.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Lugar es requerido">
                                    <span className="label-input100">Lugar</span>
                                    <select className="input100" style={{height:"45px"}} name="municipality" required>
                                        {PLACES.map((place,index) => {
                                            return <option value={place.name} key={index}>{place.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Organiza</span>
                                    <select className="input100" style={{height:"45px"}} name="organizer">
                                        <option value="Secretaria de Cultura">Secretaria de Cultura</option>
                                        <option value="Organismo Independiente">Organismo Independiente</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Ponente es requerido">
                                    <span className="label-input100">Imparte</span>
                                    <input className="input100" type="text" name="speaker"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="URL es requerido">
                                    <span className="label-input100">URL del evento</span>
                                    <input className="input100" type="url" name="url"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Entrada es requerido">
                                    <span className="label-input100">Entrada</span>
                                    <select className="input100" style={{height:"45px"}} name="entry">
                                        <option value="Gratuito">Gratuito</option>
                                        <option value="Boleto de Cortesia">Boleto de Cortesia</option>
                                        <option value="Cuota de Recuperacion">Cuota de Recuperación</option>
                                        <option value="Inscripcion">Inscripción</option>
                                        <option value="Bono">Bono</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="URL es requerido">
                                    <span className="label-input100">Precio</span>
                                    <input className="input100" type="number" name="price"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-sb-m w-full p-b-30" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Descuentos es requerido">
                                    <span className="label-input100">Descuentos</span>
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb10" type="checkbox" value="INAPAM" name="discount"/>
                                        <label className="label-checkbox100" for="ckb10">
                                            INAPAM
                                        </label>
                                        <br></br>
                                        <input className="input-checkbox100" id="ckb20" type="checkbox" value="Estudiantes" name="discount"/>
                                        <label className="label-checkbox100" for="ckb20">
                                            Estudiantes
                                        </label>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Publico es requerido">
                                    <span className="label-input100">Público</span>
                                    <select className="input100" style={{height:"45px"}} name="public">
                                        <option value="General">General</option>
                                        <option value="Niños">Niños</option>
                                        <option value="Adolescentes">Adolescentes</option>
                                        <option value="Jovenes">Jóvenes</option>
                                        <option value="Adultos">Adultos</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Publico es requerido">
                                    <span className="label-input100">Público Especifico</span>
                                    <select className="input100" style={{height:"45px"}} name="especificPublic">
                                        <option value="General">General</option>
                                        <option value="Estudiantes Primaria">Estudiantes Primaria</option>
                                        <option value="Estudiantes Secundaria">Estudiantes Secundaria</option>
                                        <option value="Estudiantes Bachillerato">Estudiantes Bachillerato</option>
                                        <option value="Discapacidad Visual">Discapacidad Visual</option>
                                        <option value="Discapacidad Auditiva">Discapacidad Auditiva</option>
                                        <option value="Discapacidad Motriz">Discapacidad Motriz</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Genero es requerido">
                                    <span className="label-input100">Genero</span>
                                    <select className="input100" style={{height:"45px"}} name="gender">
                                        <option value="General">General</option>
                                        <option value="Hombres">Hombres</option>
                                        <option value="Mujeres">Mujeres</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Banner es requerido">
                                    <span className="label-input100">Encabezado</span>
                                    <input type="hidden" name="MAX_FILE_SIZE" value="3000000"/>
                                    <input className="input100" type="file" name="banner" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Imagen es requerido">
                                    <span className="label-input100">Imagen Destacada</span>
                                    <input type="hidden" name="MAX_FILE_SIZE" value="2000000"/>
                                    <input className="input100" type="file" name="image" required/>
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

export default AddEvent;