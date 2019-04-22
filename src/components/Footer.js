import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer id="footer" className="main-footer">
                <div className="container">
                    <div className="row row-gob">
                        <div className="col-sm-4 col-md-4">
                            <a href="http://www.hidalgo.gob.mx/">
                                <img className="logo_gobhidalgo" alt="logotipo hidalgo.gob.mx" className="gobmx-footer" src="http://cdn.hidalgo.gob.mx/logo_gobhidalgo.svg" width="226" height="39" style={{marginTop:"90px"}} />
                            </a>
                        </div>
                        <div className="imgfoot col-12 col-sm-4 col-md-4">
                            <img className="escudo_blanco" src="http://cdn.hidalgo.gob.mx/escudo_blanco.svg"/>
                            <p style={{textAlign:"center"}}>&copy; 2019 Gobierno del Estado de Hidalgo</p>
                        </div>
                        <div className="col-sm-4 col-md-4 redes">
                            <p style={{textAlign:"center",marginTop:"80px"}}>
                                <strong style={{fontSize:"20px"}}>Contacto</strong>
                                <br></br>Plaza Juárez s/n Col. Centro
                                <br></br>Pachuca de Soto, Hidalgo, México
                                <br></br>+52 (771) 71 76000
                            </p>
                            <div>
                                <center>
                                    <a style={{fontSize:"30px", padding:"10px"}} href="https://www.facebook.com/CulturaHidalgo/" target="_blank">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a style={{fontSize:"30px", padding:"10px"}} href="https://twitter.com/CulturaHidalgo" target="_blank">
                                        <i className="fab fa-twitter-square"></i>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;