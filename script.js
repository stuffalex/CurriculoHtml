let stackItems = [
    {
        colunaId: 1,
        items: [
            {
                name: "C#",
                iconClass: "fa-solid fa-code",
                progress: "70%",
            },
            {
                name: ".NET",
                iconClass: "fa-brands fa-microsoft",
                progress: "70%",
            },
            {
                name: "Python",
                iconClass: "fa-brands fa-python",
                progress: "20%"
            }
        ],
    },
    {
        colunaId: 2,
        items: [
            {
                name: "Vue.js",
                iconClass: "fa-brands fa-vuejs",
                progress: "40%",
            },
            {
                name: "React",
                iconClass: "fa-brands fa-react",
                progress: "40%",
            },
            {
                name: "JavaScript",
                iconClass: "fa-brands fa-js",
                progress: "70%"
            },
        ],
    },
];


let stackColumns = document.getElementById("stack-columns");

let gerarStacks = () => {
    stackColumns.innerHTML = '';  // Limpa as colunas antes de adicionar novas

    stackItems.forEach(coluna => {
        // Criação da coluna
        let colunaDiv = document.createElement('div');
        colunaDiv.classList.add('coluna');

        // Preenchendo a coluna com stacks
        coluna.items.forEach(item => {
            let stackItemDiv = criarStackItem(item);
            colunaDiv.appendChild(stackItemDiv);
        });

        // Adiciona a coluna à área de colunas
        stackColumns.appendChild(colunaDiv);
    });
};

let criarIcone = (iconClass) => {
    let iconElement = document.createElement('i');
    iconElement.classList.add(...iconClass.split(' '));
    return iconElement;
};

let criarStackItem = (item) => {
    let stackItemDiv = document.createElement('div');
    stackItemDiv.classList.add('stack-item');

    let iconElement = criarIcone(item.iconClass);
    let textElement = document.createElement('p');
    textElement.textContent = item.name;

    let progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar');

    let progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');
    progressDiv.style.width = item.progress;

    progressBarDiv.appendChild(progressDiv);
    stackItemDiv.appendChild(iconElement);
    stackItemDiv.appendChild(textElement);
    stackItemDiv.appendChild(progressBarDiv);

    return stackItemDiv;
};

gerarStacks();