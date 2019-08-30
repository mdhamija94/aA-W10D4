import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

// const store = createStore(() => ({}))

const configStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState);
}

export default configStore;