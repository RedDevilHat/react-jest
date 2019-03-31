import React from 'react';
import {shallow} from "enzyme/build";
import {Counter} from "../index";

global.testRenderCounter = () => {
    it('render UI component', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper).toMatchSnapshot();
    });
};

global.testValidCounter = () => {
    it('render UI component with VALID data', () => {
        const wrapper = shallow(<Counter count={999999}/>);
        expect(wrapper).toMatchSnapshot();
    });
};

global.testUnvalidCounter = (data) => {
    it('render UI component with UNVALID data', () => {
        const wrapper = shallow(<Counter count={data}/>);
        expect(wrapper).toMatchSnapshot();
    })
};
