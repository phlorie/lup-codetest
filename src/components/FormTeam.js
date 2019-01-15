import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createTeam, updateTeam } from '../data/actions';
import { required, isNumber } from '../utils/validate';
import InputField from './InputField';

class FormTeam extends Component {
  render() {
    const { handleSubmit, error, onSave } = this.props;
    return (
      <form onSubmit={handleSubmit(onSave)}>
        <div>
          <Field label="Color" name="color" component={InputField} validate={[required]} />
        </div>
        <div>
          <Field label="Color Hex" name="colorHex" component={InputField} validate={[required]} />
        </div>
        <div>
          <Field label="Name" name="name" component={InputField} validate={[required]} />
        </div>
        <div>
          <Field label="City" name="city" component={InputField} validate={[required]} />
        </div>
        <div>
          <Field label="Country" name="country" component={InputField} validate={[required]} />
        </div>
        <div>
          <Field label="Points" name="points" component={InputField} validate={[required, isNumber]} />
        </div>
        {error && <strong>{error}</strong>}
        <button type="submit">Save</button>
      </form>
    );
  }
}

FormTeam = reduxForm({
  form: 'team'
})(FormTeam);

const mapStateToProps = ({ teamsState }) => ({
  teams: teamsState.teams,
  // The way the values to edit are loaded is not ideal, it would require more time to separate the form from the connection to state
  initialValues: teamsState.editTeamData,
});

const mapDispatchToProps = dispatch => ({
  onSaveNew: formValues => {
    return dispatch(createTeam(formValues));
  },
  onEdit: (formValues, teamId) => {
    return dispatch(updateTeam(formValues, teamId));
  }
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  let onSave = propsFromDispatch.onSaveNew;
  // Would need time to either create a separate form for edit (which repeats the code) ot get the id to be passed properly which is not trivial
  if (ownProps.match.params.teamId !== undefined) {
    onSave = propsFromDispatch.onEdit;
  }
  return {
    onSave,
    teams: propsFromState.teams,
    initialValues: propsFromState.initialValues,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FormTeam);