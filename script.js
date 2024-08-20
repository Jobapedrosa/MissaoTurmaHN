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
                texto:"Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.",
                afirmacao: "Você é uma pessoa que se preocupa com o aluno, mas também se preocupa em reportar aos superiores para formalizar o ocorrido."
            },
            {
                texto: "Intervir e defender a vítima, conversar com o agressor.",
                afirmacao: "Você é uma pessoa que se coloca no lugar da vítima, com muita empatia e reconhece que todos merecem respeito e dignidade."
            }
             
            
        ]
    },
    
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto:  "Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
                afirmacao: "Você não gosta  de esporte para o condicionamento físico, pois prefere  interação entre pessoas."
            },
            {
                texto:  "O esporte é uma atividade competitiva que tem regras fixas e treinamentos e pratico regularmente.",
                afirmacao: "O esporte não é uma atividade corporal competitiva.  "
            }   
            
        ]
    },
    {
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida a partir da luz do sol. Diante disso eu:",
        alternativas: [
            {
                texto:  "Investiria em energia solar",  
                afirmacao: "Você é uma pessoa preocupada com o meio ambiente e pensa na economia ao longo prazo, bem como energia limpa e renovável. "
            },
            {
                texto:    "Iria dar continuade ao uso da energia hidrelétrica",
                afirmacao: "Você é resistente a mudanças e prefere a praticidade da energia que conhece."
            }             
           
        ]
    }  
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();