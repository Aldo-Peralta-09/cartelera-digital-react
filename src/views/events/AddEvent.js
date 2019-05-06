import React, {Component} from 'react';
import {DISCIPLINES,CATEGORIES, MUNICIPALITIES, PLACES} from '../../data/data';
import Schedule from '../../components/Input';
import MainEvent from '../../components/MainEvent';
import {NEW_EVENT_ACTION} from '../../redux/actions/events/ActionType';
import { connect } from 'react-redux';
import Alert from '../../components/Alert';
import AlertSuccess from '../../components/AlertSucces';

class AddEvent extends Component{

    state = {
        schedules : [{
            title: "Horario " ,
            name: "hour"
        }],
        lenght: 1,
        show: false,
        hours: [""],
        errors: [],
        success: [],
        image: null,
        banner: null
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;

        if(NewProps.responseNewEvent.status === "Error"){
            let newErrors = [];
            NewProps.responseNewEvent.errors.map((item) => {
                newErrors.push(item);
            })
            this.setState({
                errors: newErrors
            })
        }

        if(NewProps.responseNewEvent.status === "OK"){
            this.refs.title.value = "";
            this.refs.description.value = "";
            this.refs.start.value = "";
            this.refs.finish.value = "";
            this.refs.speaker.value = "";
            this.refs.url.value = "";
            this.refs.price.value = "";
            this.refs.discount1.value = "off";
            this.refs.discount2.value = "off";
            this.refs.banner.value = "";
            this.refs.image.value = "";
            let newSuccess = [];
            NewProps.responseNewEvent.ok.map((item) => {
                newSuccess.push(item);
            })
            this.setState({
                success:newSuccess
            })
        }
    }

    _addHour(index, { target: { value:data } }){
        console.log("RESC", data);
        let hourss =[...this.state.hours];
        hourss[index] = data;
        this.setState({
            hours:hourss
        },() =>{
            console.log(this.state.hours);
        })

        
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
        let { schedules,lenght,hours } = this.state;
        lenght++;
        let newSchedules = [
            ...schedules,
            {
                title: "Horario " + lenght,
                name: "hour" + lenght
            }
        ]

        this.setState({
            schedules:newSchedules,
            lenght: lenght,
            hours: [...hours,...[""]]
        });
    }

    _getData(){
        let data = new FormData();
        data.append('title',this.refs.title.value);
        data.append('description',this.refs.description.value);
        const discipline = this.refs.discipline.value;
        let disciplineAll = [];
        DISCIPLINES.map((ds) => {
            if(ds.name === discipline){
                disciplineAll.push(ds.name);
                disciplineAll.push(ds.color);
            }
        })
        console.log(disciplineAll);
        data.append('discipline',disciplineAll);
        data.append('category',this.refs.category.value);
        data.append('type',this.refs.type.value);
        data.append('hierarchy',null);
        data.append('event',null);
        data.append('start',this.refs.start.value);
        data.append('finish',this.refs.finish.value);
        data.append('dates',this.state.hours);
        data.append('municipality',this.refs.municipality.value);
        const place = this.refs.place.value;
        let placeAll = [];
        PLACES.map((pl) => {
            if(pl.name === place){
                placeAll.push(pl.name);
                let address = pl.address.street + ' ' +
                    pl.address.numExt + ', ' + 
                    pl.address.colony  + ', ' + 
                    pl.address.cp  + ', ' + 
                    pl.address.municipality;
                placeAll.push(address);
            }
        })
        console.log(placeAll);
        data.append('place',placeAll);
        data.append('organizer',this.refs.organizer.value);
        data.append('speaker',this.refs.speaker.value);
        data.append('url',this.refs.url.value);
        data.append('entry',this.refs.entry.value);
        data.append('price',this.refs.price.value);
        const dis1 = this.refs.discount1.value;
        const dis2 = this.refs.discount2.value;
        let discount = [];
        if(dis1 === "on"){
            discount.push("INAPAM");
        }
        if(dis2 === "on"){
            discount.push("Estudiantes")
        } else {
            discount.push(null);
        }
        data.append('discount',discount);
        data.append('publico',this.refs.public.value);
        data.append('especificPublic',this.refs.especificPublic.value);
        data.append('gender',this.refs.gender.value);
        data.append('banner',this.state.banner);
        data.append('image',this.state.image);
        
        this.props.sendEvent(data);
    }

    onChangeHandlerBanner = event => {
        console.log(event.target.files[0]);
        this.setState({
            banner: event.target.files[0]
        })
    }

