import css from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css}>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default Filter;
