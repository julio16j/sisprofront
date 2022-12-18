export const StatusTypeEnum = Object.freeze({
	onGoing: {
		symbol: Symbol("Em Andamento"),
		order: 0
	},
	scheduledAudience: {
		symbol: Symbol("Audiência Marcada"),
		order: 1
	},
    upHeld: {
		symbol: Symbol("Julgado Procedente"),
		order: 2
	}
})

export function compareStatus (a, b) {
	return b.order - a.order
}