import * as Yup from 'yup'

export default Yup.object().shape({
    pseudo: Yup.string()
        .label('Pseudonyme')
        .required('Un pseunonyme est obligatoire')
        .min(2, 'Le pseunodyme doit avoir au moins 2 caractères'),
});