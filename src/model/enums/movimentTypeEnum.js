export const MovimentTypeEnum = Object.freeze({
    onGoing: {
        symbol: Symbol("Em andamento"),
        message: "Em andamento",
        helpTexts: {
            title: 'Em andamento',
            first: 'O processo está em andamento, logo terá mais atualizações fique de olho'
        }
    },
	underJudgeReview:{
        symbol: Symbol("Conclusos para despacho"),
        message: "Na mesa do Juiz",
        helpTexts: {
            title: 'Processo na mesa do juiz ?',
            first: 'Um processo que se encontra na mesa do juiz, ou concluso para despacho,'
                + 'está lá para ser analisado, posteriormente, o juiz dará a sua decisão sobre '
                + 'qual será o próximo encaminhamento do caso.',
            second: 'No entanto, um processo concluso para despacho não deve ser confundido com o fim dele. '
                + 'No primeiro, significa apenas que estes estão prontos para serem analisados pelo juiz. '
                + 'Já o segundo diz respeito ao processo que já foi verificado e a sentença ou despacho '
                + 'já decididos.'
        }
    },
	scheduledAudience:{
        symbol:  Symbol("Audiência marcada"),
        message: "Audiência marcada para",
        helpTexts: {
            title: 'Audiência marcada ?',
            first: 'Uma audiência é uma reunião entre as partes do processo e um juiz mediador, '
                + 'tem data hora e local definidos, certifique-se de poder comparacer a data agendada, '
                + 'pode ficar tranquilo que as demais informações a respeito dela serão logo repassadas '
                +'pelo escritório.',
        }
    },
    upHeldPart:{
        symbol:  Symbol("Julgado procedente em parte"),
        message: "Julgado procedente em parte",
        helpTexts: {
            title: 'Julgado procedente em parte ?',
            first: 'Significa que um juiz ou uma juíza aceitou apenas uma parte do pedido feito pelo autor '
                + 'do processo. Ou seja, você que entrou com o processo ganhou a causa, '
                + 'mas não ganhou exatamente tudo o que foi pedido.',
            second: 'Muitas vezes isso ocorre pelo fato do juiz não concordar com alguns itens do pedido, '
                + 'ou por querer reduzir algum valor, vale salientar também que essa movimentação '
                + 'não é a última de um processo e que provavelmente o alvará ou cumprimento da sentença '
                + 'pode não ter sido expidido ainda, por favor espere por mais algumas movimentações, '
                + 'em caso de dúvidas nos contate.'
        }
    }
})