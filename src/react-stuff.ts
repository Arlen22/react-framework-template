import { Attributes, CElement, ClassAttributes, ClassicComponent, ClassicComponentClass, ClassType, Component, ComponentClass, ComponentState, createElement as createElementReact, FunctionComponent, FunctionComponentElement, ReactElement, ReactNode } from "react";
import { TextProps, Text } from 'react-native-web';


/** Only allows functions and classes to be used as component types */
export function ce<P>(
  type: (props: P) => ReactElement,
  props: P,
  ...children: ReactNode[]
): ReactElement<P, typeof type>;
/** Only allows functions and classes to be used as component types */
export function ce<P, S = {}>(
  type: ComponentClass<P, S>,
  props: P,
  ...children: ReactNode[]
): ReactElement<P, typeof type>;
export function ce(type, props, ...children) {
  return createElementReact(type, props, ...children) as any;
}
/** 
 * Insert a text node with some presets to simplify things 
 */
export function ceText(
  // fontType: "default" | "monospace",
  /** Italics can be set in text style, but the weight often changes the font family */
  fontWeight: "bold" | "regular" | "light" | "monospace",
  props: TextProps,
  ...children: ReactNode[]
) {
  return createElementReact(Text, {...props}, ...children);
}