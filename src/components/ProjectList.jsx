import PropTypes from 'prop-types';

const ProjectList = ({projects}) => {

  const itemsInColumn = projects.length / 3;

  let splitProjects = [
    projects.slice(0, Math.ceil(itemsInColumn)),
    projects.slice(Math.ceil(itemsInColumn), 2 * Math.ceil(itemsInColumn)),
    projects.slice(2 * Math.ceil(itemsInColumn))
  ];

  return (
    <div className='ProjectList'>

      {splitProjects.map((item, idx) => (
        <div className='ProjectColumn' key={idx}>

          {item.map((i, idx) => (
           <img className='ProjectItem' key={idx} src={i.img} alt={i.category}/>
          ))}

        </div>
      ))}

    </div>
  )
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
     category: PropTypes.string
    }))
};

export default ProjectList;