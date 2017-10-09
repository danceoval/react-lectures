export const setItem = item => {
	return {
		type: 'SET_ITEM',
		item
	}
}

export const sendPayment = paymentInfo => {
	return {
		type: 'SEND_PAYMENT',
		paymentInfo
	}
}

export const updateOrder = order => {
	return {
		type: 'UPDATE_ORDER',
		order
	}
}