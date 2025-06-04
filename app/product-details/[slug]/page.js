// import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";
// import { reletedProductSlider } from "@/sliderProps";
// import Link from "next/link";
// import { Nav, Tab } from "react-bootstrap";
// import Slider from "react-slick";
// import { useEffect, useState } from "react";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { services } from "@/services";

export async function generateStaticParams() {
  return services.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const item = services.find((item) => item.slug === slug);

  return {
    title: item?.name || 'Product Details',
    description: item?.detail || 'Product details page',
    openGraph: {
      title: item?.name || 'Product Details',
      description: item?.detail || 'Product details page',
      images: [item?.image || ''],
      url: `https://shapingteam.com/product/${slug}`,
      type: 'website',
    },
  };
}

const ProductDetails = ({ params }) => {
  const { slug } = params;
  const item = services.find((item) => item.slug === slug);

  return (
    <Layout>
      <ProductDetailsClient item={item} />
    </Layout>
  );
};
export default ProductDetails;
