import React from "react"
import { Field, reduxForm } from "redux-form"
import { TextField } from "redux-form-material-ui"

import messages from "../../../../lib/text"

import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import "./style.sass"

const DeveloperForm = ({ handleSubmit, pristine, submitting }) => (
  <div style={{ maxWidth: 720, width: "100%" }}>
    <div className="gray-title" style={{ margin: "15px 0 15px 20px" }}>
      {messages.developerProfile}
    </div>
    <form
      onSubmit={handleSubmit}
      style={{
        display: "initial",
        width: "100%",
      }}
    >
      <Paper style={{ margin: "0px 20px" }} zDepth={1}>
        <div style={{ padding: "10px 30px 30px 30px" }}>
          <Field
            component={TextField}
            fullWidth
            name="name"
            floatingLabelText={messages.fullName}
          />
          <Field
            component={TextField}
            fullWidth
            name="description"
            floatingLabelText={messages.description}
            multiLine
            rows={1}
          />
          <Field
            component={TextField}
            fullWidth
            name="website"
            floatingLabelText={messages.website}
          />
          <Field
            component={TextField}
            fullWidth
            name="email"
            floatingLabelText={messages.email}
          />
        </div>
        <div
          className="buttons-box"
          style={{ display: pristine ? "none" : "block" }}
        >
          <RaisedButton
            type="submit"
            label={messages.save}
            primary
            className="button"
            disabled={pristine || submitting}
          />
        </div>
      </Paper>
    </form>
  </div>
)

export default reduxForm({
  form: "WebStoreDeveloperForm",
  enableReinitialize: true,
})(DeveloperForm)