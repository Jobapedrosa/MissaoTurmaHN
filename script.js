const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "O que fazer quando  identificar que uma criança está sofrendo bullying?",
        alternativas: [ 
            {
                texto:  "Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.",
                afirmacao: "afirmação 1"
            },
            {
                texto:   "Intervir e defender a vítima, conversar com o agressor.",
                afirmacao: "afirmação 2"
            }    
           
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto:  "Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
                afirmacao: "afirmação 1"
            },
            {
                texto:  "O esporte é uma atividade competitiva que tem regras fixas e treinamentos e pratico regularmente.",
                afirmacao: "afirmação 2"
            }   
            
        ]
    },
    {
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida a partir da luz do sol. Diante disso eu:",
        alternativas: [
            {
                texto:  "Investiria em energia solar",  
                afirmacao: "afirmação 1"
            },
            {
                texto:    "Iria dar continuade ao uso da energia hidrelétrica",
                afirmacao: "afirmação 2"
            }             
           
        ]
    }  
];


         
 
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativas);

    }

}

mostraPergunta();