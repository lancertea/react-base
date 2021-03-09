import styled from 'styled-components';
export const HomeWrapper = styled.div`
  color: purple;

  h2 {
    font-size: 50px;
  }

  ul > li {
    color: orange;

    &.active {
      color: red;
    }

    &:hover {
      background: #aaa;
    }

    &::after {
      content: 'abc';
    }
  }
`;
