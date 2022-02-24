import React, {useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";

const SearchNotes = ({setSearchValue}) => {
  const [tags, setTags] = useState([])

  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value])
      event.target.value = ""
    }
  }
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }
  const handleSearch = event => {
    let value = event.target.value.toLowerCase()
    setSearchValue(value);
  }

  return (
    <div>
      <div className="tags-input">
        <ul id="tags">
          {
            tags.map((tag, index) => <li className="tag" key={index}>
              <span className='tag-title'>{tag}</span>
              <DeleteIcon fontSize="small" onClick={() => removeTags(index)}/>
            </li>)
          }
        </ul>
        <input type="search" placeholder="Search..."
               onChange={(event) => {
                 handleSearch(event)
               }}
               onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
        />
      </div>
    </div>
  );
};

export default SearchNotes;
