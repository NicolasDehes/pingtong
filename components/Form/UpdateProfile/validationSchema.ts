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
});