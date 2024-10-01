import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import CustomerStories from "@/components/CustomerStories";
import Features from "@/components/Features";
import HomePage from "@/components/HomePage";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <HomePage />
      <Features />
      <Categories />
      <Benefits />
      <Products />
      <CustomerStories />
    </>
  );
}
