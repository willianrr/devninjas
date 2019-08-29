import React from 'react';

const optionList = [
    {
        id: 0,
        picture: require('../icons/ti-companies.svg'),
        name: 'Empresas de T.I',
        description: 'Ajudamos empresas de TI a entregar projetos mobile e Web com excelência para seus clientes.'
    },
    {
        id: 1,
        picture: require('../icons/agencies.svg'),
        name: 'Para Agências',
        description: 'Ajudamos agências a criar aplicativos com um designer impecável.'
    },
    {
        id: 2,
        picture: require('../icons/startups.svg'),
        name: 'Startups',
        description: 'Para de gastar seu tempo com coisa que não vai pra frente, deixa o desenvolvimento do seu aplicativo ou aplicação web com os ninjas.'
    },

];

const ReactOptionList = () => (
    <div className="options" >
        {optionList.map(item => (
            <div className="list-options" key={(item.id)}>
                <img src={item.picture} alt="option list"/>
                <div className="option-name">{item.name}</div>
                <div className="option-description">{item.description}</div>
            </div>
        ))}
    </div>
);

export default  ReactOptionList;