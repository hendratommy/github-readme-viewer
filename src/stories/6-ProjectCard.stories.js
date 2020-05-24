import React from 'react';
import ProjectCard from '../component/ProjectCard';

export default {
  title: 'Project Card',
  component: ProjectCard,
};

export const ProjectCardStory = () => <ProjectCard name="Project 1" action={() => alert('hello')} />
ProjectCard.story = {
  name: 'ProjectCard'
};

