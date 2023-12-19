import React from 'react';
import { productDetails } from "../data";
import '../../styles/productDetails/productDetails.css';
import FadeIn from '../animations/Fadein';

class ImgProduct extends React.Component {
  constructor(props) {
    super(props);

    const { img } = productDetails[0]; // Assuming there's only one product in productDetails

    this.state = {
      mainImageProduct: img[0], // Set the main image to the first image in the array
      images: img.slice(1), // Use the rest of the images for the thumbnails
    };
  }

  handleImageClick = (clickedImage) => {
    const updatedImages = [...this.state.images];

    const clickedImageIndex = updatedImages.indexOf(clickedImage);

    [updatedImages[clickedImageIndex], this.state.mainImageProduct] = [
      this.state.mainImageProduct,
      updatedImages[clickedImageIndex],
    ];

    this.setState({
      images: updatedImages,
    });
  };

  render() {
    return (
      <div className='flex flex-col w-full mr-[5%]'>
        <FadeIn delay={0.2} direction="down">
          <div className='mb-2 w-full'>
            <img
              className="h-auto w-full rounded-lg transition duration-300 transform hover:scale-105"
              src={this.state.mainImageProduct}
              alt="mainImageProduct"
            ></img>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div className='flex flex-row space-x-2 w-full'>
            {this.state.images.map((image, index) => (
              <div
                key={index}
                onClick={() => this.handleImageClick(image)}
                className="transition duration-300 transform hover:scale-105 max-w-[50%]"
              >
                <img
                  className="h-auto w-fullrounded-lg"
                  src={image}
                  alt={`imageProduct-${index + 2}`}
                ></img>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default ImgProduct;