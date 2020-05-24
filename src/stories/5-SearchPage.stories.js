import React from 'react';
import SearchPage from '../pages/SearchPage';
import IndexPage from '../pages/IndexPage';

export default {
  title: 'Search Page',
  component: IndexPage,
};

export const Index = () => <IndexPage />

export const Search = () => <SearchPage />

