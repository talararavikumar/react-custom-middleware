import { Provider } from "react-redux";
import "./styles.css";
import store from "./store/store";
import PhotoWrapper from "./pages/PhotoContainer.js";

export default function App() {
  return (
    <Provider store={store}>
      <PhotoWrapper />
    </Provider>
  );
}
