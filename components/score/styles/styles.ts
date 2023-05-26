import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tableBorder: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    headText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    wrapper: {
        flexDirection: 'row',
    },
    row: {
        height: 30,
    },
    rowText: {
        textAlign: 'center',
        fontSize: 14,
    },
    winner: {
        color: '#0F0',
    },
    loser: {
        color: '#F00',
    }
});