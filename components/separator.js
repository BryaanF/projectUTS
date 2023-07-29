import React from "react";
import { NativeBaseProvider, Box } from "native-base";

class Separator extends React.Component {
  super(props) {
    this.super(props);
  }
  render() {
    return (
      <NativeBaseProvider>
        <Box height={this.props.height}></Box>
      </NativeBaseProvider>
    );
  }
}
export default Separator;
