import React, {ChangeEvent, useState} from 'react';
import './ItemAddForm.css'

type ItemAddFormPropsType = {
  onAddNewTask: (value: string) => void
}

const ItemAddForm = ({onAddNewTask}: ItemAddFormPropsType) => {
  const [valueInput, setValueInput] = useState<string>('')
  const addTask = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)

  }
  return (
      <>
        <input placeholder='New task' className='form-control item-add-form' onChange={addTask} value={valueInput}/>
        <button onClick={() => (onAddNewTask(valueInput),()=> setValueInput(''))}
        className='btn btn-outline-secondary'>Add Task
        </button>
      </>
  );
};

export default ItemAddForm;
