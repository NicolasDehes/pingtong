import React from 'react'
import { useFormik } from 'formik'

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient'
import { Input, Icon, Button, Text } from "@rneui/themed"

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ImageBackground, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'

import { styles } from "./LogIn.styles"

const initialValues = {
    email: "",
    password: "",
}

export default function LogIn(navigation: any) {
    const insets = useSafeAreaInsets()

    const onSubmit = (values: any) => {
        // Submit
    }

    const formikLogIn = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    const { values, errors, handleChange, handleSubmit, isValid, isSubmitting } = formikLogIn

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
                    Connexion
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
                        placeholder="Entrer votre email *"
                        leftIcon={<Icon name="mail-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange("email")}
                        value={values.email}
                        errorMessage={errors.email}
                    />

                    <Input
                        placeholder="Entrer votre mot de passe *"
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange("password")}
                        value={values.password}
                        errorMessage={errors.password}
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
                        title="Se connecter"
                    />
                </ScrollView>

                <Button
                    title="Pas de compte ?"
                    type="clear"
                    titleStyle={{ color: "#383F39", textDecorationLine: "underline", fontSize: 18 }}
                    onPress={() => navigation.navigation.navigate("S'inscrire")}
                />
            </KeyboardAvoidingView>
        </ImageBackground>
    )

}