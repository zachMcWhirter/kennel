
const remoteURL = "http://localhost:5002"

// This is a JS module that contains the animal API calls. Other components, in the future, may need the ability to make their own API calls. So we eliminate the possibility of duplicate code by making a module whose sole responsibility is to interact with the API.

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}