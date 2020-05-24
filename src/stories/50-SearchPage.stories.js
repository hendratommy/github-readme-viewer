import React from 'react';
import SearchPage from '../pages/SearchPage';
import IndexPage from '../pages/IndexPage';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Search Page',
  component: IndexPage,
};

export const Index = () => <IndexPage />

export const Search = () => <MemoryRouter initialEntries={['/']}><SearchPage /></MemoryRouter>

