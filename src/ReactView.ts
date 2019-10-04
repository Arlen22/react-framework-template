import { Component, createElement as ce } from "react";
// import { RegisteredStyle } from "react-native";
// import { View, ViewProps, ViewStyle, FlexStyle, StyleProp } from "react-native";

// import { View } from "./react-native-web";

// namespace StyleSheet {

export interface RegisteredStyle<T> {
  /** 
   * The type is the generic type of this interface.
   * The value is the global registered style symbol.
   */
  __registered_style_type_symbol__: T;

  __className: string;
  // name: string;
}
export namespace StyleSheet {
  const registeredStyles: RegisteredStyle<any>[] = [];
  const registeredStylesDefs: string[] = [];
  function generateNextClassName() {
    return "ReactViewStyleClass-" + registeredStyles.length.toString();
  }

  export const __registered_style_type_symbol__: any = Symbol("ReactViewRegisteredStyle");

  export function create(styles: { [K: string]: ReactViewStyle }) {
    let res: { [K in keyof typeof styles]: RegisteredStyle<typeof styles[K]> } = {};
    Object.keys(styles).forEach(key => {
      let __className = generateNextClassName();
      let index = registeredStyles.length;
      let registration = { __registered_style_type_symbol__, __className, index };
      registeredStyles.push(registration);
      registeredStylesDefs.push(generateStyleDefinition(registration, styles[key]));
      res[key] = registration;
    });
    return res;
  }

  function generateStyleDefinition(registration: RegisteredStyle<any>, style: ReactViewStyle) {
    return "";
  }

  function translateStyleProperties(style: ReactViewStyle) {
    const translated: FlexStyle = {

    }
  }
}

export type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

/**
 * Flex Prop Types
 * @see https://facebook.github.io/react-native/docs/flexbox.html#proptypes
 * @see https://facebook.github.io/react-native/docs/layout-props.html
 * @see https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/LayoutPropTypes.js
 */
export interface FlexStyle {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignItems?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number | string;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number | string;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  display?: 'none' | 'flex';
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  height?: number | string;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: 'visible' | 'hidden' | 'scroll';
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: 'absolute' | 'relative';
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;

  /**
   * @platform ios
   */
  direction?: 'inherit' | 'ltr' | 'rtl';
}
export interface DisplayStyle {
  backgroundColor?: string;
  borderBottomColor?: string;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomWidth?: number;
  borderColor?: string;
  borderEndColor?: string;
  borderLeftColor?: string;
  borderLeftWidth?: number;
  borderRadius?: number;
  borderRightColor?: string;
  borderRightWidth?: number;
  borderStartColor?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: string;
  borderTopEndRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopStartRadius?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  opacity?: number;
}
interface ReactViewStyle extends DisplayStyle, FlexStyle {

}
type StyleProp<T extends {}> = T | RegisteredStyle<T>;
interface ReactViewProps {
  style: StyleProp<ReactViewStyle>;
}

class ReactView extends Component<ReactViewProps>{

  constructor(props: ReactViewProps) {
    super(props);
    this.props.style
  }



  render() {
    return ce("div", {
      "class": ""
    })
  }

}