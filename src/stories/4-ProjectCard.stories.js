import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Project Card',
  component: ProjectCard,
};

export const ProjectCardStory = () => <MemoryRouter initialEntries={['/']}><ProjectCard name="Project 1" action={() => alert('hello')} /></MemoryRouter>
ProjectCard.story = {
  name: 'ProjectCard'
};

