import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const [isAddingOption, setIsAddingOption] = useState(false);
  const [workingQuestion, setWorkingQuestion] = useState(question);

  const isEditing = () => state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });
  };

  const handleCancel = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { editingQuestionId: null },
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        questionId: question.id,
        newText: workingText,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_QUESTION',
      payload: { questionId: question.id },
    });
  };

  const handleAddOption = () => {
    setWorkingQuestion({
      ...workingQuestion,
      options: [...workingQuestion.options, ''],
    });
    /*
    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        optionText: 'hello'
      }
    })
    */
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {isEditing() ? (
            <>
              <button className={styles['save-btn']} onClick={handleSave}>
                Save
              </button>
              <button className={styles['cancel-btn']} onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing() ? (
          <input
            type="text"
            value={workingText}
            className={styles['question-input']}
            onChange={(e) => setWorkingText(e.target.value)}
          />
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {workingQuestion.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing() ? (
                  <>
                    <input type="text" value={option} />
                    <button className={styles['option-edit-btn']}>Edit</button>
                    <button className={styles['option-delete-btn']}>
                      Delete
                    </button>
                  </>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
            {isAddingOption}
          </ul>
          {isEditing() && (
            <button
              className={styles['add-option-btn']}
              onClick={handleAddOption}
            >
              + Add new option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
