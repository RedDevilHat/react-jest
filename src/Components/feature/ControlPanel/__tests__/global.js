import React from 'react';
import {shallow} from "enzyme/build";
import {ControlPanel} from "../index";
import {Counter} from "../../Counter";

global.testRenderControlPanel = () => {
    it('render UI component', () => {
        const wrapper = shallow(<ControlPanel />);
        expect(wrapper).toMatchSnapshot();
    });
};

global.testValidControlPanel = () => {
    it('render UI component with VALID data', () => {
        const wrapper = shallow(<ControlPanel />);
        expect(wrapper).toMatchSnapshot();
    });
};

global.testUnvalidDecrementControlPanel = (data) => {
    it('render UI component with UNVALID data', () => {
        const wrapper = shallow(<ControlPanel decrement={data}/>);
        expect(wrapper).toMatchSnapshot();
    })
};

global.testUnvalidIncrementControlPanel = (data) => {
    it('render UI component with UNVALID data', () => {
        const wrapper = shallow(<ControlPanel increment={data}/>);
        expect(wrapper).toMatchSnapshot();
    })
};
