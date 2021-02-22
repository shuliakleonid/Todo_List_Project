import React, {FunctionComponent} from 'react';

type ItemStatusFilterPropsType = {
  sortTasks: (filter: string) => void
}
const ItemStatusFilter: FunctionComponent<ItemStatusFilterPropsType> = ({sortTasks}) => {
  const onFilterClick = (filter: string) => {
    sortTasks(filter)
  }
  return (
      <div className="btn-group">
        <button
            onClick={() => onFilterClick('all')}
            type="button"
            className="btn btn-info">All
        </button>
        <button
            onClick={() => onFilterClick('active')}
            type="button"
            className="btn btn-outline-secondary">Active
        </button>
        <button
            onClick={() => onFilterClick('done')}
            type="button"
            className="btn btn-outline-secondary">Done
        </button>
      </div>
  );
};

export default ItemStatusFilter;
