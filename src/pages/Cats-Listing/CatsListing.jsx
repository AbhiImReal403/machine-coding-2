import { useState, useEffect, useRef } from "react";
import useAxios from "../../services/api";
import { CardListingCard } from "../../components";

import chaiAurCode from "../../assets/icons/chai_aur_code.svg";

import catError from "../../assets/images/cat_404.svg";

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
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const lastItemRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log("IntersectionObserver entries:", entries);
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
    <div className="cat-listing-container">
      <div className="page-header">Cats around us</div>

      <div className="content text-center">
        <div className="cat-card-container py-3">
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

          {loading && (
            <div className="card cat-card loading">
              <div
                className="card-img-top align-items-center d-flex justify-content-center"
                alt="..."
              >
                <div
                  className="spinner-border"
                  role="status"
                  style={{ color: "#1C9BEF" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          )}
          {!hasMore && (
            <div className="card cat-card">
              <img className="card-img-top" alt="..." src={catError} />
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{ background: "filter: blur(2px)" }}
              >
                <h1 style={{ fontSize: "1.5rem" }}>
                  {
                    "We've checked every corner of the internet, but it seems like we've run out of cats! 😿 The Cat HQ is taking a nap, so come back later for more feline goodness."
                  }
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="position-fixed top-0 end-0 mb-3 me-3">
        <img
          src={chaiAurCode}
          width={77}
          height={80}
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://chaicode.com/",
              "_blank",
              "rel=noopener noreferrer"
            );
          }}
        />
      </div>
    </div>
  );
};

export default CatsListing;
