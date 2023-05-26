import { Formik, useFormik } from 'formik';
import React from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';
import {QuestionIndexer, questions} from './TmpQuestions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { styles } from './Qestionnaire.styles';
import GradientText from './GradientText';
import { LinearGradient } from 'expo-linear-gradient';


export default function Questionnaire() {
    const formik = useFormik({
        initialValues: questions.default,
        onSubmit: () => {},
    });

    const getInputs = (
        handleChange: (arg0: string) => ((text: string) => void) | undefined, 
        values: QuestionIndexer
    ) => { return Object.keys(questions.text).map<JSX.Element>( (key, index) => 
        <View key={key} style={styles.questionContainer}>
            <Text style={styles.title}>Question n° {index + 1}</Text>
            <GradientText colors={['#00B09B', '#96C93D']} style={styles.question}>
                {Object.values(questions.text)[index]}
            </GradientText>
            <TextInput
                style={styles.input}
                id={key}
                onChangeText={handleChange(key)}
                placeholder="Votre réponse ici..."
                value={values[key]}
            />
        </View>
    )};

    return (
        <Formik
            initialValues={formik.initialValues}
            onSubmit={(values: any) => console.log(values)}
        >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.container}>
            {getInputs(() =>handleChange, values)}
            <View style={styles.btnsAction}>
                <TouchableOpacity style={styles.btnSubmitDisabled} onPress={() => handleSubmit}>
                    <Text style={styles.btnSubmitTextDisabled}>Soumettre</Text>
                </TouchableOpacity>
                <LinearGradient style={styles.btnNext} colors={['#00B09B', '#96C93D']}>
                    <TouchableOpacity onPress={() => handleSubmit}>
                        <Icon name="arrow-right" size={20} color="white" />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
          </View>
        )}
      </Formik>
    );
}