import { mockProcessModel, processModelFromJson } from "../model/processModel"
import { StatusTypeEnum } from "../model/enums/statusTypeEnum"
import { MovimentTypeEnum } from "../model/enums/movimentTypeEnum"
import { http } from "./httpClient"
export function getProcessList() {
    let mockList = [
        mockProcessModel(),
        {...mockProcessModel(), 
            status: StatusTypeEnum.scheduledAudience,
            moviment: MovimentTypeEnum.scheduledAudience,
            date: '15/12'
        },
        {... mockProcessModel(),
            status: StatusTypeEnum.upHeld,
            moviment: MovimentTypeEnum.upHeldPart
        }
    ]
    for(let i = 0; i<10; i++) {
        mockList.push({...mockProcessModel(), newUpdate: false})
    }
    return mockList
}

const processEndpoint = {
    baseUrl: 'processos',
    getProcess: () => processEndpoint.baseUrl,
    getProcessByUserDocument: (document) => `${processEndpoint.baseUrl}/porUsuario?cpfCnpj=${document}`
}

export async function getProcessByUserDocument (document) {
    let path = processEndpoint.getProcessByUserDocument(document)
    try {
        const response = await http.get(path, {auth: {username: 'admin', password: 'admin'}})
        if (response.data && response.data.length > 0) {
            return response.data.map(processModelFromJson)
        } else return []
    } catch (error) {
        console.log(error)
        throw 'Erro ao atualizar processos'
    }
}

export async function getAllProcess () {
    let path = processEndpoint.getProcess()
    try {
        const response = await http.get(path, {auth: {username: 'admin', password: 'admin'}})
        if (response.data && response.data.length > 0) {
            return response.data.map(processModelFromJson)
        } else return []
    } catch (error) {
        console.log(error)
        throw 'Erro ao atualizar processos'
    }
}
