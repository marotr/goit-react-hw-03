
import { Formik as Formik, Form , Field, ErrorMessage} from "formik"

import { useId } from "react"
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
name: Yup.string().min(3, 'Minimum 3 symbols ').max(50, 'Maximum 50 symbols').required('required'),
phone: Yup.string().min (3, 'Minimum 3 symbols ').max(50, 'Maximum 50 symbols').required('required').matches(/^\d+$/, 'Phone number must be numeric')

})

 
    
  
  const ContactForm = ({ submit, onAddContact }) => {
     const nameFieldId = useId();
  const phoneFieldId = useId();
    return (
      <Formik
        initialValues={{
          name: '',
          phone: ''
        }}
        onSubmit={(values, actions) => {
          const newContact = {
             id: Date.now(),
            name: values.name,
            number: values.phone,
          };
          onAddContact(newContact);
          submit (values)
          actions.resetForm();
        }}
      validationSchema={validationSchema}>
        <Form >
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name='name' component='span' />
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="tel" name="phone" id={phoneFieldId} />
          <ErrorMessage name='phone' component='span' />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    )
  }


export default ContactForm