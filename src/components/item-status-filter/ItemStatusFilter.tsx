import React, {FunctionComponent} from 'react';
import {v1} from 'uuid';
type Button={
  name:string
  label:string
}
type ItemStatusFilterPropsType = {
  sortTasks: (filter: string) => void
  filter: string
}
const ItemStatusFilter: FunctionComponent<ItemStatusFilterPropsType> = ({sortTasks, filter}) => {
  const onFilterClick = (filter: string) => {
    sortTasks(filter)
  }
  const buttons:Array<Button> = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ]
  const addButtons = buttons.map(({name, label}) => {
        let isActive = filter === name;
        let clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
    return <button key={v1()} className={`btn ${clazz}`} type='button' onClick={()=>onFilterClick(name)}>{label}</button>
      }
  )
  return (
      <div className="btn-group">
        {addButtons}
      </div>
  );
};

export default ItemStatusFilter;
