export class Store {
  constructor(rootReducer, initialState = {}) {
    this._state = rootReducer({...initialState}, {type: '__INIT__'})
    this._listeners = []

    this.initialState = initialState
    this.rootReducer = rootReducer
  }

  subscribe(fn) {
    this._listeners.push(fn)
    return {
      unsubscribe() {
        this._listeners = 
          this._listeners.filter(listener => listener !== fn)
      }
    }
  }
  
  dispatch(action) {
    this._state = this.rootReducer(this._state, action)
    this._listeners.forEach(listener => listener(this._state))
  }

  getState() {
    return JSON.parse(JSON.stringify(this._state))
  }
}