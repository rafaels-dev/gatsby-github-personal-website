import React from 'react';
import renderer from 'react-test-renderer';

import TopicCard from '../topicCard.js';

describe('TopicCard', () => {
    it('Renders correctly', () => {
        const topic = {
            description: 'My Description 2'
        };
        const tree = renderer
            .create(<TopicCard topic={topic} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});