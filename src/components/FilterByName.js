const FilterByName = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm} className="form ">
      <label className="nameLabel chng" htmlFor="name">
        Search:
      </label>
      <input
        type="text"
        value={props.filterName}
        name="name"
        id="name"
        onChange={props.handleFilter}
        className="inputForm"
      />
    </form>
  );
};

export default FilterByName;
