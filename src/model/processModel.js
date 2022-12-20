import { MovimentTypeEnum, movimentTypeFromJson } from "./enums/movimentTypeEnum"
import { PersonTypeEnum } from "./enums/personTypeEnum"
import { StatusTypeEnum, StatusTypeFromJson } from "./enums/statusTypeEnum"
export function mockProcessModel () {
    return {
        id: Math.ceil(Math.random() * 1000000),
        number: '08008335720228150151',
        newUpdate: true,
        client: {
            name: 'Jose Ferreira Lima',
        },
        other: {
            name: 'Bradesco',
            personType:  PersonTypeEnum.Legal
        },
        lastUpdateDate: new Date(2022, 11, 17),
        status: StatusTypeEnum.onGoing,
        moviment: MovimentTypeEnum.underJudgeReview
    }
}

export function filterProcessModelByText (process, filterText) {
    if (process.client.name.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } if (process.other.name.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } if (process.number.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } if (process.moviment.message.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } return false
}

export function processModelFromJson (process) {
    return {
        id: process.id,
        number: process.numeroProcesso,
        lastUpdateDate: new Date(process.dataAtualizacao),
        client: {
            name: process.poloAtivo.nomeParte.charAt(0).toUpperCase()
                + process.poloAtivo.nomeParte.slice(1).toLowerCase()
        },
        other: {
            name: process.poloPassivo.nomeParte.charAt(0).toUpperCase()
            + process.poloPassivo.nomeParte.slice(1).toLowerCase(),
            personType: PersonTypeEnum.Legal
        },
        status: StatusTypeFromJson(process.status),
        moviment: movimentTypeFromJson(process.ultimaMovimentacao)
    }
}
