import React from 'react';

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

//input for searching items in list
const SearchBox = (props: Props) => {
  const { setQuery } = props;

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value.trim().toLowerCase())
      }
    />
  );
};

export default SearchBox;
