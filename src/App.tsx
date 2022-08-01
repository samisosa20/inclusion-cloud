// Packages
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

// Config
import useConfig from "./config";

// Routes
import useRoutes from "./routes";

// Components
import useComponents from "./views/components";
import useViews from "@/views";

const App = () => {
  // Config
  const { useStoreConfig, useInterceptor } = useConfig();
  const { store, persistor } = useStoreConfig();
  useInterceptor(store);

  // Routers
  const { Routing } = useRoutes();

  const { useSpinners } = useComponents();
  const { SpinnerLoading } = useSpinners();

  const { useScreens } = useViews();
  const { Home } = useScreens();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          limit={10}
          pauseOnHover
          theme="colored"
        />
        <Suspense
          fallback={
            <SpinnerLoading color={"white"} width={"55px"} height={"55px"} />
          }
        >
          <Routing />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
