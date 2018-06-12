import * as React from 'react';
import { buttonColor, Button, InputButton, ButtonBaseProps } from '../Button';

import { CodeDisplay } from './CodeDisplay';

const _buttonColors: buttonColor[] = [
  'primary1',
  'primary2',
  'secondary1',
  'secondary2',
  'load-more',
  'tertiary'
];

const _ghostableColors = new Set(['primary1', 'primary2']);
const _buttonWidths: Array<null | 'wide' | 'x-wide' | 'fit-width'> = [
  null,
  'wide',
  'x-wide',
  'fit-width'
];

interface PlaygroundState extends ButtonBaseProps {
  children: string;
  fontSize: number;
}

export class ButtonPlayground extends React.Component<any, PlaygroundState> {
  state: PlaygroundState = {
    children: 'Add to Cart',
    fontSize: 16
  };
  render() {
    return (
      <div className="app">
        <div className="top-wrapper">
          <div className="button-container">
            <div style={{ fontSize: `${this.state.fontSize}px` }}>
              <Button {...this.state} />
            </div>
            <CodeDisplay {...this.state} />
          </div>
        </div>
        <div className="other-container">
          <div className="form-row">
            <label>
              Button Text
              <input
                name="children"
                value={this.state.children}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Font Size
              <input
                name="fontSize"
                type="number"
                value={this.state.fontSize}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="form-row">
            {_buttonColors.map(colorName => (
              <InputButton
                color={colorName}
                value={colorName}
                key={colorName}
                onClick={this.setColor}
                ghost={_ghostableColors.has(colorName) && this.state.ghost}
              />
            ))}
          </div>

          <div className="form-row">
            <InputButton
              value="ghost"
              ghost={
                this.state.color &&
                _ghostableColors.has(this.state.color) &&
                !this.state.ghost
              }
              onClick={this.toggleGhost}
              color={this.state.color}
              disabled={
                this.state.color && !_ghostableColors.has(this.state.color)
              }
            />
          </div>
          <div className="form-row">
            <InputButton
              value="small"
              small
              onClick={this.setSmall}
              color={this.state.color}
            />
          </div>
          <div className="form-row">
            {_buttonWidths.map((width, i) => {
              return (
                width && (
                  <InputButton
                    width={width}
                    value={width}
                    key={i}
                    onClick={this.setWidth}
                    color={this.state.color}
                  />
                )
              );
            })}
          </div>
          <div className="form-row">
            <InputButton
              value="large"
              large
              onClick={this.setWidth}
              color={this.state.color}
            />
          </div>
        </div>
      </div>
    );
  }

  setColor = event => {
    const newColor = event.target.value;
    const color = newColor === this.state.color ? null : newColor;
    const ghost = _ghostableColors.has(color) && this.state.ghost;
    this.setState({ color, ghost });
  };

  setSmall = () => {
    this.setState(prevState => {
      const small = !prevState.small;
      return {
        small,
        width: null,
        large: false
      };
    });
  };
  setWidth = event => {
    const newWidth = event.target.value;
    const width = newWidth === this.state.width ? null : newWidth;
    this.setState({
      width,
      small: false
    });
  };

  setLarge = () => {
    this.setState(prevState => ({
      large: !prevState.large,
      small: false
    }));
  };

  toggleGhost = () => {
    if (this.state.color && _ghostableColors.has(this.state.color)) {
      this.setState(prevState => ({ ghost: !prevState.ghost }));
    }
  };

  handleInputChange = event =>
    this.setState(
      () =>
        ({ [event.target.name]: event.target.value } as Pick<
          PlaygroundState,
          'children' | 'fontSize'
        >)
    );
}
