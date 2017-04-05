import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Rob's Games!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#CC0000',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24
    }
});

export default Header;







