import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button
          onClick={() => {
            Taro.navigateTo({ url: "/pages/pullDown/index" });
          }}
        >
          跳转
        </Button>
      </View>
    );
  }
}
