import { useState } from 'react';
import { Category } from '../../models/Category';

function Categories() {
  const categoryData: Category[] = [
    { id: 1, name: 'Music' },
    { id: 2, name: 'Movies' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Art' },
    { id: 5, name: 'Cars' },
  ];

  const [categories, setCategories] = useState<Category[]>(categoryData);
  return (
    <div>
      <ul className="list-of-categories">
        {categories.map((c) => (
          <li key={c.id} data-testid={'category' + c.id}>
            <h3>{c.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
