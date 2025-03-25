import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

interface ImageItem {
  original: string;
  thumbnail: string;
}

const images: ImageItem[] = [
  {
    original: "image-product-1.jpg",
    thumbnail: "image-product-1-thumbnail.jpg",
  },
  {
    original: "image-product-2.jpg",
    thumbnail: "image-product-2-thumbnail.jpg",
  },
  {
    original: "image-product-3.jpg",
    thumbnail: "image-product-3-thumbnail.jpg",
  },
  {
    original: "image-product-4.jpg",
    thumbnail: "image-product-4-thumbnail.jpg",
  },
];

const Images = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const setAsMainImage = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Desktop Layout */}
      <div className="hidden  md:flex flex-col items-center gap-4">
        <div className="w-full max-w-md">
          <img
            src={images[mainImageIndex].original}
            alt={`Main product image`}
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openModal(mainImageIndex)}
          />
        </div>

        <div className="flex gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 cursor-pointer rounded hover:opacity-80 ${
                  index === mainImageIndex
                    ? "ring-2 ring-orange-500 opacity-60"
                    : ""
                }`}
                onClick={() => setAsMainImage(index)}
              />
              {index === mainImageIndex && (
                <div className="absolute inset-0 bg-white bg-opacity-50 rounded"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - thumbnails*/}
      <div className="md:hidden flex flex-col gap-4">
        <div className="flex gap-2 overflow-x-auto py-2">
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 relative">
              <img
                src={img.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-12 h-12 cursor-pointer rounded hover:opacity-80 ${
                  index === mainImageIndex
                    ? "ring-2 ring-orange-500 opacity-60"
                    : ""
                }`}
                onClick={() => setAsMainImage(index)}
              />
              {index === mainImageIndex && (
                <div className="absolute inset-0 bg-white bg-opacity-50 rounded"></div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full">
          <img
            src={images[mainImageIndex].original}
            alt={`Main product image`}
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openModal(mainImageIndex)}
          />
        </div>
      </div>

      {/* Modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-[90%]">
            <button
              className="absolute top-2 right-2 !bg-gray-200 text-2xl rounded-full p-1 hover:bg-gray-300"
              onClick={closeModal}
            >
              <IoIosClose className="text-gray-500" />
            </button>

            <img
              src={images[currentIndex].original}
              alt={`Product ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-full rounded-lg"
            />

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 !bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={prevImage}
              >
                <FaArrowLeftLong className="text-gray-500" />
              </button>
              <button
                className="px-4 py-2 !bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={nextImage}
              >
                <FaArrowRightLong className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
