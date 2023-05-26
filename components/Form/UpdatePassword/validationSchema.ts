import * as Yup from 'yup'

export default Yup.object().shape({
    oldPassword: Yup.string()
        .label('Ancien mot de passe')
        .required('Le mot de passe est obligatoire'),
    newPassword: Yup.string()
        .label('Nouveau mot de passe')
        .required('Le mot de passe est obligatoire')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Doit contenir 8 lettres, 1 majusc., 1 minuscule, 1 chiffre et 1 caractère spécial"
        ),
    newPasswordConfirmation: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Le mot de passe de confirmation doit correspondre au mot de passe')
        .required('Le mot de passe de confirmation est obligatoire'),
});