import { createStore } from 'redux';
import markdownPreview from "../reducers/index";

const store = createStore(markdownPreview);

export default store;