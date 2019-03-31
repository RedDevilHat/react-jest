import React from 'react';
import {shallow} from "enzyme/build";
import {Title} from "../index";

global.testRenderTitle = () => {
    it('render UI component', () => {
        const wrapper = shallow(<Title />);
        expect(wrapper).toMatchSnapshot();
    });
};


