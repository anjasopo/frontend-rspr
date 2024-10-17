import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
