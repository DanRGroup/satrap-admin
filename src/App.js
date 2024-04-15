import React, { useEffect, useState } from "react";

import client from "apollo";
import locales from "locales";
import decode from "jwt-decode";
import MUIThemeProvider from "theme";

import { hasRequiredRole } from "helpers";
import { IntlProvider } from "react-intl";
import { DirectionProvider } from "providers";
import { signOut } from "toolkits/redux/auth";
import { StyledChart } from "components/Chart";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import { ScrollToTop, SplashScreen } from "components";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdminRoutes, AuthenticationRoutes } from "routes";

import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
// ----------------------------------------------------------------------

function AppRoutes({ roles }) {
  if (hasRequiredRole(["superadmin", "operator"], roles)) {
    return <SuperAdminRoutes />;
  }
  return <>Nothing</>;
}

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {
    language: { language, direction },
  } = useSelector((state) => state.setting);
  const { isAuthenticated, userToken, userInfo } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userToken === null || decode(userToken).exp < Date.now() / 1000) {
      dispatch(signOut());
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const getContent = () => {
    if (!loading) {
      if (isAuthenticated) {
        return <AppRoutes roles={userInfo?.roles} />;
      }
      return <AuthenticationRoutes />;
    }
    return <SplashScreen />;
  };

  return (
    <MUIThemeProvider>
      <DirectionProvider direction={direction}>
        <IntlProvider
          defaultLocale="fa"
          locale={language}
          messages={locales[language]}
        >
          <ToastContainer
            draggable
            closeButton={false}
            bodyStyle={{ direction }}
            position="top-center"
          />
          <ApolloProvider client={client}>
            <ScrollToTop />
            <StyledChart />
            {getContent()}
          </ApolloProvider>
        </IntlProvider>
      </DirectionProvider>
    </MUIThemeProvider>
  );
}
