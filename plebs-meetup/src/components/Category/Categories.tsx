import { useEffect, useState } from 'react';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import styled from 'styled-components';
import device from '../../styles/mediaqueries';
import { nanoid } from 'nanoid';
import Events from '../Events/Events';
import { motion } from 'framer-motion';

const Container = styled.div``;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
`;
const categoryData: Category[] = [
  {
    id: 1,
    name: 'Music',
    img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 2,
    name: 'Movies',
    img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 3,
    name: 'Gaming',
    img: 'https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80',
  },
  {
    id: 4,
    name: 'Art',
    img: 'https://images.unsplash.com/photo-1568438397894-72318e6f8674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 5,
    name: 'Cars',
    img: 'https://images.unsplash.com/photo-1576709350718-7df53805fd9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];

const CategoriesUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-top: 3em;
  border-radius: 7px;
  flex-wrap: wrap;
  width: 100%;
  gap: 7%;

  @media${device.tablet} {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin-top: 3em;
    border-radius: 7px;
    flex-wrap: wrap;
    width: 100%;
    gap: 7%;
  }
`;

const CategoriesLI = styled(motion.li)``;

const CategoryDiv = styled.div`
  /* display: flex;
    justify-content: center;
    flex-wrap:wrap;
    flex-direction:row; */
  background-color: white;
  border-radius: 8px;

  margin-top: 1.2em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const CategoryImage = styled.img`
  object-fit: cover;
  width: 140px;
  height: 100px;
  border-radius: 8px;
`;

const ListParagraph = styled.p`
  font-weight: 600;
  padding: 0.8em 1em;
  margin: 0;
  font-size: 15px;
`;
function Categories() {
  useEffect(() => {
    if (localStorage.getItem('User')) {
      return;
    } else {
      const User: User = {
        id: nanoid(),
        name: nanoid(),
        favorite: undefined,
        event: undefined,
      };
      localStorage.setItem('User', JSON.stringify(User));
    }
  }, []);

  const [categories, setCategories] = useState<Category[]>(categoryData);
  const [favorite, setFavorite] = useState<string>('');

  function setLocalStore(cName: string) {
    let fetchedUser = JSON.parse(localStorage.getItem('User')!);

    fetchedUser.favorite = cName;
    localStorage.setItem('User', JSON.stringify(fetchedUser));
    setFavorite(cName);
  }
  return (
    <Container>
      <CategoriesUL>
        {categories.map((c) => (
          <CategoriesLI
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            key={c.id}
            data-testid={'category'}
          >
            <CategoryDiv onClick={() => setLocalStore(c.name)}>
              <CategoryImage src={c.img} />
              <ListParagraph>{c.name.toUpperCase()}</ListParagraph>
            </CategoryDiv>
          </CategoriesLI>
        ))}
      </CategoriesUL>
      <Events favorite={favorite} />
    </Container>
  );
}

export default Categories;
