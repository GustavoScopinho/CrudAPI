import styled from 'styled-components'

export const ModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}

export const Modal = styled.div`
  .modal-overlay {
    width: 100%;
    height: 800px;
  }
`
export const ContainerModal = styled.div`
  width: 350px;
  height: 700px;
  background-color: #7c7c8a;
  box-shadow: 1px 1px 5px 1px #000;
  position: fixed;
  top: 3%;
  left: 38%;
  right: auto;
  border-radius: 20px;
  padding: 20px 30px;

  h2 {
    padding-top: 20px;
    text-align: center;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 350px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: flex;
    }

    label {
      color: #e1e1e6;
      font-weight: 600;
      padding-top: 10px;
    }

    select {
      width: 350px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  .button-add {
    background-color: rgb(124, 38, 248);
    border-radius: 5px;
    color: #fff;
    width: 220px;
    height: 42px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      scale: 1.02;
      transform: 2s;
    }
  }

  .ContainerBotao {
    display: flex;
    justify-content: end;
  }

  .buttonClose {
    cursor: pointer;

    :hover {
      scale: 1.1;
      transform: 2s;
    }
  }

  .submitContainer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
