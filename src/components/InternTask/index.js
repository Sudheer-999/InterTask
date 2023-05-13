import {Component} from 'react'
import {
  MainContainer,
  BoxCon,
  LeftButton,
  RightButton,
  UpButton,
  BottomButton,
  ButtonCon,
  Box,
} from './styledComponents'

class InternTask extends Component {
  state = {horizontal: 0, vertical: 0}

  onRight = () => {
    const {horizontal} = this.state
    if (horizontal < 500) {
      this.setState(prevState => ({horizontal: prevState.horizontal + 50}))
    }
  }

  onLeft = () => {
    const {horizontal} = this.state
    if (horizontal > 0) {
      this.setState(prevState => ({horizontal: prevState.horizontal - 50}))
    }
  }

  onTop = () => {
    const {vertical} = this.state
    if (vertical > 0) {
      this.setState(prevState => ({vertical: prevState.vertical - 50}))
    }
  }

  onBottom = () => {
    const {vertical} = this.state
    if (vertical < 500) {
      this.setState(prevState => ({vertical: prevState.vertical + 50}))
    }
  }

  render() {
    const {horizontal, vertical} = this.state

    const upDisable = vertical <= 0
    const bottomDisable = vertical >= 450
    const leftDisable = horizontal <= 0
    const rightDisable = horizontal >= 450

    console.log(horizontal)

    return (
      <MainContainer>
        <LeftButton
          dis={horizontal}
          disabled={leftDisable}
          onClick={this.onLeft}
        >
          Left
        </LeftButton>
        <ButtonCon>
          <UpButton dis={vertical} disabled={upDisable} onClick={this.onTop}>
            Up
          </UpButton>
          <BoxCon>
            <Box distance={horizontal} vdistance={vertical} className="box">
              {' '}
            </Box>
          </BoxCon>
          <BottomButton
            dis={vertical}
            disabled={bottomDisable}
            onClick={this.onBottom}
          >
            Bottom
          </BottomButton>
        </ButtonCon>
        <RightButton
          dis={horizontal}
          disabled={rightDisable}
          onClick={this.onRight}
        >
          Right
        </RightButton>
      </MainContainer>
    )
  }
}

export default InternTask
