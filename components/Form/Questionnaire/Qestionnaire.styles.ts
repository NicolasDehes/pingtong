import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 20,
      width: "100%"
    },
    title: {
        fontWeight: "700",
        fontSize: 24
    },
    question: {
        fontWeight: "700",
        fontSize: 20
    },
    questionContainer: {
        marginBottom:40,
        width: "100%"
    },
    input: {
        height: 45,
        top: 5,
        borderRadius: 5,
        backgroundColor: "#F4F4F4"
    },
    btnsAction: {
        position:"absolute",
        bottom: 50,
        left: 20,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    btnSubmitDisabled: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        alignItems: "center",
        width: "80%",
        padding: 15,
        backgroundColor: "#f4f4f4"
    },
    btnSubmitTextDisabled: {
        color: "grey",
        textTransform: "uppercase"
    },
    btnNext: {
        borderRadius: 5,
        alignItems: "center",
        width: "20%",
        padding: 15,
    }
});