
const remoteURL = "http://localhost:5002"

// This module contains the "locations" API calls. Other components, in the future, may need the ability to make their own API calls. So we eliminate the possibility of duplicate code by making a module whose sole responsibility is to interact with the API.

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
    }).then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(newLocation)
    }).then(data => data.json())
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  }
}