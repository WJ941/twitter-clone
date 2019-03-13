import { connect } from 'react-redux';
import UserSettingPopupPage from '../User/UserSettingPopupPage';
import { hide } from '../actionCreators/userSettingPopup';
import { show as showModal, setup as setupModal } from '../actionCreators/modal';

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(hide()),
  setModal: config => dispatch(setupModal(config)),
  showModal: () => dispatch(showModal()),
});
export default connect(
  null,
  mapDispatchToProps,
)(UserSettingPopupPage);
