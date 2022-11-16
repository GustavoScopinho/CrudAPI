import styled from 'styled-components'

export const ContainerDashboard = styled.div`
  width: 100%;
  background: #202024;
  min-height: 100vh;
  padding-bottom: 50px;

  .container-logo {
    padding: 10px 20px;
  }
  .iconMenu {
    color: #fff;
  }
`

export const ContainerTitulo = styled.div`
  color: #e1e1e6;
  font-weight: 500;
  padding: 30px 0px 0px 20px;
`

export const ContainerUsuarios = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .ContainerSearch {
    display: flex;
    align-items: center;

    input {
      width: 300px;
      height: 30px;
      border-radius: 5px;
      border: none;
    }
    .IconSearch {
      color: #fff;
      padding-left: 5px;
    }
  }

  h3 {
    color: #c4c4cc;
  }

  .ContainerMenorUsuarios {
    width: 90%;
    height: 100%;
    padding-bottom: 10px;
    background-color: #323238;
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
      background-color: rgb(124, 38, 248);
      border-radius: 5px;
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
    /* rgb(124, 38, 248) */
    th {
      background-color: #9f82d8;
      color: #fff;
      height: 54.3px;
      width: 11%;
    }

    td {
      border-bottom: 1px solid #7c7c9a;
      text-align: center;
      height: 65px;
      font-weight: 600;
      color: #c4c4cc;

      button {
        width: 39.27px;
        height: 27.15px;
        background: #323238;
        border: 1px solid rgb(124, 38, 248);
        border-radius: 5px;
        cursor: pointer;

        :hover {
          scale: 1.05;
          transform: 2s;
        }
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
