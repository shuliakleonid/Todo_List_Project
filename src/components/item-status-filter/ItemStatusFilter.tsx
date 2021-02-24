import React, {FunctionComponent, useState} from 'react';

type ItemStatusFilterPropsType = {
  sortTasks: (filter: string) => void
}
const ItemStatusFilter: FunctionComponent<ItemStatusFilterPropsType> = ({sortTasks}) => {
  const [activeButton,setActiveButton]=useState(false)
  const onFilterClick = (filter: string) => {
    sortTasks(filter)
    setActiveButton(!activeButton)
  }
const onActiveButton=(e:any)=>{
  console.log(e.target.className)
  e.target.className='btn btn-info'
}
  let styleButton = activeButton?'btn btn-info':'btn btn-outline-secondary'
  return (
      <div className="btn-group">
        <button
            onClick={()=>( onFilterClick('all'), onActiveButton)    }
            type="button"
            className={styleButton}>All
        </button>
        <button
            onClick={()=>( onFilterClick('active'), onActiveButton)}
            type="button"
            className={styleButton}>Active
        </button>
        <button
            onClick={()=>( onFilterClick('done'), onActiveButton)}
            type="button"
            className={styleButton}>Done
        </button>
      </div>
  );
};

export default ItemStatusFilter;
