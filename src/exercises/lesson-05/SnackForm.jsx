import { useState, useEffect, useRef } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const nameRef = useRef(null);
  const ratingRef = useRef(null);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
      setTouched(true);
    } else {
      setName('');
      setRating('');
      setTouched(false);
    }
  }, [isEditing]);

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '' && rating > 0 && rating < 6;
  }

  function getNameError() {
    if (touched.name && !validateName()) {
      return 'Snack name is required';
    }
  }

  function getRatingError() {
    if (touched.rating && !validateRating()) {
      return 'Please select a rating';
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      if (validateName() && validateRating()) {
        updateSnack(editingSnack.id, name, rating);
      }
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          className={styles['field-input']}
          placeholder="Enter snack name"
          value={name}
          ref={nameRef}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          ref={ratingRef}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
