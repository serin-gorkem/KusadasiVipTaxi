import { useContext, createContext } from "react";
import PropTypes from "prop-types";

const I18nContext = createContext();

export const I18nProvider = ({ children, i18nData }) => {
  return (
    <I18nContext.Provider value={i18nData}> {children} </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  i18nData: PropTypes.func.isRequired,
};