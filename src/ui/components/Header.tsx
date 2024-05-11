import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../../assets/Daha_Daha.svg';
import Profile from '../../assets/Profile.svg';

const Header = () => {
  return (
    <View style={styles.container}>
        <Logo />
        <View style={styles.rightSideWrapper}>
            <TouchableOpacity style={styles.logInButton}>
                <Text style={styles.logInText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile}>
                <Profile />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        margin: 18,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightSideWrapper: {
        flexDirection: 'row'
    },
    logInButton: {
        backgroundColor: '#F40000',
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        width: 91,
        marginRight: 12
    },
    logInText: {
        color: "#fff",
        fontWeight: '700',
        //fontSize: 12,
    },
    profile: {
        width: 40,
        backgroundColor: "#1D1E1C",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});