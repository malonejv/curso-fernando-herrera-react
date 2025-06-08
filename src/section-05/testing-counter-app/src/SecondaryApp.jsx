import PropTypes from "prop-types";

const SecondaryApp = ({
  quote= "The only limit to our realization of tomorrow is our doubts of today.",
  author= "Franklin D. Roosevelt",
  date= new Date(1945, 4, 13)
}) => {
  return (
    <div>
      <h1 data-testid="test-title">Hello, World!</h1>
      <blockquote>
        {quote}
        <p>— {author}</p>
        <p>Date: {date.toLocaleDateString()}</p>
      </blockquote>
    </div>
  );
};

SecondaryApp.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};

export default SecondaryApp;
