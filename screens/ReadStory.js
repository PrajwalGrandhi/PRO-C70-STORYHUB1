import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Readstory extends React.Component {
    constructor(){
        super();
        this.state={
            
        }
    }

    render(){
        return (
            <View>
                <Text style={styles.textstyle}>Read Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  textstyle:{
    alignSelf:'center',
    fontSize:100,

  },
  });