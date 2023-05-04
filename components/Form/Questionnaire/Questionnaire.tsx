import { Form, useFormik } from 'formik';
import React from 'react';
import { View, Text } from 'react-native';
import {questions} from './TmpQuestions';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Questionnaire() {
    const formik = useFormik({
        initialValues: questions.default,
        onSubmit: () => {},
    });
    
    return (
        <View>
            <Text>Questionnaire</Text>

            <Form onSubmit={formik.handleSubmit}>
                {
                    Object.keys(questions.text).map( key => (
                        <div key={key}>
                            <label htmlFor={key}>{questions.text[key]}</label>
                            <input
                                id={key}
                                name={key}
                                type={questions.type[key]}
                                placeholder='Votre réponse ici...'
                                onChange={formik.handleChange}
                                value={formik.values[key]}
                            />
                        </div>
                    ))
                }
                <button type="submit">Soumettre</button><button><Icon name="arrow-right"></Icon></button>
            </Form>
        </View>
    );
}