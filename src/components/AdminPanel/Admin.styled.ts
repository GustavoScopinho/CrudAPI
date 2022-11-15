import styled from 'styled-components'

export const ContainerAdmin = styled.div`
  background-color: #2a3042;
  height: 100vh;
  width: 287px;
`

export const ContainerLogo = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  h5 {
    color: #fff;
  }
`

export const ContainerMenu = styled.div`
  color: #c3c0c0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px 0px 25px;

  p {
    padding-bottom: 8px;
    display: flex;
    align-items: center;

    :nth-child(2) i > img {
      padding-right: 10px;
    }
    :nth-child(3) i > img {
      padding-right: 4px;
    }
  }
`
