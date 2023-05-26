import React from "react"
import { useFormik } from "formik"

import { ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient'
import { Input, Icon, Button, Text } from "@rneui/themed"

import { styles } from "./SignUp.styles"

const initialValues = {
    pseudo: "",
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
}

export default function SignUp(navigation: any) {
    const insets = useSafeAreaInsets()

    const onSubmit = (values: any) => {
        // Submit
        setTimeout(() => {
            //navigation.navigate('')
        }, 400)
    }

    const formikSignUp = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    const { values, errors, handleChange, handleSubmit, isValid, isSubmitting } = formikSignUp

    return (
        <ImageBackground
            style={styles.background}
            source={require("../../../assets/images/fond-pingpong.png")}
            blurRadius={5}
        >
            <KeyboardAvoidingView
                enabled
                style={{
                    flex: 1,
                    marginHorizontal: 20,
                    marginVertical: 20,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    shadowColor: "black",
                    shadowOffset: { width: 20, height: 20 },
                    shadowOpacity: 0.5,
                    borderRadius: 10,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <Text
                    h1
                    h1Style={{
                        fontFamily: "Nunito-SemiBold",
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    S'inscrire
                </Text>

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                    style={{
                        marginHorizontal: 20,
                        marginVertical: 20,
                    }}
                >
                    <Input
                        placeholder="Entrer un pseudonyme *"
                        leftIcon={<Icon name="person-outline" size={20} />}
                        onChangeText={handleChange("pseudo")}
                        value={values.pseudo}
                        placeholderTextColor="#383F39"
                        errorMessage={errors.pseudo}
                    />

                    <Input
                        placeholder="Entrer un nom"
                        leftIcon={<Icon name="drive-file-rename-outline" size={20} />}
                        onChangeText={handleChange("lastName")}
                        placeholderTextColor="#383F39"
                        value={values.lastName}
                        errorMessage={errors.lastName}
                    />

                    <Input
                        placeholder="Entrer un prénom"
                        leftIcon={<Icon name="drive-file-rename-outline" size={20} />}
                        onChangeText={handleChange("firstName")}
                        placeholderTextColor="#383F39"
                        value={values.firstName}
                        errorMessage={errors.firstName}
                    />

                    <Input
                        placeholder="Entrer un email *"
                        leftIcon={<Icon name="mail-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange("email")}
                        value={values.email}
                        errorMessage={errors.email}
                    />

                    <Input
                        placeholder="Entrer un mot de passe *"
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange("password")}
                        value={values.password}
                        errorMessage={errors.password}
                    />

                    <Input
                        placeholder="Confirmer le mot de passe *"
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        onChangeText={handleChange("passwordConfirmation")}
                        placeholderTextColor="#383F39"
                        value={values.passwordConfirmation}
                        errorMessage={errors.passwordConfirmation}
                    />

                    <Button
                        disabled={!isValid || isSubmitting}
                        loading={isSubmitting}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['#00B09B', '#96C93D'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        style={{ marginHorizontal: 80, marginVertical: 2 }}
                        titleStyle={{ fontFamily: "Nunito-SemiBold", fontWeight: "500", textTransform: "uppercase", fontSize: 18, color: "#383F39" }}
                        onPress={() => handleSubmit()}
                        title="S'inscrire"
                    />
                </ScrollView>

                <Button
                    title="Vous avez déjà un compte ?"
                    type="clear"
                    titleStyle={{ color: "#383F39", textDecorationLine: "underline", fontSize: 18 }}
                    onPress={() => navigation.navigation.navigate("Se connecter")}
                />
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}