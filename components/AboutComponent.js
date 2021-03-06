import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import {connect} from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function RenderItems(props){
    const item = props.item;

    
    if(item != null){
        return (
            <Card
                title='Corporate Leadership'
            >
                {
                    item.map(leader => {
                        return (
                            <ListItem 
                                key = {leader.id}
                                title = {leader.name}
                                subtitle = {leader.description}
                                hideChevron = {true}
                                leftAvatar = {{source: {uri: baseUrl+item.image}}}
                            />
                       );
                    })
                }
            </Card>
        )
    }else {
        return <View></View>
    }
}


class About extends Component{
    
    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        if(this.props.leaders.isLoading) {
            return (
                <ScrollView>
                <Card
                    title='Our History'
                >
                    <Text style={{margin: 10}}>
                        {`Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.`}
                    </Text>
                    </Card>
                    <Loading/>
                </ScrollView>    
            );
        }
        else if(this.props.leaders.errMess){
            return (
                <ScrollView>
                <Card
                    title='Our History'
                >
                    <Text style={{margin: 10}}>
                        {`Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.`}
                    </Text>
                </Card>
                <Text>{this.props.leaders.errMess}</Text>
            </ScrollView>
            );
        }
        else {
            return (
                <ScrollView>
                    <Card
                        title='Our History'
                    >
                        <Text style={{margin: 10}}>
                            {`Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.`}
                        </Text>
                    </Card>
                    <RenderItems item={this.props.leaders.leaders}/>
                </ScrollView>
            )
        }
    }
} 

export default connect(mapStateToProps)(About);