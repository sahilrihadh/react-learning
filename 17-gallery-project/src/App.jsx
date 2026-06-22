import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = 10; // Assuming 10 pages

  const getImages = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`,
      );
      setGallery(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderImages = () => {
    if (loading) return <h1 className="text-center">Loading images...</h1>;
    if (!gallery || gallery.length === 0) {
      return <h1 className="text-center">No images in list</h1>;
    }
    return gallery.map((elem, idx) => (
      <div key={elem.id || idx}>
        <img
          src={elem.download_url}
          className="w-50 h-50 rounded object-cover"
          alt={`Image ${idx + 1}`}
        />
      </div>
    ));
  };

  // Simple pagination: show all page numbers
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-2 border rounded ${
            page === i ? "bg-red-500 text-white" : "hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <div>
      <div className="img-galler py-10">
        <div className="img-list flex justify-center gap-5 flex-wrap">
          {renderImages()}
        </div>

        <div className="flex justify-center items-center mt-5 gap-2">
          <button
            className="bg-red-500 text-white rounded px-4 py-2 disabled:opacity-50"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          {renderPageNumbers()}

          <button
            className="bg-red-500 text-white rounded px-4 py-2 disabled:opacity-50"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
