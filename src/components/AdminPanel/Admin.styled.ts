import styled from 'styled-components'

export const ContainerAdmin = styled.div`
  background-color: #121214;
  height: 100%;
  width: 287px;
`

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

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
    cursor: pointer;
  }

  .iconSearch,
  .iconPeople {
    margin-right: 10px;
    cursor: pointer;
  }
`
