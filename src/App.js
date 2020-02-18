import React, {Component} from 'react';
import './App.scss';
import bgHome from './img/bg-home.png';
import bgCenter from './img/img-home.png';
import ReactListDev from './components/react-listDev.js';
import ListMenu from './components/react-menu';
import ReactListProcess from './components/react-listProcess';
import bannerOne from './img/breathe-bg.png';
import bannerTwo from './img/breathe-bg-inverted.png';
import ReactOptionList from "./components/react-options";
import logoDevNinja from "./img/logo-devninjas-color.png";

class App extends Component {
    render() {
        return (
            <article>
                <div className="App">
                    <div className="container">
                        <div className="position-relative">
                            <ListMenu/>
                            <div className="bg-center">
                                <div className="block-text">
                                    <p>Sua Empresa focada no negócio.<br/>
                                        A <span>devninjas</span> focada no<br/>
                                        desenvolvilmento do aplicativo
                                    </p>
                                    <button>Conheça a devninjas</button>
                                </div>
                                <div className="block-img">
                                    <img className="bg-img" src={bgCenter} alt="background Center"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="bg-home" src={bgHome} alt="background home"/>
                </div>
                <div className="container">
                    <h2 className="title-info">
                        Aqui se faz, aqui se cria ;)
                    </h2>
                    < ReactListDev/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="process-development">
                            <div className="container">
                                <h2 className="title-development">Processo de Desenvolvimento</h2>
                                <ReactListProcess/>
                            </div>
                            <div className="bannerOne">
                                <img src={bannerOne} alt="banner um"/>
                                <div className="text-banner">
                                    <p>Não deixa para depois,<br/> deixa para os<br/>
                                        <span>devninjas</span></p></div>
                            </div>
                            <div className="container">
                                <ReactOptionList/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="title-form">Agora Chegou a hora de saber mais sobre seu projeto!</h2>
                    <form>
                        <div className="step1">
                            <h3>1. Qual o tipo do seu Projeto?</h3>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option1"/> IOS
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option2"/> Android
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option3"/> Smartwatch
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option4"/> Site
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option5"/> Criação/Integração WEB API
                            </label>
                        </div>
                        <div className="step2">
                            <h3>2. Qual o estágio do projeto?</h3>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option1"/> Ideia
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option2"/> Execução
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="option3"/> Manutenção
                            </label>
                        </div>
                        <div className="step3">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Nome"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="E-mail"/>
                            </div>
                            <div className="form-group">
                                <input type="phone" className="form-control" placeholder="Telefone"/>
                            </div>
                            <div className="form-group">
                                <input type="city" className="form-control" placeholder="Cidade"/>
                            </div>
                            <div className="form-group">
                                <input type="business" className="form-control" placeholder="Empresa"/>
                            </div>
                            <div className="form-group">
                                <input type="job" className="form-control" placeholder="Cargo"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="process-development-b">
                            <div className="bannerTwo">
                                <img src={bannerTwo} alt="banner um"/>
                                <div className="text-banner-b">
                                    <p><strong>Gostou da gente ?</strong><br/>Vamos bater um papo. O café é por nossa
                                        conta!<br/>
                                        <small>
                                            ou manda um email, whats, carta, pombo correio, sinal de
                                            fumaça...
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer">
                        <img className="img-footer" src={logoDevNinja} alt="logo devninja"/>
                        <p className="email">contato@devninjas.com.br</p>
                        <p className="phone">44 3123 - 8848</p>
                        <p className="address">av. monteiro lobato, 1214 - zona 08, Maringá - PR, 87040-280</p>
                        <p className="info">não diga "alê", diga "como vão, ninjas?"</p>
                    </div>
                </div>
            </article>

        );
    }
}

export default App;
