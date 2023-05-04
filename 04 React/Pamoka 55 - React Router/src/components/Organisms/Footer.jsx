import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid black;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Me is footer... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro alias, inventore similique quos non asperiores. Nobis quae quaerat rerum saepe!
      </p>
    </StyledFooter>
  );
}
 
export default Footer;