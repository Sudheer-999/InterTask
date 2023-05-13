import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
export const LeftButton = styled.button`
  background-color: violet;
  height: 500px;
  width: 60px;
  margin-top: 60px;
  background-color: #b8eded;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
export const RightButton = styled.button`
  background-color: violet;
  height: 500px;
  width: 60px;
  margin-top: 60px;
  background-color: #b8eded;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const BottomButton = styled.button`
  background-color: violet;
  height: 60px;
  width: 500px;
  background-color: #b8eded;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const UpButton = styled.button`
  background-color: violet;
  height: 60px;
  width: 500px;
  background-color: #b8eded;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const BoxCon = styled.div`
  height: 500px;
  width: 500px;
  position: relative;
`

export const Box = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: #b5dc36;
  left: ${props => (props.distance < 500 ? `${props.distance}px` : '350px')};
  right: ${props => (props.distance > 0 ? `${props.distance}px` : '350px')};
  bottom: ${props => (props.vdistance > 0 ? `${props.vdistance}px` : '350px')};
  top: ${props => (props.vdistance < 500 ? `${props.vdistance}px` : '350px')};
`
export const ButtonCon = styled.div`
  display: flex;
  flex-direction: column;
`
