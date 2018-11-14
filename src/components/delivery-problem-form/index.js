import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../input';

function required(value) {
  if (value === undefined || value === null) {
    return 'This field is required';
  }

  return undefined;
}

function notEmpty(value) {
  if (value.trim() === '') {
    return 'This field cannot be empty';
  }
}

function correctLength(value) {
  if (value.length !== 5) {
    return 'Tracking number must be five characters long';
  }
}

function isANumber(value) {
  for (let i = 0; i < value.length; i += 1) {
    if (value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57) {
      return 'Tracking number must be a number';
    }
  }
}

class DeliveryProblemForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
        <Field
          type="text"
          name="trackingNumber"
          component={Input}
          label="tracking number"
          validate={[required, notEmpty, correctLength, isANumber]}
        />
        <Field
          name="issue"
          component={Input}
          element="select"
          label="What is your issue?"
        >
          <option value="not-delivered">My Delivery has not arrived</option>
          <option value="wrong-item">Wrong item was delivered</option>
          <option value="missing-part">Part I ordered was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <Field
          name="details"
          component={Input}
          element="textarea"
          label="Give me more details"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'deliveryForm',
})(DeliveryProblemForm);
