import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
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
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowElement: {
        flex: 1
    },
    winner: {
        color: '#0F0',
        flex: 1
    },
    loser: {
        color: '#F00',
        flex: 1
    }
});