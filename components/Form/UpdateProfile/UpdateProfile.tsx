import React from 'react'
import { useFormik } from 'formik'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient'
import { Input, Icon, Button, Text } from "@rneui/themed"

import { ScrollView, SafeAreaView } from 'react-native'

const initialValues = {
    pseudo: "",
};

export default function UpdateProfile(navigation: any) {
    const insets = useSafeAreaInsets()

    const onSubmit = (values: any) => {
        // Submit
    };

    const formikLogIn = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const { values, errors, handleChange, handleSubmit, isValid, isSubmitting } = formikLogIn;

    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginHorizontal: 20,
                marginVertical: 20,
                shadowColor: "black",
                shadowOffset: { width: 20, height: 20 },
                shadowOpacity: 0.5,
                borderRadius: 10,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
            }}
        >
            <Text
                h1
                h1Style={{
                    fontFamily: "Nunito-SemiBold",
                    textAlign: "center",
                    marginBottom: 20,
                }}
            >
                Modification du profil
            </Text>

            <ScrollView
                keyboardShouldPersistTaps="handled"
            >
                <Input
                    placeholder="Entrer un pseudonyme"
                    label="Votre pseudonyme"
                    labelStyle={{ fontFamily: "Nunito-Regular", color: "#383F39" }}
                    leftIcon={<Icon name="person-outline" size={20} />}
                    onChangeText={handleChange("pseudo")}
                    value={values.pseudo}
                    placeholderTextColor="#383F39"
                    errorMessage={errors.pseudo}
                />

                <Button
                    disabled={!isValid || isSubmitting}
                    disabledTitleStyle={{ fontFamily: "Nunito-Regular", textTransform: "uppercase", fontSize: 16, color: "#383F39" }}
                    loading={isSubmitting}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#00B09B', '#96C93D'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                    titleStyle={{ fontFamily: "Nunito-Regular", textTransform: "uppercase", fontSize: 16, color: "#383F39" }}
                    onPress={() => handleSubmit()}
                    title="Valider"
                />
            </ScrollView>

            <Button
                title="Modification de mot de passe"
                type="clear"
                titleStyle={{ fontFamily: "Nunito-Regular", color: "#383F39", textDecorationLine: "underline", fontSize: 18 }}
                onPress={() => navigation.navigation.navigate("Modification de mot de passe")}
            />
        </SafeAreaView>
    )

}