import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "../reducers/rootreducer";
export default configureStore({
  reducer: rootreducer,
});
