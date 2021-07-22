export const getEvents = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/events/`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result.events
}

export const getEventById = async (eventId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/events/${eventId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const editEvent = async (event) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/events/${event._id}`,
	{
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(event)
	})
    let result = await response.json()
    return result
}
