import React from 'react';
import CompactSearchBox from '../component/CompactSearchBox';

export default {
  title: 'Compact Search Box',
  component: CompactSearchBox,
};

export const CompactSearchBoxStory = () => <CompactSearchBox />;
CompactSearchBoxStory.story = {
  name: 'CompactSearchBox'
};

export const withDefaultValue = () => <CompactSearchBox value="hendratommy" />
