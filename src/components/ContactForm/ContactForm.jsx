// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import {
//   StyledForm,
//   StyledLabel,
//   StyledButton,
//   StyledField,
//   StyledErrorMessage,
// } from './ContactForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';

// const phonebookSchema = Yup.object().shape({
//   name: Yup.string().required('This field is required!'),
//   number: Yup.string()
//     .matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"')
//     .required('This field is required!'),
// });

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={phonebookSchema}
//       onSubmit={(values, actions) => {
//         if (
//           contacts.some(
//             contact => contact.name.toLowerCase() === values.name.toLowerCase()
//           )
//         ) {
//           return alert(`${values.name} is already in contacts!`);
//         }
//         dispatch(addContact(values));
//         actions.resetForm();
//       }}
//     >
//       <StyledForm>
//         <StyledLabel>
//           Name
//           <StyledField name="name" />
//           <StyledErrorMessage name="name" component="div" />
//         </StyledLabel>
//         <StyledLabel>
//           Number
//           <StyledField name="number" />
//           <StyledErrorMessage name="number" component="div" />
//         </StyledLabel>
//         <StyledButton type="submit">Add contact</StyledButton>
//       </StyledForm>
//     </Formik>
//   );
// };

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const phonebookSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.string()
    .matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"')
    .required('This field is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={phonebookSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          return alert(`${values.name} is already in contacts!`);
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                width="20em"
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.number && touched.number}>
              <FormLabel htmlFor="number">Number</FormLabel>
              <Field
                as={Input}
                id="number"
                name="number"
                type="text"
                width="20em"
              />
              <FormErrorMessage>{errors.number}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="purple">
              Add contact
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

