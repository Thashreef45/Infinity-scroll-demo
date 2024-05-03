import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
// import Spinner from './components/Spinner';

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/${page}`);
      // console.log(page,'page',response.data.data.length,data.length)
      setData((prevData) => [...prevData, ...response.data.data]);
      setPage((prevPage) => prevPage + 1);
      if(!response.data.data.length) setHasMore(false)
    } catch (error) {
      console.log(error.message)
    } finally {
      // console.log('hey ----22')
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
        <h1>Infinite Scroll Demo</h1>
        <InfiniteScroll
          style={{overflowX:'hidden'}}
          loader={<p>Loading...</p>}
          // loader = {<Spinner/>} // todo:(fix) spinner have some,
          endMessage={<h3>End</h3>}
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
        >
          {data.map((x, index) => (
            <Card
              key={index}
              image={x.node.field_photo_image_section}
              title={x.node.title}
            />
          ))}
        </InfiniteScroll>
    </div>
  );
}

export default App;
