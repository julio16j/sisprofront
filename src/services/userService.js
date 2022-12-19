import { mockUserModel } from "../model/userModel"
export function getUserList() {
    let mockList = []
    for(let i = 0; i<10; i++) {
        mockList.push(mockUserModel())
    }
    return mockList
}