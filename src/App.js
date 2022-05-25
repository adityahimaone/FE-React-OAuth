import "./App.css";
import RoutesPage from "./routes/Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./stores/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
          <RoutesPage />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
