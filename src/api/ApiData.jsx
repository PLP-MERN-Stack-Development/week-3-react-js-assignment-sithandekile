import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch posts on component first loads
  useEffect(() => {
    axios.get("https://dummyjson.com/posts?limit=3")
      .then(response => {
        setData(response.data.posts);         
        setFiltered(response.data.posts);   
      })
      .catch(error => {
        console.error("Failed to fetch data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter posts based on query
  useEffect(() => {
    setFiltered(
      data.filter(d => d.title.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        className="border border-orange-700 rounded-sm p-2 w-full mb-4"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
