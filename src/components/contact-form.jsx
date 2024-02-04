import React from "react";
import { object, func } from "prop-types";

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: "",
      email: "",
      option: "",
      select: "",
      message: "",
      terms: false,
    },
  };

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.data);
  }

  fieldChange(event, field) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let newData = this.props.data;
    newData[field] = value;
    this.props.onChange(newData);
  }

  isSelected(key, option) {
    return this.props.data[key] == option;
  }

  options = [
    { id: 1, label: "I have question about my membership" },
    { id: 2, label: "I have technical question" },
    { id: 3, label: "I would like to change membership" },
    { id: 4, label: "Other question" },
  ];

  render() {
    let data = this.props.data;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Contact Form</h3>

        <div class="form-group">
          <label className="form-label">Your Name:</label>
          <input
            name="name"
            className="form-control"
            value={data.name}
            onChange={(e) => this.fieldChange(e, "name")}
          />
        </div>

        <div class="form-group">
          <label className="form-label">Your Best Email:</label>
          <input
            name="email"
            className="form-control"
            value={data.email}
            onChange={(e) => this.fieldChange(e, "email")}
          />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div class="form-group row">
          {this.options.map((option, i) => (
            <label className="form-label col-xs-4" key={i}>
              <input
                type="radio"
                name="option"
                value={option.label}
                onChange={(e) => this.fieldChange(e, "option")}
              />{" "}
              {option.label}
            </label>
          ))}
        </div>

        <hr />

        <div class="form-group">
          <label className="form-label">What can we help you with:</label>
          <select
            className="form-control"
            name="select"
            onChange={(e) => this.fieldChange(e, "select")}
          >
            <option value="1">I have question about my membership</option>
          </select>
        </div>

        <div class="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Please type your question here"
            className="form-control"
            onChange={(e) => this.fieldChange(e, "message")}
          />
        </div>

        <div class="form-group">
          <label className="form-label">
            {" "}
            <input
              type="checkbox"
              name="terms"
              checked={data.terms}
              onChange={(e) => this.fieldChange(e, "terms")}
            />{" "}
            I agree to terms and conditions{" "}
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    );
  }
}
