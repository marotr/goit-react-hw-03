import { useId } from "react";
import { Formik, Form, Field } from "formik"



const SearchBox = ({ value, onFilter }) => {
  
  const searchBoxId = useId();
  

  return (<Formik initialValues={{ search: value }}
      onSubmit={(values) => {
        onFilter(values.search);
      }}
  >
  {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label htmlFor={searchBoxId}>Find contacts by name</label>
          <Field
            as="textarea"
            name="search"
            id={searchBoxId}
            value={value}
            onChange={(e) => {
              handleChange(e);
              onFilter(e.target.value);
            }}
          />
        </Form>
      )}
</Formik>
    
);
}

export default SearchBox