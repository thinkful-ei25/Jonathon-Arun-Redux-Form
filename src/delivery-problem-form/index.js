'use strict';
import React from 'react'

export default class DeliveryProblemForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="number">tracking number</label>
        <input type="number" name="trackingNumber"></input>
        <label htmlFor="issue">What is your issue?</label>
        <select name="issue">
          <option value="not-delivered">My Delivery has not arrived</option>
          <option value="wrong-item">Wrong item was delivered</option>
          <option value="missing-part">Part I ordered was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </select>
        <label htmlFor="details">Give me more details</label>
        <textarea name="details"></textarea>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
