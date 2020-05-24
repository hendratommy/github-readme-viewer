import React from 'react';
import Markdown from '../components/Markdown';

export default {
  title: 'Markdown',
  component: Markdown,
};

export const MarkdownStory = () => <Markdown>{
  `# H1
  ## H2
  ### H3`
  }
  </Markdown>
MarkdownStory.story = {
  name: 'Markdown'
};

