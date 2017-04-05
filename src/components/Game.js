import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import GameSection from './GameSection';
import Button from './Button';

class Game extends Component {

    buyGame(link) {
      Linking.openURL(link);
    }

    render() {
        // console.log(props.game.thumbnail_img);
        return (
            <View style={styles.containerStyle}>
                <GameSection>
                    <View style={styles.headerMainContainerStyle}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image 
                                style={styles.thumbnailStyle} 
                                source={{ uri: "https://psmedia.playstation.com/is/image/psmedia/ps4-overview-lead-image-ds4-01-eu-06sep16?$2ColExpand_Image$" }} 
                            />
                        </View>
                        <View style={styles.headerTextContainerStyle}>
                            <Text style={styles.headerStyle}>{this.props.game.name}</Text>
                            <Text>{this.props.game.company}</Text>
                        </View>
                    </View>
                </GameSection>
                <GameSection>
                    <Image
                        source={{ uri: this.props.game.img }}
                        style={styles.imgStyle}
                    />
                </GameSection>
                <GameSection>
                    <Button
                    buyGame={this.buyGame(this.props.game.buy_url)}
                    />
                </GameSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10        
    },
    headerMainContainerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerStyle: {
        fontSize: 16
    },
    headerTextContainerStyle: {
        justifyContent: 'space-around'
    },
    imgStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default Game;
