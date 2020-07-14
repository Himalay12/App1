import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';


function RenderItems(props){
    
    return (
        <Card
            title='Contact Infromation'
        >
            <Text style={{margin: 10}}>
{`121, Clear Water Bay Road

Clear Water Bay, Kowloon

HONG KONG

Tel: +852 1234 5678

Fax: +852 8765 4321

Email:confusion@food.net                
`}
            </Text>
        </Card>
    )
}


class Contact extends Component{
    
    static navigationOptions = {
        title: ''
    }

    render() {
        return (
            <ScrollView>
                <RenderItems />
            </ScrollView>
        )
    }
} 

export default Contact;