import React from 'react';
import TestingComponent from "./TestingComponent";

var axios = {
    get: function(url) {
        return {
            name: "mayank",
            age: 40
        }
    }
}

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it("Should Render Component", () => {
    var testElement = shallow(<TestingComponent name="Anshul"></TestingComponent>);
    expect(testElement.find("#sampleComponent").length).toBe(1)
})

it("Should Render Component Div", () => {
    var testElement = shallow(<TestingComponent name="Anshul"></TestingComponent>);
    expect(testElement.find("div").length).toBe(1)
})

it("Should Render Props Correctly", () => {
    var testElement = shallow(<TestingComponent name="Anshul"></TestingComponent>);
    expect(testElement.find("h2").length).toBe(1)
    expect(testElement.find("h2").at(0).text()).toBe("Hello Anshul")
})

it("Should Render State Correctly", () => {
    var testElement = shallow(<TestingComponent name="Anshul"></TestingComponent>);

    var testElementClassData = testElement.find(".userName");
    expect(testElementClassData.length).toBe(1)
    expect(testElementClassData.at(0).text()).toBe("Mayank")
})


it("Should Render State Correctly after Click", () => {
    var testElement = shallow(<TestingComponent name="Anshul"></TestingComponent>);

    var clickButton = testElement.find("#updateNameButton");
    clickButton.simulate("click")
    var testElementClassData = testElement.find(".userName");
    expect(testElementClassData.length).toBe(1)
    expect(testElementClassData.at(0).text()).toBe("Anshul..")
})

