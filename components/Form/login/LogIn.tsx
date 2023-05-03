import React from 'react';
import { useFormik } from 'formik';

import validationSchema from "./validationSchema";

import { Input, Icon, Button, Text } from "@rneui/themed";
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

const initialValues = {
    email: "",
    password: "",
};


export default function LogIn() {
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
            <Text>
                Se connecter 
            </Text>
            
            <ScrollView
            keyboardShouldPersistTaps="handled" 
            contentContainerStyle={{flex: 1}}>
                <Input
                    placeholder="Entrer votre email"
                    leftIcon={<Icon name="account-outline" size={20} />}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    errorMessage={errors.email}
                />
                <Input
                    placeholder="Entrer votre mot de passe"
                    leftIcon={<Icon name="account-outline" size={20} />}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    errorMessage={errors.password}
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
                    title="Se connecter" 
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
    
}