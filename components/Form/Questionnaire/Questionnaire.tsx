import { Form, useFormik } from 'formik';
import React from 'react';
import { View, Text } from 'react-native';
import {questions} from './TmpQuestions';

export default function Questionnaire() {
    const formik = useFormik({
        initialValues: questions.text,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    // const fields = Object.keys(questions.text).map(key => (
    //     <>
    //         <label htmlFor={key}>{questions.text[key]}</label>
    //         <input
    //             id={key}
    //             name={key}
    //             type={questions.type[key]}
    //             onChange={formik.handleChange}
    //             value={formik.values[key]}
    //         />
    //     </>
    // ));
    return (
        <View>
            <Text>Questionnaire</Text>

            <Form onSubmit={()=>{}}>

            </Form>
        </View>
    );
}