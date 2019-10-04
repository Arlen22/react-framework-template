import { createElement as createElementReact, Fragment } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, TextComponent, View } from 'react-native-web';

import { ce } from "./react-stuff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
document.body.style.height = "100%";
const container = document.createElement("div");
container.id = "react-container";
container.style.display = "flex";
container.style.position = "absolute";
container.style.height = "100%";
container.style.width = "100%";
container.style.flexDirection = "column";
document.body.appendChild(container);
render(createElementReact(TestComponent), container);
function TestComponent() {
  // return [
  //   createElementReact("p", {}, "Hello World")
  // ];
  return ce(Fragment, {},
    ce(View, { style: styles.container }, ce(Text, {}, "Hello World")),
    ce(View, { style: styles.container }, ce(Text, {}, "Let there be light"))
  );
}

function* test(){
  
}
