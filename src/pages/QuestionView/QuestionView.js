import React, { Component } from 'react';

import './QuestionView.css';

import QuestionList from '../../components/QuestionList/QuestionList'
import Header from '../../components/Header/Header'
import Description from '../../components/Description/Description';


import json from '../../dummy/db.json';


class QuestionView extends Component {
 

  render() {
    return <div className="QuestionView">
        <Header/>
		<Description/>
		<QuestionList questions = {json.questions}/>
      </div>
  }
}

export default QuestionView;
