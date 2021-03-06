import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { func, number, bool } from "prop-types";
import { useTransition, animated } from "react-spring";
import { whiteBackground } from "../themes";
import Avatar from "../BaseComponents/Avatar";
import CustomizedButton from "../BaseComponents/CustomizedButton";
import UserName from "./UserName";
import Text from "../BaseComponents/Text";
import {
  hide,
  setHideTimerId as setHideTimer
} from "../actionCreators/userInfoPopover";
import { userType, positionType } from "../propTypes";

const Container = styled(animated.div)`
  ${whiteBackground}
  border-radius: 13px;
  padding: 13px;
  position: fixed;
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
  max-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const FollowingWrapper = styled.span`
  margin-right: 18px;
`;
const MarginTop = styled.div`
  margin-top: 9px;
`;
/**
 * +------------+-----------------------------------------------+
 * |            |                                follow button  |
 * |   avatar   |                                               |
 * |            |                                               |
 * +------------+-----------------------------------------------+
 * | name                                                       |
 * | screenName                                                 |
 * +------------------------------------------------------------+
 * |                                                            |
 * |                        description                         |
 * |                                                            |
 * +------------------------------------------------------------+
 * |  xxx人正在关注    xx个关注者                                  |
 * +------------------------------------------------------------+
 * |你关注的人中没有人关注 / xxx 关注了此账号                         |
 * +------------------------------------------------------------+
 * @param {} param0
 */
function UserInfoPopover({
  position,
  user,
  hideSelf,
  hideTimerId,
  setHideTimerId,
  show
}) {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const delay = 300;
  function handleMouseEnter() {
    if (hideTimerId) {
      clearTimeout(hideTimerId);
    }
  }
  function handleMouseLeave() {
    const timerId = setTimeout(() => {
      hideSelf();
    }, delay);
    setHideTimerId(timerId);
  }
  if (!position.left || !position.top) return null;
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Container
          key={key}
          style={props}
          left={position.left}
          top={position.top}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HeadWrapper>
            <Avatar user={user} />
            <CustomizedButton small>关注</CustomizedButton>
          </HeadWrapper>
          <MarginTop>
            <UserName user={user} isTwoLine hoverable={false} />
          </MarginTop>
          <MarginTop>
            <Text>{user.desc}</Text>
          </MarginTop>
          <MarginTop>
            <FollowingWrapper>
              <Text bold>{user.following}</Text>
              <Text secondary>正在关注</Text>
            </FollowingWrapper>
            <Text bold>{user.followers}</Text>
            <Text secondary>关注者</Text>
          </MarginTop>
          <MarginTop>
            <Text secondary>你关注的人中没有人关注</Text>
          </MarginTop>
        </Container>
      )
  );
}
UserInfoPopover.propTypes = {
  position: positionType.isRequired,
  user: userType,
  hideSelf: func.isRequired,
  hideTimerId: number,
  setHideTimerId: func.isRequired,
  show: bool.isRequired
};
UserInfoPopover.defaultProps = {
  user: null,
  hideTimerId: null
};
const mapStateToProps = state => ({
  position: state.userInfoPopover.position,
  user: state.userInfoPopover.user,
  hideTimerId: state.userInfoPopover.hideTimerId,
  show: state.userInfoPopover.show
});
const mapDispatchToProps = dispatch => ({
  hideSelf: () => dispatch(hide()),
  setHideTimerId: id => dispatch(setHideTimer(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPopover);
