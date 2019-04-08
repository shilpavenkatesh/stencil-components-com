/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppComponent {
    'tag': string;
  }
  interface AppComponentAttributes extends StencilHTMLAttributes {
    'tag'?: string;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppComponent': Components.AppComponent;
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-component': Components.AppComponentAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppComponentElement extends Components.AppComponent, HTMLStencilElement {}
  var HTMLAppComponentElement: {
    prototype: HTMLAppComponentElement;
    new (): HTMLAppComponentElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-component': HTMLAppComponentElement
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-component': HTMLAppComponentElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
