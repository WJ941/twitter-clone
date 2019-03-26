import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Text from '../BaseComponents/Text';
import TextInput from './TextInput';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import LayOut from './LayOut';
import { setPhone as setPhoneActionCreator } from '../actionCreators/currentUser';

function Warning({ validate }) {
  return (
    <div>
      {
        !validate
        && <Text small warning>请输入一个有效的电话号码</Text>
      }
    </div>
  );
}
Warning.propTypes = {
  validate: PropTypes.bool.isRequired,
};

function isPhone(value) {
  const reg = /^[+86]?[\b]*[0-9]{11}$/;
  return reg.test(value);
}

function Phone({ phone, setPhone, history }) {
  const [newPhone, setNewPhone] = useState(0);
  function handleChange(e) {
    setNewPhone(e.target.value);
  }
  function handleSave() {
    setPhone(newPhone);
    history.goBack();
  }
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改手机" />}
      rightAside={(
        <>
          <TextInput
            labelText="现用"
            value={phone}
            readOnly
            onChange={null}
          />
          <TextInput
            labelText="新"
            value={newPhone}
            onChange={handleChange}
            autoFocus
            WarningLabel={() => <Warning validate={isPhone(newPhone)} />}
          />
          <PrimaryGap />
          <div style={{ padding: '9px', backgroundColor: 'white' }}>
            <Text secondary>
            我们将发送验证码到此手机号，可能收取标准短信费用。
            其他人将能够通过你的电子邮件地址或手机号码找到你。你可以随时更改这些设置。
            </Text>
          </div>
          <PrimaryGap />
          <div style={{ padding: '14px 9px', backgroundColor: 'white', textAlign: 'center' }}>
            <Text warning>
              删除手机号码
            </Text>
          </div>
          <PrimaryGap />
          <div style={{
            display: 'flex', justifyContent: 'flex-end', padding: '9px', backgroundColor: 'white',
          }}
          >
            <CustomizedButton
              filled
              onClick={handleSave}
              disabled={
                newPhone === phone
                || !isPhone(newPhone)
              }
            >
              保存
            </CustomizedButton>
          </div>
        </>
      )}
    />
  );
}
Phone.propTypes = {
  phone: PropTypes.number.isRequired,
  setPhone: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

const mapStateToProps = state => ({
  phone: state.currentUser && state.currentUser.phone,
});
const mapDispathToProps = dispatch => ({
  setPhone: phone => dispatch(setPhoneActionCreator(phone)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Phone);
