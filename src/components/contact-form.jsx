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
    newData[`${field}`] = value;
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
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h3>Contact Form</h3>

        <div className="form-group">
          <label className="form-label">Your Name:</label>
          <input
            name="name"
            className="form-control"
            value={data.name}
            onChange={(e) => this.fieldChange(e, "name")}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Your Best Email:</label>
          <input
            name="email"
            className="form-control"
            value={data.email}
            onChange={(e) => this.fieldChange(e, "email")}
          />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="options"
              value="A"
              onChange={(e) => this.fieldChange(e, "options")}
              checked={(e) => this.isSelected("options", e.target.value)}
            />{" "}
            Option A
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="options"
              value="B"
              onChange={(e) => this.fieldChange(e, "options")}
              checked={(e) => this.isSelected("options", e.target.value)}
            />{" "}
            Option B
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="options"
              value="C"
              onChange={(e) => this.fieldChange(e, "options")}
              checked={(e) => this.isSelected("options", e.target.value)}
            />{" "}
            Option C
          </label>
        </div>

        <hr />

        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          <select
            className="form-control"
            name="select"
            onChange={(e) => this.fieldChange(e, "select")}
            value={data.select}
          >
            {this.options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Please type your question here"
            className="form-control"
            onChange={(e) => this.fieldChange(e, "message")}
            value={data.message}
          />
        </div>

        <div className="form-group">
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

        <input
          type="submit"
          value="Send"
          className="contactform-submit"
          onClick={(e) => this.handleSubmit(e)}
        />
      </form>
    );
  }
}
