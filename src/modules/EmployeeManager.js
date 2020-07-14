
const remoteURL = "http://localhost:5002"

// This module contains the "employees" API calls. Other components, in the future, may need the ability to make their own API calls. So we eliminate the possibility of duplicate code by making a module whose sole responsibility is to interact with the API.

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
    }
}