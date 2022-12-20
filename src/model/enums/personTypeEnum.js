export const PersonTypeEnum = Object.freeze({
	Natural: Symbol("Natural"),
	Legal: Symbol("Legal"),
})

export function personTypeEnumFromApi (userTypeApi) {
	return userTypeApi == 'Fisica' ? PersonTypeEnum.Natural : PersonTypeEnum.Legal
}