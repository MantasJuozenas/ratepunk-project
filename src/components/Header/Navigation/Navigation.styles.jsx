import styled from 'styled-components';

const HeadingComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 425px) {
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  }
`;

const MobileFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media screen and (min-width: 425px) {
    width: 100%;
  }
`;

export default HeadingComponent;

export { MobileFlex };
