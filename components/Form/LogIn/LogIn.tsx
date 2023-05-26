import React from 'react'
import { useFormik } from 'formik'

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient'
import { Input, Icon, Button, Text } from "@rneui/themed"

import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native'

const initialValues = {
    email: "",
    password: "",
};


export default function LogIn(navigation : any) {
    const onSubmit = (values: any) => {
        // Submit
    };

    const formikLogIn = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const { values, errors, handleChange, handleSubmit, isValid, isSubmitting } = formikLogIn;

    return(
        <KeyboardAvoidingView 
            enabled style={{flex: 1}} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Text 
                h1 
                h1Style={{
                    fontFamily: "Nunito-SemiBold",
                    fontWeight: "700"
                }}
            >
                Se connecter 
            </Text>
            
            <ScrollView
                keyboardShouldPersistTaps="handled" 
                contentContainerStyle={{flex: 1}}
            >
                <Input
                    placeholder="Entrer votre email"
                    leftIcon={<Icon name="mail-outline" size={20} />}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    errorMessage={errors.email}
                />
                
                <Input
                    placeholder="Entrer votre mot de passe"
                    leftIcon={<Icon name="lock-outline" size={20} />}
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
                    onPress={() => handleSubmit()}
                    title="Se connecter" 
                />
            </ScrollView>

            <Button
                title="S'inscrire"
                type="clear"
                onPress={() => navigation.navigate("S'inscrire")}
            />
        </KeyboardAvoidingView>
    )
    
}