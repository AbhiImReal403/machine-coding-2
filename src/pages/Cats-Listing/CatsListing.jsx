import { useState, useEffect, useRef } from "react";
import useAxios from "../../services/api";
import { CardListingCard } from "../../components";

const CatsListing = () => {
  const axiosInstance = useAxios();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/cats?page=${page}&limit=4`);
      console.log(response.data.data);
      setItems((prevItems) => {
        // Create a set of existing IDs
        const existingIds = new Set(prevItems.map((item) => item.id));

        // Filter out new items that already exist in the state
        const uniqueNewItems = response.data.data.data.filter(
          (item) => !existingIds.has(item.id)
        );

        // Return the updated list with unique items
        return [...prevItems, ...uniqueNewItems];
      });

      setHasMore(response.data.data.nextPage);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const lastItemRef = (node) => {
    console.log("ref");
    console.log(observer);
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("IntersectionObserver entries:", entries);
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0, // Fully visible item
        horizontal: true,
      }
    );
    if (node) observer.current.observe(node);
  };

  return (
    <div className="cat-card-container d-flex overflow-auto py-3">
      {items.map((item, index) => {
        const isLastItem = items.length === index + 1;

        return (
          <CardListingCard
            catDt={item}
            ref={isLastItem ? lastItemRef : null}
            key={`${item.id}`}
          />
          // <div
          //   key={item.id}
          //   ref={index === items.length - 1 ? lastItemRef : null}
          //   style={{
          //     minWidth: "200px",
          //     marginRight: "10px",
          //     height: "200px",
          //     backgroundColor: "lightgray",
          //   }}
          // >
          //   {item.name}
          // </div>
        );
      })}

      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
};

export default CatsListing;
