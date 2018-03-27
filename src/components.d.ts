/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLAppAppsElement extends HTMLStencilElement {

  }
  var HTMLAppAppsElement: {
    prototype: HTMLAppAppsElement;
    new (): HTMLAppAppsElement;
  };
  interface HTMLElementTagNameMap {
    'app-apps': HTMLAppAppsElement;
  }
  interface ElementTagNameMap {
    'app-apps': HTMLAppAppsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-apps': JSXElements.AppAppsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAppsAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppComponentGridElement extends HTMLStencilElement {
    'filter': string;
  }
  var HTMLAppComponentGridElement: {
    prototype: HTMLAppComponentGridElement;
    new (): HTMLAppComponentGridElement;
  };
  interface HTMLElementTagNameMap {
    'app-component-grid': HTMLAppComponentGridElement;
  }
  interface ElementTagNameMap {
    'app-component-grid': HTMLAppComponentGridElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-component-grid': JSXElements.AppComponentGridAttributes;
    }
  }
  namespace JSXElements {
    export interface AppComponentGridAttributes extends HTMLAttributes {
      'filter'?: string;
    }
  }
}


declare global {
  interface HTMLAppHomeElement extends HTMLStencilElement {

  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppLearnElement extends HTMLStencilElement {

  }
  var HTMLAppLearnElement: {
    prototype: HTMLAppLearnElement;
    new (): HTMLAppLearnElement;
  };
  interface HTMLElementTagNameMap {
    'app-learn': HTMLAppLearnElement;
  }
  interface ElementTagNameMap {
    'app-learn': HTMLAppLearnElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-learn': JSXElements.AppLearnAttributes;
    }
  }
  namespace JSXElements {
    export interface AppLearnAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppPluginsElement extends HTMLStencilElement {

  }
  var HTMLAppPluginsElement: {
    prototype: HTMLAppPluginsElement;
    new (): HTMLAppPluginsElement;
  };
  interface HTMLElementTagNameMap {
    'app-plugins': HTMLAppPluginsElement;
  }
  interface ElementTagNameMap {
    'app-plugins': HTMLAppPluginsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-plugins': JSXElements.AppPluginsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPluginsAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppProfileElement extends HTMLStencilElement {
    'match': MatchResults;
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {
  interface HTMLAppUiElement extends HTMLStencilElement {

  }
  var HTMLAppUiElement: {
    prototype: HTMLAppUiElement;
    new (): HTMLAppUiElement;
  };
  interface HTMLElementTagNameMap {
    'app-ui': HTMLAppUiElement;
  }
  interface ElementTagNameMap {
    'app-ui': HTMLAppUiElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-ui': JSXElements.AppUiAttributes;
    }
  }
  namespace JSXElements {
    export interface AppUiAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLMyAppElement extends HTMLStencilElement {

  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
