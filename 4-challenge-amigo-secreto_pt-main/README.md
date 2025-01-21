<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            color: #333;
            background-color: #f9f9f9;
        }

        h1,
        h2,
        h3 {
            color: #007acc;
        }

        ul {
            list-style: disc;
            margin-left: 20px;
        }

        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }

        code {
            font-family: Consolas, Monaco, "Courier New", monospace;
            background: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
            color: #d6336c;
        }

        .section {
            margin-bottom: 20px;
        }

        .problems {
            background-color: #fff3cd;
            border-left: 6px solid #ffecb5;
            padding: 10px;
            margin: 20px 0;
        }

        .solutions {
            background-color: #d4edda;
            border-left: 6px solid #c3e6cb;
            padding: 10px;
        }
    </style>
</head>

<body>
    <h1>Projeto de Sorteio de Amigo Secreto</h1>
    <p>// O principal objetivo deste desafio é fortalecer as habilidades em lógica de programação.</p>

    <div class="section">
        <h2>📥 Instalação</h2>
        <ol>
            <li>Certifique-se de ter o <code>Node.js</code> instalado no seu computador.</li>
            <li>Clone este repositório usando:
                <pre><code>git clone https://github.com/rcmartone/desafios_ONE_alura_JS/5-challenge-amigo-secreto_pt-main.git</code></pre>
            </li>
            <li>Navegue até a pasta do projeto:
                <pre><code>cd 5-challenge-amigo-secreto_pt-main</code></pre>
            </li>
            <li>Instale as dependências:
                <pre><code>npm install</code></pre>
            </li>
        </ol>
    </div>

    <div class="section">
        <h2>📦 Dependências</h2>
        <ul>
            <li><code>Node.js</code> - Necessário para executar o servidor local.</li>
            <li><code>HTML</code> e <code>CSS</code> - Estrutura e estilo do projeto.</li>
            <li><code>JavaScript</code> - Lógica principal para sorteio de amigos.</li>
        </ul>
    </div>

    <div class="section">
        <h2>🚀 Como Executar</h2>
        <ol>
            <li>Abra o arquivo <code>index.html</code> em seu navegador.</li>
            <li>Adicione nomes à lista de amigos.</li>
            <li>Clique no botão para realizar o sorteio do amigo secreto.</li>
        </ol>
    </div>

    <div class="section">
        <h2>🛠 Possíveis Problemas e Soluções</h2>
        <div class="problems">
            <strong>Problema:</strong> Lista de amigos está vazia.<br>
            <strong>Solução:</strong> Adicione pelo menos dois nomes antes de realizar o sorteio.
        </div>
        <div class="problems">
            <strong>Problema:</strong> Nomes duplicados não são permitidos.<br>
            <strong>Solução:</strong> Insira um nome único para cada amigo.
        </div>
        <div class="solutions">
            <strong>Dica:</strong> Certifique-se de limpar o campo de entrada após adicionar um nome para evitar
            confusões.
        </div>
    </div>
</body>

</html>