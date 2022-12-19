import { UserTypeEnum } from "./enums/userTypeEnum"
export function mockUserModel() {
    return {
        id: Math.ceil(Math.random() * 1000000),
        name: 'Jose Ferreira Lima',
        document: '748.773.830-26',
        userType: UserTypeEnum.admin,
        createdDate: new Date()
    }
}
