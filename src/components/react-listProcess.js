import React from 'react';

const processList = [
    {
        id: 0,
        picture: require('./icons/idea.svg'),
        name: '1 - Ideia',
        description: 'Focados em alto desempenho e segurança'
    },
    {
        id: 1,
        picture: require('../icons/wireframe.svg'),
        name: '2 - wireframe',
        description: 'Com Interfaces Clean e intuítivas.'
    },
    {
        id: 2,
        picture: require('../icons/design.svg'),
        name: '3 - Design',
        description: 'Criamos a identidade visual e pensamentos na usabilidade e na experiência do usuário.'
    },

];
const ReactListProcess = () => (
    <div className="block-development" >
        {processList.map(item => (
            <div className="list-process" key={item.id}>
                <img className="picture-process" src={item.picture} alt="foto de processos"/>
                <h2>{item.name}</h2>
                <div className="bar"></div>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

export default  ReactListProcess;