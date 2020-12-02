import React from 'react'
import Konami from 'react-konami-code';
import { getRandom, dayHelper } from '../helpers/constants'
export default class Widget extends React.Component {
  /**
   * Set default state element based on props
   * @param {any} props
   */
  constructor(props) {
    super(props)

    this.state = {
      timezone: this.props.now.timezone,
      reason: getRandom(this.getReasons()),
      tryAgainText: 'Chora pra São Pedro de novo!',
      rageClickCount: 0,
    }
  }

  /**
   * On props change update state
   * @param {any} nextProps
   * @return void
   */
  componentDidUpdate(nextProps) {
    if (nextProps.now.timezone !== this.state.timezone) {
      this.setState({
        timezone: nextProps.now.timezone,
        reason: getRandom(this.getReasons())
      })
    }
  }

  /**
   * Get reasons according to current time
   * @return string[]
   */
  getReasons() {
    return dayHelper(this.props.now)
  }

  /**
   * On click reload reasons
   * @return void
   */
  easterEgg = () => {
    this.setState({ tryAgainText: '💁‍♀️ Apela pra Amanda!' })
  }

  /**
   * On click reload reasons
   * @return void
   */
  onClick = () => {
    let reasons = this.getReasons()
    this.setState({ reason: getRandom(reasons) })
  }

  /**
   * On click easter egg
   * @return void
   */
  onHiddenClick = () => {
    const currentCount = this.state.rageClickCount;
    
    if (currentCount > 5) {
      this.easterEgg();
    }
    this.setState({ rageClickCount: currentCount + 1 });
  }

  /**
   * Render widget
   * @return JSX.Element
   */
  render() {
    console.log('texto', this.state.tryAgainText)
    return (
      <div className="item">
        <button type="button" id="hidden-button" onClick={this.onHiddenClick}>
          <h3 className="tagline">Vai dar praia?</h3>
        </button>
        <h2 id="text">{this.state.reason}</h2>
        <Konami action={this.easterEgg}>
          <div />
        </Konami>
        <button type="button" id="reload" onClick={this.onClick}>
          {this.state.tryAgainText}
        </button>
      </div>
    )
  }
}
