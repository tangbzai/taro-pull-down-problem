import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    console.log('下拉刷新')
  }
  
  render () {
    return (
      <View className='index'>
        <Text>下拉刷新!</Text>
      </View>
    )
  }
}
