'use strict';
import React from 'react'
import {reduxForm, Field} from 'redux-form';
import Input from '../input';


class DeliveryProblemForm extends React.Component {





  render() {
    return (
      <form>
        <Field type="number" name="trackingNumber" component={Input} label="tracking number"/>
        <Field name="issue" component={Input} element="select" label="What is your issue?">
          <option value="not-delivered">My Delivery has not arrived</option>
          <option value="wrong-item">Wrong item was delivered</option>
          <option value="missing-part">Part I ordered was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <Field name="details" component={Input} element="textarea" label="Give me more details"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'deliveryForm'
})(DeliveryProblemForm)