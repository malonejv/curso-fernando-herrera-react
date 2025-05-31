import PropTypes from "prop-types";

const App = ({
  inspiringQuote= "The only limit to our realization of tomorrow is our doubts of today.",
  author= "Franklin D. Roosevelt",
  date= new Date(1945, 4, 13)
}) => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <blockquote>
        {inspiringQuote}
        <p>— {author}</p>
        <p>Date: {date.toLocaleDateString()}</p>
      </blockquote>
    </div>
  );
};

App.propTypes = {
  inspiringQuote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};

export default App;
