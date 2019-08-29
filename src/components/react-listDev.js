import React from 'react';


const devInfo = [
    {
        id: 0,
        picture: require('../icons/dev-app.svg'),
        name: 'Desenvolvimento de Aplicativos',
        description: 'Focados em alto desempenho e segurança'
    },
    {
        id: 1,
        picture: require('../icons/web-system.svg'),
        name: 'Sistemas Web Sobdemanda',
        description: 'Com Interfaces Clean e intuítivas.'
    },
    {
        id: 2,
        picture: require('../icons/ui-ux-design.svg'),
        name: 'UI/UX Design',
        description: 'Criamos a identidade visual e pensamentos na usabilidade e na experiência do usuário.'
    },
    {
        id: 3,
        picture: require('../icons/acceleration-projects.svg'),
        name: 'Aceleração de Projetos',
        description: 'Acelere seu processo de inovação.'
    }

];
const ReactListDev = () => (
    <div className="block-create" >
        {devInfo.map(item => (
            <div className="dev-info" key={item.id}>
                <img className="dev-picture" src={item.picture} alt="icon 1"/>
                <div className="dev-title">{item.name}</div>
                <div className="dev-description">{item.description}</div>
            </div>
        ))}
    </div>
);

export default  ReactListDev;