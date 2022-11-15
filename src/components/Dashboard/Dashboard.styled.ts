import styled from 'styled-components'

export const ContainerDashboard = styled.div`
  width: 100%;
  background: #ccc;
  height: 100%;

  .container-logo {
    padding: 10px 20px;
  }
`

export const ContainerTitulo = styled.div`
  color: #494949;
  font-weight: 500;
  padding: 30px 0px 0px 20px;
`

export const ContainerUsuarios = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .ContainerMenorUsuarios {
    width: 90%;
    height: 100%;
    padding-bottom: 10px;
    background-color: #fffdfd;
    border-radius: 12px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  }

  .FirstContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 74px;
    padding: 0px 20px;
    border-radius: 12px 12px 0px 0px;

    h2 {
      font-weight: 600;
    }

    button {
      background-color: #007bff;
      border-radius: 49px;
      color: #fff;
      width: 220px;
      height: 42px;
      border: none;
      cursor: pointer;

      :hover {
        scale: 1.01;
        transform: 2s;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: #2a3042;
      color: #fff;
      height: 54.3px;
      width: 11%;
    }

    td {
      border-bottom: 1px solid #e1e0e2;
      text-align: center;
      height: 65px;
      font-weight: 600;

      button {
        width: 39.27px;
        height: 27.15px;
        border: none;
        background-color: #007bff;
        border-radius: 35px;
        cursor: pointer;
      }
    }

    .container-botao {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }
`
