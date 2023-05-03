import { Form, useFormik } from 'formik';
import React from 'react';
import { View, Text } from 'react-native';
import {questions} from './TmpQuestions';

export default function Questionnaire() {
    const formik = useFormik({
        initialValues: questions,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <View>
            <Text>Questionnaire</Text>

            <Form onSubmit={()=>{}}>
                
            </Form>
        </View>
    );
}