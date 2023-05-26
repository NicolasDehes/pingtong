import React from 'react'
import { useFormik } from 'formik'

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient'
import { Input, Icon, Button, Text } from "@rneui/themed"

import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native'

const initialValues = {
    pseudo: "",
    lastName: "",
    firstName: "",
};


export default function UpdateProfile(navigation : any) {
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
                Modification du profil
            </Text>
            
            <ScrollView
                keyboardShouldPersistTaps="handled" 
                contentContainerStyle={{flex: 1}}
            >
                <Input
                    placeholder="Entrer un pseudonyme"
                    leftIcon={<Icon name="person-outline" size={20} />}
                    onChangeText={handleChange("pseudo")}
                    value={values.pseudo}
                    errorMessage={errors.pseudo}
                />

                <Input
                    placeholder="Entrer un nom"
                    leftIcon={<Icon name="drive-file-rename-outline" size={20} />}
                    onChangeText={handleChange("lastName")}
                    value={values.lastName}
                    errorMessage={errors.lastName}
                />

                <Input
                    placeholder="Entrer un prénom"
                    leftIcon={<Icon name="drive-file-rename-outline" size={20} />}
                    onChangeText={handleChange("firstName")}
                    value={values.firstName}
                    errorMessage={errors.firstName}
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
                    title="Valider" 
                />
            </ScrollView>

            <Button
                title="Modification de mot de passe"
                type="clear"
                onPress={() => console.log('coucou')}
            />
        </KeyboardAvoidingView>
    )
    
}