    onChangeHandlerImage = event => {
        console.log(event.target.files[0]);
        this.setState({
            image: event.target.files[0]
        })
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

                            {this.state.errors.map((item,index) => {
                                return <Alert item={item} key={index}/>
                            })}

                            {this.state.success.map((item,index) => {
                                return <AlertSuccess item={item} key={index}/>
                            })}

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
                                            return <option defaultValue={discipline.name} key={index}>{discipline.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Categoria es requerido">
                                    <span className="label-input100">Categoria</span>
                                    <select className="input100" style={{height:"45px"}} ref="category">
                                        {CATEGORIES.map((category,index) => {
                                            return <option defaultValue={category.name} key={index}>{category.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Tipo de Evento</span>
                                    <select className="input100" style={{height:"45px"}} ref="type" required>
                                        <option defaultValue="Eventos">Eventos</option>
                                        <option defaultValue="Exposiciones Temporales">Exposiciones Temporales</option>
                                        <option defaultValue="Actividades Permanentes">Actividades Permanentes</option>
                                        <option defaultValue="Convocatoria">Convocatoria</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-sb-m w-full p-b-30 validate-input" style={{paddingTop:"15px"}} data-validate="Jerarquia es requerido">
                                    <span className="label-input100">Jerarquia</span>
                                    <div className="contact100-form-checkbox">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="radio" id="ckb"onChange={() => {this._hideComponent(this.state.show)}} ref="hierarchy" defaultValue="Evento" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Evento" aria-label="Text input with checkbox" disabled/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="radio" id="ckb" onChange={() => {this._showComponent(this.state.show)}} ref="hierarchy" defaultValue="Sub-Evento" aria-label="Checkbox for following text input"/>
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
                                        <Schedule 
                                            data={schedule} 
                                            key={index} 
                                            index={index} 
                                            addHour={this._addHour.bind(this)} 
                                            onRemove={() => this._remove(index)}
                                        />
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
                                            return <option defaultValue={municipality.name} key={index}>{municipality.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Lugar es requerido">
                                    <span className="label-input100">Lugar</span>
                                    <select className="input100" style={{height:"45px"}} ref="place" required>
                                        {PLACES.map((place,index) => {
                                            return <option defaultValue={place.name} key={index}>{place.name}</option>;
                                        })}
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Tipo de Evento es requerido">
                                    <span className="label-input100">Organiza</span>
                                    <select className="input100" style={{height:"45px"}} ref="organizer">
                                        <option defaultValue="Secretaria de Cultura">Secretaria de Cultura</option>
                                        <option defaultValue="Organismo Independiente">Organismo Independiente</option>
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
                                        <option defaultValue="Gratuito">Gratuito</option>
                                        <option defaultValue="Boleto de Cortesia">Boleto de Cortesia</option>
                                        <option defaultValue="Cuota de Recuperacion">Cuota de Recuperación</option>
                                        <option defaultValue="Inscripcion">Inscripción</option>
                                        <option defaultValue="Bono">Bono</option>
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
                                                    <input type="checkbox" id="ckb10" ref="discount1" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="INAPAM" defaultValue="INAPAM" aria-label="Text input with checkbox" disabled/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="checkbox" id="ckb20" ref="discount2" aria-label="Checkbox for following text input"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Estudiantes" defaultValue="Estudiantes" aria-label="Text input with checkbox"disabled/>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Publico es requerido">
                                    <span className="label-input100">Público</span>
                                    <select className="input100" style={{height:"45px"}} ref="public">
                                        <option defaultValue="General">General</option>
                                        <option defaultValue="Niños">Niños</option>
                                        <option defaultValue="Adolescentes">Adolescentes</option>
                                        <option defaultValue="Jovenes">Jóvenes</option>
                                        <option defaultValue="Adultos">Adultos</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Publico es requerido">
                                    <span className="label-input100">Público Especifico</span>
                                    <select className="input100" style={{height:"45px"}} ref="especificPublic">
                                        <option defaultValue="General">General</option>
                                        <option defaultValue="Estudiantes Primaria">Estudiantes Primaria</option>
                                        <option defaultValue="Estudiantes Secundaria">Estudiantes Secundaria</option>
                                        <option defaultValue="Estudiantes Bachillerato">Estudiantes Bachillerato</option>
                                        <option defaultValue="Discapacidad Visual">Discapacidad Visual</option>
                                        <option defaultValue="Discapacidad Auditiva">Discapacidad Auditiva</option>
                                        <option defaultValue="Discapacidad Motriz">Discapacidad Motriz</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Genero es requerido">
                                    <span className="label-input100">Genero</span>
                                    <select className="input100" style={{height:"45px"}} ref="gender">
                                        <option defaultValue="General">General</option>
                                        <option defaultValue="Hombres">Hombres</option>
                                        <option defaultValue="Mujeres">Mujeres</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Banner es requerido">
                                    <span className="label-input100">Encabezado</span>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>
                                            <input type="file" className="custom-file-input" onChange={this.onChangeHandlerBanner} ref="banner" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Selecciona un archivo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px",paddingBottom:"15px"}} data-validate="Imagen es requerido">
                                    <span className="label-input100">Imagen Destacada</span>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>
                                            <input type="file" className="custom-file-input" onChange={this.onChangeHandlerImage} ref="image" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Selecciona un archivo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input className="login100-form-btn" onClick={this._getData.bind(this)} type="button" defaultValue="Guardar">
                                        
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

const mapStateToProps = ({responseNewEvent}) => {
    return {
        responseNewEvent: responseNewEvent
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEvent: (datos) => dispatch(NEW_EVENT_ACTION(datos))
    };
};

const ConnectAddEvent = connect(mapStateToProps,mapDispatchToProps)(AddEvent);

export default ConnectAddEvent;