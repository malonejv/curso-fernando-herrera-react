let inspiringQuote =
  "The only limit to our realization of tomorrow is our doubts of today.";
let author = "Franklin D. Roosevelt";
let date = new Date(1945, 4, 13);

const App = () => {
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

export default App;
