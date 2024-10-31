import config from "./config.json"

async function getContatos () {
    const app = document.getElementById("app")

    const response =  await fetch(`http://${config.HOST}:${config.PORT}/contatos`);
    const contatos = response.json();

    if(contatos.error) app.innerHTML = `
        <h1 style='color: red'>
            Erro ao obter a lista de contatos!
        </h1>
    `;

    app.innerHTML= `
        <div>
            ${contatos.map(c => `
                <div>
                    ${c.nome} (${c.email})
                </div>`
            )}
        </div>
    `
}

getContatos()