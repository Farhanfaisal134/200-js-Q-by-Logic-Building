import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const newImages = Array.from({ length: 10 }, (_, index) => ({
      id: index + page * 10,
      url: `https://via.placeholder.com/300?text=Image+${index + page * 10}`,
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              loading="lazy"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center mt-4">
          <span className="text-blue-600">Loading more images...</span>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
