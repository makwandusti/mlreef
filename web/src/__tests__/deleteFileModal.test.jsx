import React from 'react';
import { shallow } from 'enzyme';
import DeleteFileModal from '../components/delete-file-modal/deleteFileModal';
import 'babel-polyfill';

const setup = (isModalVisible) => shallow(
  <DeleteFileModal
    projectId="12395599"
    filepath=".gitignore"
    isModalVisible={isModalVisible}
    fileName=".gitignore"
    branches={['master', 'test-br-1', 'test-br-2']}
    showDeleteModal={() => {}}
    branchSelected="master"
  />,
);

// in quarentine since since modals render but not display.
// test('assert that modal does not render when isModalVisible is false', () => {
//   const wrapper = setup(false);
//   expect(wrapper.isEmptyRender()).toBe(true);
// });
describe('test that initial elements render', () => {
  test('assert that title contains file name', () => {
    const wrapper = setup(true);
    expect(
      wrapper.find('.modal-header').text()
        .includes('.gitignore'),
    ).toBe(true);
  });
  test('assert that modal contains a text area to add a message', () => {
    const wrapper = setup(true);
    expect(wrapper.find('#commit-message')).toHaveLength(1);
  });
  /*
  test('assert that modal contains a menu to select the branch', () => {
    const wrapper = setup(true);
     TODO: Fix this
    expect(wrapper.find('CustomizedMenus')).toHaveLength(1); 
  });
   */
});
