import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { BackIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const Filling = styled.div`
  height: 49px;
`;
const Container = styled.div`
  padding: 0 9px;
  display: flex;
  height: 49px;
  align-Items: center;
  border-bottom: 1px solid rgb(101, 119, 134);
  background-color: rgb(255, 255, 255);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const BtnWrapper = styled.div`
  min-width: 37px;
  min-height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
`;

function BackHead({ history, title, subtitle }) {
  return (
    <React.Fragment>
      <Filling />
      <Container>
        <BtnWrapper aria-label="button" role="button" onClick={() => history.goBack()}>
          <BackIcon small primary />
        </BtnWrapper>
        <div>
          <Text large bold>{title}</Text>
          {subtitle
            && (
            <div>
              <Text small secondary color="secondary" size="small">{subtitle}</Text>
            </div>
            )
          }
        </div>
      </Container>
    </React.Fragment>
  );
}
BackHead.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
BackHead.defaultProps = {
  title: '',
  subtitle: '',
};

const BackHeadWithRouter = withRouter(BackHead);
export default BackHeadWithRouter;