import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectNameFilter } from "../../redux/contactsSlice.js";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.searchBox_container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
