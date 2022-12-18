import { mockProcessModel } from "../model/processModel"
import { StatusTypeEnum } from "../model/enums/statusTypeEnum"
import { MovimentTypeEnum } from "../model/enums/movimentTypeEnum"
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