import * as Yup from 'yup'

export default Yup.object().shape({
    pseudo: Yup.string()
        .label('Pseudonyme')
        .required('Un pseunonyme est obligatoire')
        .min(2, 'Le pseunodyme doit avoir au moins 2 caractères'),
    lastName: Yup.string()
        .label('Nom')
        .required('Le nom est obligatoire')
        .min(2, 'Le nom doit avoir au moins 2 caractères'),
    firstName: Yup.string()
        .label('Prénom')
        .required('Le prénom est obligatoire')
        .min(2, 'Le prénom doit avoir au moins 2 caractères'),
    email: Yup.string()
        .trim()
        .label('Adresse e-mail')
        .email('Entrer un e-mail valide')
        .required('Veuillez saisir un e-mail'),
    password: Yup.string()
        .label('Mot de passe')
        .required('Le mot de passe est obligatoire')
        .matches( /* regex par Bren */
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Doit contenir 8 lettres, 1 majusc., 1 minuscule, 1 chiffre et 1 caractère spécial"
        ),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Le mot de passe de confirmation doit correspondre au mot de passe')
        .required('Le mot de passe de confirmation est obligatoire'),
});