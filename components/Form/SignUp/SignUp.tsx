import React from 'react';
import { useFormik } from 'formik';

import { ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import validationSchema from './validationSchema';

import { LinearGradient } from 'expo-linear-gradient';
import { Input, Icon, Button, Text } from '@rneui/themed';

import { styles } from './SignUp.styles';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialValues = {
    pseudo: '',
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
};

export default function SignUp(navigation: any) {
    const insets = useSafeAreaInsets();

    const onSubmit = (values: any) => {     
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((value) => {
                console.log(value);
                // navigation.navigate();
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

                <ScrollView keyboardShouldPersistTaps="handled">
                    <Input
                        placeholder="Entrer un pseudonyme *"
                        label="Votre Pseudonyme"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={<Icon name="person-outline" size={20} />}
                        onChangeText={handleChange('pseudo')}
                        value={values.pseudo}
                        placeholderTextColor="#383F39"
                        errorMessage={errors.pseudo}
                    />

                    <Input
                        placeholder="Entrer un nom"
                        label="Votre Nom"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={
                            <Icon name="drive-file-rename-outline" size={20} />
                        }
                        onChangeText={handleChange('lastName')}
                        placeholderTextColor="#383F39"
                        value={values.lastName}
                        errorMessage={errors.lastName}
                    />

                    <Input
                        placeholder="Entrer un prénom"
                        label="Votre prénom"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={
                            <Icon name="drive-file-rename-outline" size={20} />
                        }
                        onChangeText={handleChange('firstName')}
                        placeholderTextColor="#383F39"
                        value={values.firstName}
                        errorMessage={errors.firstName}
                    />

                    <Input
                        placeholder="Entrer un email *"
                        label="Votre adresse mail"
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
                        label="Votre mot de passe"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        placeholderTextColor="#383F39"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        errorMessage={errors.password}
                    />

                    <Input
                        placeholder="Confirmer le mot de passe *"
                        label="Confirmation de votre mot de passe"
                        labelStyle={{
                            fontFamily: 'Nunito-Regular',
                            color: '#383F39',
                        }}
                        leftIcon={<Icon name="lock-outline" size={20} />}
                        onChangeText={handleChange('passwordConfirmation')}
                        placeholderTextColor="#383F39"
                        value={values.passwordConfirmation}
                        errorMessage={errors.passwordConfirmation}
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
