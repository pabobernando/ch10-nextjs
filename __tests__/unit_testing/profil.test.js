import 'jsdom-global/register'; 
import React from 'react';
import {ProfileContainer as Profile} from '../../components/ProfileContainer'
import { mount,shallow} from 'enzyme';


import * as types from '../../store/actions/auth.action'

// describe('actions', () => {
//   it('render state AUTH_LOGIN', () => {
//     const props={
//         dispatch:jest.fn(),
        
//     }
//     const wrapper= shallow(<Profile {...props} />)
//     console.log(wrapper.debug())
//     // const text = 'AUTH_LOGIN'
//     // const expectedAction = {
//     //   type: types.AUTH_LOGIN,
//     //   text
//     // }
//     // expect(expectedAction).toEqual(expectedAction)
//   })
// })
describe('Profile testing',()=>{
    let wrapper;
    let props = {
        dispatch:jest.fn(),

    }
    beforeEach(() => {
        wrapper = mount(<Profile {...props} />)
    });    

// heading
 test('Render profil components',()=>{
    // console.log(wrapper.debug())
 });

});
