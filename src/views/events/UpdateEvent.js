import React, {Component} from 'react';
import {DISCIPLINES,CATEGORIES, MUNICIPALITIES, PLACES} from '../../data/data';
import Schedule from '../../components/Input';
import MainEvent from '../../components/MainEvent';

class AddEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
            schedules : [{
                title: "Horario ",
                name: "hour[]"
            }],
            lenght: 1,
            show: false
        }
    }

    _loadComponent(){
        let { show } = this.state;
        if(show){
            return <MainEvent/>
        } else{
            return null;
        }
    }

    _showComponent(show){
        if(!show){
            show = true;
            this.setState({
                show: show
            })
        }
    }

    _hideComponent(show){
        if(show){
            show = false;
            this.setState({
                show: show
            })
        }
    }

    _remove(position){
        let { schedules,lenght } = this.state;
        let newSchedules = [
            ...schedules.slice(0, position),
            ...schedules.slice(position + 1),
        ]

        this.setState({
            schedules:newSchedules,
            lenght: --lenght
        });
    }

    _add(){
        let { schedules,lenght } = this.state;
        ++lenght;
        let newSchedules = [
            ...schedules,
            {
                title: "Horario " + lenght,
                name: "hour"
            }
        ]

        this.setState({
            schedules:newSchedules,
            lenght: lenght
        });
    }

    _getData(){
        const title = this.refs.title.value;
        const description = this.refs.description.value;
        const discipline = this.refs.discipline.value;
        const category = this.refs.category.value;
        const type = this.refs.type.value;
        const hierarchy = this.refs.hierarchy.value;
        //const evento = this.refs.evento.value || null;
        const start = this.refs.start.value;
        const finish = this.refs.finish.value;
        //const dates = this.refs.hour.value;
        const municipality = this.refs.municipality.value;
        const place = this.refs.place.value;
        const organizer = this.refs.organizer.value;
        const speaker = this.refs.speaker.value;
        const url = this.refs.url.value;
        const entry = this.refs.entry.value;
        const price = this.refs.price.value;
        const discount = this.refs.discount.value;
        const publico = this.refs.public.value;
        const especificPublic = this.refs.especificPublic.value;
        const gender = this.refs.gender.value;
        const banner = this.refs.banner.value;
        const image = this.refs.image.value;

        console.log(
            title,
            description,
            discipline,
            category,
            type,
            hierarchy,
            //evento,
            start,
            finish,
            //dates,
            municipality,
            place,
            organizer,
            speaker,
            url,
            entry,
            price,
            discount,
            publico,
            especificPublic,
            gender,
            banner,
            image
        );
        
    }

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
                                    <input className="input100" type="text" ref="title" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                
                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Descripcion es requerido">
                                    <span className="label-input100">Descripción</span>
                                    <textarea ref="description" className="input100" required></textarea>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Disciplina es requerido">
                                    <span className="label-input100">Disciplina</span>
                                    <select className="input100" style={{height:"45px"}} ref="discipline">
                                        {DISCIPLINES.map((discipline,index) => {
                                            return <option value={discipline.name} key={index}>{discipline.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Categoria es requerido">
                                    <span className="label-input100">Categoria</span>
                                    <select className="input100" style={{height:"45px"}} ref="category">
                                        {CATEGORIES.map((category,index) => {
                                            return <option value={category.name} key={index}>{category.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Tipo de Evento</span>
                                    <select className="input100" style={{height:"45px"}} ref="type" required>
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
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="radio" id="ckb1" onChange={() => {this._hideComponent(this.state.show)}} ref="hierarchy" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Evento" aria-label="Text input with checkbox" disabled/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="radio" id="ckb2" onChange={() => {this._showComponent(this.state.show)}} ref="hierarchy" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Sub-Evento" aria-label="Text input with checkbox"disabled/>
                                        </div>
                                    </div>
                                </div>

                                {this._loadComponent()}

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Fecha de Inicio es requerido">
                                    <span className="label-input100">Fecha de Inicio</span>
                                    <input className="input100" type="date" ref="start" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Fecha de Termino es requerido">
                                    <span className="label-input100">Fecha de Termino</span>
                                    <input className="input100" type="date" ref="finish" required/>
                                    <span className="focus-input100"></span>
                                </div>

                                {
                                    this.state.schedules.map((schedule,index) => 
                                        <Schedule data={schedule} key={index} onRemove={() => this._remove(index)}/>
                                    )
                                }

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={this._add.bind(this)} type="button">
                                        Agregar Horario
                                    </button>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Municipio es requerido">
                                    <span className="label-input100">Municipio</span>
                                    <select className="input100" style={{height:"45px"}} ref="municipality" required>
                                        {MUNICIPALITIES.map((municipality,index) => {
                                            return <option value={municipality.name} key={index}>{municipality.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Lugar es requerido">
                                    <span className="label-input100">Lugar</span>
                                    <select className="input100" style={{height:"45px"}} ref="place" required>
                                        {PLACES.map((place,index) => {
                                            return <option value={place.name} key={index}>{place.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Organiza</span>
                                    <select className="input100" style={{height:"45px"}} ref="organizer">
                                        <option value="Secretaria de Cultura">Secretaria de Cultura</option>
                                        <option value="Organismo Independiente">Organismo Independiente</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Ponente es requerido">
                                    <span className="label-input100">Imparte</span>
                                    <input className="input100" type="text" ref="speaker"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="URL es requerido">
                                    <span className="label-input100">URL del evento</span>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">www.</span>
                                        </div>
                                        <input type="url" ref="url" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Entrada es requerido">
                                    <span className="label-input100">Entrada</span>
                                    <select className="input100" style={{height:"45px"}} ref="entry">
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
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="number" ref="price" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>
                                </div>

                                <div className="flex-sb-m w-full p-b-30 validate-input" style={{paddingTop:"15px"}} data-validate="Descuentos es requerido">
                                    <span className="label-input100">Descuentos</span>
                                    <div className="contact100-form-checkbox">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="checkbox" id="ckb10" ref="discount" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="INAPAM" value="INAPAM" aria-label="Text input with checkbox" disabled/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="checkbox" id="ckb20" ref="discount" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Estudiantes" value="Estudiantes" aria-label="Text input with checkbox"disabled/>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Publico es requerido">
                                    <span className="label-input100">Público</span>
                                    <select className="input100" style={{height:"45px"}} ref="public">
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
                                    <select className="input100" style={{height:"45px"}} ref="especificPublic">
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
                                    <select className="input100" style={{height:"45px"}} ref="gender">
                                        <option value="General">General</option>
                                        <option value="Hombres">Hombres</option>
                                        <option value="Mujeres">Mujeres</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Banner es requerido">
                                    <span className="label-input100">Encabezado</span>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="hidden" name="MAX_FILE_SIZE" value="3000000"/>
                                            <input type="file" className="custom-file-input" ref="banner" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Selecciona un archivo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Imagen es requerido">
                                    <span className="label-input100">Imagen Destacada</span>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="hidden" name="MAX_FILE_SIZE" value="3000000"/>
                                            <input type="file" className="custom-file-input" ref="image" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Selecciona un archivo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input className="login100-form-btn" onClick={this._getData.bind(this)}>

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