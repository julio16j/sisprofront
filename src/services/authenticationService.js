import { userModelFromJson } from "../model/userModel"
import { http } from "./httpClient"

const loginEndpoint = {
    baseUrl: 'usuario',
    login: () => `${loginEndpoint.baseUrl}/login/`
}

export async function login (username, password) {
    try {
        const response = await http.post(loginEndpoint.login(), {}, {auth: {username, password}})
        return userModelFromJson(response.data)
    } catch (error) {
        throw 'Cpf/Cnpj ou senha inválidos'
    }
    return 
}