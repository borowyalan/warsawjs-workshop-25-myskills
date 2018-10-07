import React, { Component } from 'react';
import './QuestionList.css'

class QuestionList extends Component {
	constructor(props){
		super(props);
	}

  render () {

	const questionList = this.props.questions
	.map((questionItem) => {
		return <li> {questionItem.question} </li>
	})

    return( 
		<div className="">
			<section>
				<ol>
					{questionList}
				</ol>
			</section>
		</div>
	)
  }
}

export default QuestionList;