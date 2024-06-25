const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que fazer quando  identificar que uma criança está sofrendo bullying?",
        alternativas: [
            "Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.", 
            "Intervir e defender a vítima, conversar com o agressor."
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            "Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
 
            "O esporte é uma atividade competitiva que tem regras fixas e treinamentos e pratico regularmente."
        ]
    },
    {
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida a partir da luz do sol. Diante disso eu:",
        alternativas: [
            "Investiria em energia solar", 
            "Iria dar continuade ao uso da energia hidrelétrica"
        ]
    }  
];