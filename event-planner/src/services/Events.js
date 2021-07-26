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

export const postEvent = async (name, dateOfEvent, location, hostId, completed, category, inviteType, picture, requirements, materials) => {
	let rawResponse = fetch(`${process.env.REACT_APP_API_URL}/events/`, {
    method: 'POST',
    headers: {
        Accept: '*/*',
      },
    body: new URLSearchParams({
        'name': name,
        'dateOfEvent': dateOfEvent,
		'location': location,
		'hostId': hostId,
		'completed': completed,
		'category': category,
		'inviteType': inviteType,
		'picture': picture,
		'requirements': requirements,
		'materials':materials
        })
    });
    const content = await (await rawResponse).json();
    
    return content
}
