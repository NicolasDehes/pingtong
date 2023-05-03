import React from "react"
import { useFormik } from "formik"
//import { useNavigation } from "@react-navigation/native"

import { ScrollView, KeyboardAvoidingView, Platform } from "react-native"

import validationSchema from "./validationSchema"

import { Input, Icon, Button, Text } from "@rneui/themed"

const initialValues = {
    pseudo: "",
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
}

export default function SignUp() {
    //const navigation = useNavigation()

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
        <KeyboardAvoidingView 
            enabled style={{flex: 1}} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Text 
                h1 
                h1Style={{
                    fontFamily: "Nunito-SemiBold",
                    fontWeight: "300"
                }}
            >
                S'inscrire
            </Text>

            <ScrollView
                keyboardShouldPersistTaps="handled" 
                contentContainerStyle={{flex: 1}}
            >
                <Input
                    placeholder="Entrer un pseudonyme"
                    leftIcon={<Icon name="account-outline" size={20} />}
                    onChangeText={handleChange("pseudo")}
                    value={values.pseudo}
                    errorMessage={errors.pseudo}
                />

                <Input
                    placeholder="Entrer un nom"
                    leftIcon={<Icon name="account-outline" size={20} />}
                    onChangeText={handleChange("lastName")}
                    value={values.lastName}
                    errorMessage={errors.lastName}
                />

                <Input
                    placeholder="Entrer un prénom"
                    leftIcon={<Icon name="account-outline" size={20} />}
                    onChangeText={handleChange("firstName")}
                    value={values.firstName}
                    errorMessage={errors.firstName}
                />

                <Input
                    placeholder="Entrer un email"
                    leftIcon={<Icon name="email-outline" size={20} />}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    errorMessage={errors.email}
                />

                <Input
                    placeholder="Entrer un mot de passe"
                    leftIcon={<Icon name="lock-outline" size={20} />}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    errorMessage={errors.password}
                />

                <Input
                    placeholder="Confirmer le mot de passe"
                    leftIcon={<Icon name="lock-outline" size={20} />}
                    onChangeText={handleChange("passwordConfirmation")}
                    value={values.passwordConfirmation}
                    errorMessage={errors.passwordConfirmation}
                />

                <Button 
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                    onPress={() => handleSubmit()}
                    linearGradientProps={{
                        colors: ['#FF9800', '#F44336'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                    title="S'inscrire" 
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
