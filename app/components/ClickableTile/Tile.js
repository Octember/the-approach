import styled from 'styled-components';

const Tile = styled.li`
  display: inline-block;
  margin: 0 0 15px 15px;
  background-image: url(${props => props.background});
  @include box-shadow(2px 2px 3px rgba(0, 0, 0, 0.4), -2px -2px 3px 0 rgba(0, 0, 0, 0.7) inset);
  width: 300px;
  height: 200px;

`;

export default Tile;
