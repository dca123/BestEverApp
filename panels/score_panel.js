import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants } from 'expo';
import styles from './panel_styles';

const Score = () => (
    <View style={[styles.container, { backgroundColor: '#777171' }]}>
        <Text style = {[{
        alignItems: 'center',
        justifyContent: 'center'}]}>
        Test
        </Text>
    </View>
    );

export default Score