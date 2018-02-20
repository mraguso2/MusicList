import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';

// pure function to render TemplateContainer
function TemplateContainer(props) {
  return (
    <Template progress={props.progress} />
  );
}

// default nomenclature to name mapStateToProps
// takes state data that exists in store & turns into JS obj
function mapStateToProps(state) {
  return {
    progress: state.progress,
  };
}

export default connect(mapStateToProps)(TemplateContainer);
