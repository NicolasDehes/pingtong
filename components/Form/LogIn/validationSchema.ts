import * as Yup from 'yup'

export default Yup.object().shape({
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
});