import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  width:700px;
  height:50px;
  background:#fff;
  border-radius:3px;
  padding:5px;

  @media (max-width: 768px) {
    width:100%;
  }

  button {
    outline:none;
    border:none;
    cursor: pointer;
    background:#fff;

  }

  span {
    padding:10px;
  }

`
export const Content = styled.div`
  flex:1;
  flex-direction:column;
  padding:5px;

  strong {
    color: ${({ primary }) => (primary ? '#da291c' : '#002846')};
    font-size: 12px;
    letter-spacing:${({ primary }) => (primary ? '2px' : '0')};
    font-weight: ${({ primary }) => (primary ? 'normal' : 'bold')};
    font-size: 13px;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    font-weight: normal;
    letter-spacing: 0.25px;
  }
`
export const WrapperIcon = styled.div`
margin:5px;
`
