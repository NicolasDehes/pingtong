import React, { useState } from "react"
import { useFormik } from "formik"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import validationSchema from "./validationSchema"

import { LinearGradient } from 'expo-linear-gradient';
import { Input, Icon, Button, Text } from '@rneui/themed';

import { styles } from './SignUp.styles'

import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const initialValues = {
    pseudo: "",
    email: "",
    password: "",
    passwordConfirmation: "",
}

export default function SignUp(navigation: any) {
    const insets = useSafeAreaInsets()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const onSubmit = (values: any) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((value) => {
                navigation.navigation.navigate('Se connecter')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    const formikSignUp = useFormik({
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
    } = formikSignUp;

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
                        marginBottom: 20,
                    }}
                >
                    S'inscrire
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
                >
                    <Input
                        placeholder="Entrer un pseudonyme *"
                        label="Votre pseudonyme *"
                        labelStyle={{ fontFamily: "Nunito-Regular", color: "#383F39" }}
                        leftIcon={<Icon name="person-outline" size={20} />}
                        onChangeText={handleChange('pseudo')}
                        value={values.pseudo}
                        placeholderTextColor="#383F39"
                        errorMessage={errors.pseudo}
                    />

                    <Input
                        placeholder="Entrer un email *"
                        label="Votre adresse mail *"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={<Icon name="mail-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        errorMessage={errors.email}
                    />

                    <Input
                        placeholder="Entrer un mot de passe *"
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

                    <Input
                        placeholder="Confirmer le mot de passe *"
                        label="Confirmation de votre mot de passe *"
                        labelStyle={{ fontFamily: "Nunito-Regular", color: "#383F39" }}
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        rightIcon={<Icon
                            name={showPasswordConfirmation ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                        />}
                        onChangeText={handleChange("passwordConfirmation")}
                        placeholderTextColor="#383F39"
                        value={values.passwordConfirmation}
                        errorMessage={errors.passwordConfirmation}
                        secureTextEntry={showPasswordConfirmation}
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
                    title="S'inscrire"
                />

                <Button
                    title="Vous avez déjà un compte ?"
                    type="clear"
                    titleStyle={{
                        fontFamily: 'Nunito-Regular',
                        color: '#383F39',
                        textDecorationLine: 'underline',
                        fontSize: 18,
                    }}
                    onPress={() =>
                        navigation.navigation.navigate('Se connecter')
                    }
                />
            </SafeAreaView>
        </ImageBackground>
    );
}
