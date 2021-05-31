/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react';
import { ComponentType } from 'react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }: { children: any }) => {
  return children;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
};

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers as ComponentType, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
