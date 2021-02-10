import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store";

export interface ProvidersProps {
  Router?: React.ComponentType;
  routerProps?: any;
}

export const Providers: React.FC<ProvidersProps> = ({
  children,
  Router = BrowserRouter,
  routerProps = {},
}) => (
  <ReduxProvider store={store}>
    <Router {...routerProps}>{children}</Router>
  </ReduxProvider>
);
