import styled from 'styled-components'

export const ModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-end'
  }
}

export const Modal = styled.div`
  .modal-overlay {
    background-color: red;
    width: 100%;
    height: 800px;
  }
`
export const ContainerModal = styled.div`
  width: 400px;
  height: 700px;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50;
  border-radius: 20px;
  padding: 20px;

  h2 {
    padding-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 200px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: flex;
    }

    label {
      color: #007bff;
      font-weight: 600;
      padding-top: 10px;
    }

    select {
      width: 200px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  .button-add {
    background-color: #007bff;
    border-radius: 49px;
    color: #fff;
    width: 220px;
    height: 42px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
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
`
