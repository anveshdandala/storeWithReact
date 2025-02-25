import React from "react";
import CategoryCard from "./CategoryCard"; // Import CategoryCard component

const categories = [
  {
    id: 1,
    title: "Electronics",
    description: "Latest gadgets and electronic devices",
    imageUrl:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80",
    itemCount: 156,
  },
  {
    id: 2,
    title: "Fashion",
    description: "Trending clothing and accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    itemCount: 284,
  },
  {
    id: 3,
    title: "Home & Living",
    description: "Furniture and home decoration",
    imageUrl:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80",
    itemCount: 198,
  },
  {
    id: 4,
    title: "Sports",
    description: "Sports equipment and accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    itemCount: 167,
  },
];

function Categories() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="flex items-center">
          <h1 className="cat-h1">Categories</h1>
        </div>
      </header>

      <main className="cat-section">
        <div className="cat-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Categories;
