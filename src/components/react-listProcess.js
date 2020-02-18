import React from 'react';

const processList = [
    {
        id: 0,
        picture: require('../icons/idea.svg'),
        name: '1 - Ideia',
        description: 'Até mesmo as ideias mais inovadoras e disruptivas precisam de um planejamento certeiro e uma estratégia vencedora! Juntos, vamos mergulhar na sua indústria, fazer brainstormings e mapear as principais caracteristicas para desenvolver um app ou sistema único!'
    },
    {
        id: 1,
        picture: require('../icons/wireframe.svg'),
        name: '2 - wireframe',
        description: 'Não tem nada mais importante do que estruturar da forma correta um projeto. No primeiro estágio de desenvolvimento nós criamos wireframes detalhados e destacamos cada função da aplicação.'
    },
    {
        id: 2,
        picture: require('../icons/design.svg'),
        name: '3 - Design',
        description: 'Um design único e elegante é fundamental para o sucesso de um app ou sistema web! Nossos designers sabem isso melhor do que ninguém. É por isso que em cada aplicativo IOS e Android que criamos nós tomamos cuidado para seguir as melhores e mais novas tendências dos apps de sucesso.'
    },

];
const colors = ['#fcc23f', '#4899ff', '#fa8b40'];

const ReactListProcess = () => (
    <div className="block-development" >
        {processList.map((item, cor) => (
            <div className="list-process" key={(item.id)}>
                <img className="picture-process" src={item.picture} alt="foto de processos"/>
                <h2 style={{color: colors[cor]}}>{item.name}</h2>
                <div className="bar" style={{color: colors[cor]}}></div>
                <div className="description-process">{item.description}</div>
            </div>
        ))}
    </div>
);

export default  ReactListProcess;