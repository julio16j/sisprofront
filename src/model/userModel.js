import { personTypeEnumFromApi } from "./enums/personTypeEnum"
import { UserTypeEnum, userTypeEnumFromApi, UserTypeFromJson } from "./enums/userTypeEnum"
export function mockUserModel() {
    return {
        id: Math.ceil(Math.random() * 1000000),
        name: 'Jose Ferreira Lima',
        document: '96097499094',
        userType: UserTypeEnum.client,
        createdDate: new Date()
    }
}

export function filterUserModelByText (user, filterText) {
    console.log(user)
    if (user.name.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } if (user.document.toUpperCase().includes(filterText.toUpperCase())) {
        return true
    } return false
}

export function userModelFromJson (userJson) {
    return {
        id: userJson.id,
        document: userJson.cpfCnpj,
        name: userJson.nome,
        email: userJson.email,
        phonenumber: userJson.telefone,
        userType: userTypeEnumFromApi(userJson.tipoUsuario),
        personType: personTypeEnumFromApi(userJson.tipoPessoa)
    }
}
