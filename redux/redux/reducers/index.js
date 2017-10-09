const initialState = {
	selected : '',
	sauces : ['Franks', 'Tobasco', "Sriracha"],
	books : ['1984', 'Ulysses', 'Kindred'],
	order : {},
	paymentInfo : {
		ccn: '',
		type: ''
	}
}

export default (state = initialState, action) => {
	const newState = Object.assign({}, state);

	switch(action.type) {
		case 'SET_ITEM':
			newState.item = action.item;
			break

		case 'SEND_PAYMENT':
			newState.paymentInfo = action.paymentInfo;
			break

		default:
			return state
	}
	return newState
}