import * as Yup from 'yup'

export default Yup.object().shape({
    email: Yup.string()
        .trim()
        .label('Adresse e-mail')
        .email('Entrer un e-mail valide')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Veuillez saisir un e-mail valide')
        .required('Veuillez saisir un e-mail'),
    password: Yup.string()
        .label('Mot de passe')
        .required('Le mot de passe est obligatoire'),
});