import React, { useState } from "react"
import { useFormik } from 'formik'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


import validationSchema from './validationSchema';

import { LinearGradient } from 'expo-linear-gradient';
import { Input, Icon, Button, Text } from '@rneui/themed';

import { ImageBackground, SafeAreaView, ScrollView } from 'react-native'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'

import { styles } from "./LogIn.styles"

const initialValues = {
    email: '',
    password: '',
};

export default function LogIn(navigation: any) {
    const insets = useSafeAreaInsets()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const onSubmit = (values: any) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((value) => {
                console.log(value);
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    const formikLogIn = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
    } = formikLogIn;

    return (
        <ImageBackground
            style={styles.background}
            source={require('../../../assets/images/fond-pingpong.png')}
            blurRadius={5}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    marginHorizontal: 20,
                    marginVertical: 20,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    shadowColor: 'black',
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
                        fontFamily: 'Nunito-SemiBold',
                        textAlign: 'center',
                    }}
                >
                    Connexion
                </Text>

                <Text 
                    style={{ 
                        textAlign: "center", 
                        color: "red", 
                        marginBottom: 20,
                        fontFamily: "Nunito-Regular",
                        display: errorMessage != "" ? "flex" : "none",
                    }}
                >
                    {errorMessage}
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
                        label="Votre adresse mail *"
                        labelStyle={{ fontFamily: "Nunito-Regular", color: "#383F39" }}
                        leftIcon={<Icon name="mail-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        errorMessage={errors.email}
                    />

                    <Input
                        placeholder="Entrer votre mot de passe *"

                        label="Votre mot de passe *"
                        labelStyle={{ fontFamily: "Nunito-Regular", color: "#383F39" }}

                        leftIcon={<Icon name="lock-outline" size={20} />}
                        rightIcon={<Icon
                            name={showPassword ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => setShowPassword(!showPassword)}
                        />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        errorMessage={errors.password}
                        secureTextEntry={showPassword}
                    />
                </ScrollView>

                <Button
                    disabled={!isValid || isSubmitting}
                    disabledTitleStyle={{
                        fontFamily: 'Nunito-Regular',
                        textTransform: 'uppercase',
                        fontSize: 16,
                        color: '#383F39',
                    }}
                    loading={isSubmitting}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#00B09B', '#96C93D'],
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 1 },
                    }}
                    style={{
                        marginHorizontal: 80,
                        marginVertical: 2,
                        marginTop: 20,
                    }}
                    titleStyle={{
                        fontFamily: 'Nunito-Regular',
                        textTransform: 'uppercase',
                        fontSize: 16,
                        color: '#383F39',
                    }}
                    onPress={() => handleSubmit()}
                    title="Se connecter"
                />

                <Button
                    title="Pas de compte ?"
                    type="clear"
                    titleStyle={{
                        fontFamily: 'Nunito-Regular',
                        color: '#383F39',
                        textDecorationLine: 'underline',
                        fontSize: 18,
                    }}
                    onPress={() => navigation.navigation.navigate("S'inscrire")}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}
