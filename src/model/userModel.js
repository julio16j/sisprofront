import { UserTypeEnum } from "./enums/userTypeEnum"
export function mockUserModel() {
    return { 
        name: 'Jose Ferreira Lima',
        document: '748.773.830-26',
        userType: UserTypeEnum.admin
    }
}
