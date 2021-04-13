import * as React from 'react';
import {View,StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native';

export default class Writestory extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:'',

        };
    }

    render(){
        return (
            <View>
    <TextInput
        style={styles.input}
        //value={this.state.title}
        placeholder="Story Title"
      />
      <TextInput
        style={styles.input}
        //value={this.state.author}
        placeholder="Author"
      />
        <TextInput
        style={styles.input}
        //value={this.state.story}
        multiline={true}
        placeholder="Write Your Story Here..."
      />
        <TouchableOpacity style={styles.button}onPress={()=>{}}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head:{
        textAlign: 'center', 
        fontSize: 50, 
        backgroundColor: '#FFC0CB', 
        padding: 20,
      },
      input: {
        alignSelf:'center',
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        paddingLeft:15,
        marginTop:25
      },
    button:{
        backgroundColor:'red',
        alignItems:'center',
        borderWidth:2,
        borderRadius:20,
        alignSelf:'center',
        padding:10,
        marginTop:10
    },

  });