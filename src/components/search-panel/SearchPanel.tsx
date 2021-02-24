import React, {ChangeEvent, useState} from 'react';

type SearchPanelPropsType = {
  searchForm: (value: string) => void
}

const SearchPanel = ({searchForm}: SearchPanelPropsType) => {
  const [value, setValue] = useState<string>('')
  const onSearchForm = (e: ChangeEvent<HTMLInputElement>) => {
    searchForm(e.target.value)
    setValue(e.target.value)
  }

  return <input type="text" placeholder='Search' className="form-control search-input" value={value}
                onChange={onSearchForm}/>
};

export default SearchPanel;
