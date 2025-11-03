import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-[#676f58]">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="mb-4 text-lg text-[#676f58]">
        Welcome to PetCareShop! We are passionate about providing the best products and services for your beloved pets. Our mission is to make pet care easy, affordable, and enjoyable for everyone.
      </p>
      <p className="mb-4 text-lg text-[#676f58]">
        Founded by animal lovers, our shop offers a wide range of high-quality pet products, from nutritious food to fun toys and essential accessories. We believe every pet deserves the best, and we are committed to helping you give your furry friends a happy and healthy life.
      </p>
      <p className="mb-4 text-lg text-[#676f58]">
        Thank you for choosing PetCareShop. We look forward to serving you and your pets!
      </p>
      <div className="mt-8 mb-[2.7em] text-center">
        <span className="text-xl  font-semibold">Contact us:</span>
        <div className="mt-2">
          <a href="mailto:info@petcareshop.com" className="text-blue-600 hover:underline">info@petcareshop.com</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 