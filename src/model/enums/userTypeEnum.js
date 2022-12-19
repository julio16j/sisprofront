export const UserTypeEnum = Object.freeze({
	client: Symbol("Client"),
	admin: Symbol("Admin"),
})

export function UserTypeToJson (userType) {
	return userType == UserTypeEnum.client ? 'client' : 'admin'
}

export function UserTypeFromJson (userTypeJson) {
	return userTypeJson == 'client' ? UserTypeEnum.client : UserTypeEnum.admin
}
