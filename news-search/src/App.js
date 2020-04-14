import React, {useState, useEffect} from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [loading, setLoading] = useState(false);

  const fetchNews = () => {
    setLoading(true);
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then(data => {
        setNews(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    setSearchQuery(input.value);
  }

  useEffect(() => {
    fetchNews();
  }, [searchQuery]);

  const searchResults = () => {
    if (loading)
      return (<h2>loading</h2>);
    else
      return (news.map((n, i) => <p key={i}>{n.title}</p>));
  }

  return(
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"/>
        <button>Search</button>
      </form>
      {searchResults()}
    </div>
  );
}

export default App;
