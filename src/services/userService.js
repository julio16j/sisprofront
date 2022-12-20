import { mockUserModel } from "../model/userModel"
import { http } from "./httpClient"
export function getUserList() {
    let mockList = []
    for(let i = 0; i<10; i++) {
        mockList.push(mockUserModel())
    }
    return mockList
}
