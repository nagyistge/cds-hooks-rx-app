import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/ActionTypes';
import DrugSelector from './DrugSelector';
import ProblemSelector from './ProblemSelector';
import DateBox from './DateBox';
import FhirView from './FhirView';
import Cards from './Cards';

const RxActivity = React.createClass({

  render() {
    return <div id="main" className="app-main">
      <div className="order-entry">
        <h1 className="view-title">Rx View</h1>
        <div className="input-container">
          <ProblemSelector
            conditions={this.props.all.getIn(['fhirServer', 'conditions'])} 
            selection={this.props.all.getIn(['fhirServer', 'selection'])}
          />
        </div>
        
        <div className="input-container">
          <DrugSelector {...this.props.all.get('drug').toJS()} />
        </div>
        
        <div className="input-container">
          <div className="row">
            <div className="col-sm-6">
              <DateBox id="start" display="Start date" {...this.props.all.get('dates').start} />
            </div>
            <div className="col-sm-6">
              <DateBox id="end" display="End date" {...this.props.all.get('dates').end} />
            </div>
          </div>
        </div>
      
        <div className="decision-spacer"></div>
        <Cards className="card-holder" decisions={this.props.all.get('decisions')} />
      </div>
      <FhirView {...this.props} />
    </div>

  }

});

module.exports = RxActivity;
