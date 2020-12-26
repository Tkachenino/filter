import PropTypes from 'prop-types';

const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <nav className="ToolbarWrapper">
      {filters.map((i) => (
        <button className={`ToolbarButton ${i === selected && 'ToolbarButton-active'}`}  key={i} onClick={() => onSelectFilter(i)}>
          {i}
        </button>
      ))}
    </nav>
  )
};

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.oneOf(["All", "Websites", "Flayers", "Business Cards"])),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}

export default Toolbar;