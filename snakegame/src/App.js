import React, { Component } from 'react';
import Item from './components/item';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: this.getFoodPosition(),
      segments: [this.getFoodPosition()],
      speed: {
        x: 1,
        y: 0
      },
      direction: 'ArrowRight',
      forbidden_direction: 'ArrowLeft',
      buffered: null
    }

  }

  componentDidMount() {
    setInterval(() => {
      this.update();
    }, 300);
    document.addEventListener('keydown', this.keyPressEvent);
  }

  keyPressEvent = (event) => {
    let direction = event.key;
    let forbidden_direction = this.get_orbidden_direction(direction);

    if (direction !== this.state.direction && direction !== this.state.forbidden_direction) {
      this.setState(function (state, prop) {
        state.buffered = {
          direction: direction,
          speed: {
            x: direction === 'ArrowRight' ? 1 : direction === 'ArrowLeft' ? -1 : 0,
            y: direction === 'ArrowDown' ? 1 : direction === 'ArrowUp' ? -1 : 0,
          },
          forbidden_direction: forbidden_direction
        };
        return null;
      });
    }
  }

  endGame() {
    let head = this.state.segments[this.state.segments.length - 1];
    for (let i = 0; i < this.state.segments.length - 1; i++) {
      const element = this.state.segments[i];
      if (head.column === element.column && head.row === element.row) {
        return true;
      }
    }
    return false;
  }

  eat() {
    let head = this.state.segments[this.state.segments.length - 1];
    if (head.column === this.state.food.column && head.row === this.state.food.row)
      return true;
    return false;
  }

  get_orbidden_direction(direction) {
    switch (direction) {
      case 'ArrowRight':
        return 'ArrowLeft';
        break;
      case 'ArrowLeft':
        return 'ArrowRight';
        break;
      case 'ArrowUp':
        return 'ArrowDown';
        break;
      case 'ArrowDown':
        return 'ArrowUp';
        break;
      default:
        break;
    }
  }

  update() {
    if (this.state.buffered != null) {
      this.setState(function (state, props) {
        if (state.direction !== state.buffered.direction) {
          state.direction = state.buffered.direction;
          state.speed = state.buffered.speed;
          state.forbidden_direction = state.buffered.forbidden_direction;
        }
        return null;
      });
    }
    let segments = this.state.segments;
    let head = segments[segments.length - 1];
    let food = this.state.food;
    if (this.eat()) {
      segments.push(head);
      food = this.getFoodPosition();
    }
    segments.shift();
    segments.push(this.setOnBox({
      column: head.column + this.state.speed.x,
      row: head.row + this.state.speed.y
    }));

    if (this.endGame()) {
      segments = [segments[segments.length - 1]];
      food = this.getFoodPosition();
    }

    this.setState({
      segments: segments,
      food: food,
      buffered: null,
    });
  }

  setOnBox(cell) {
    if (cell.column > 19) {
      cell.column = 0;
    } else if (cell.column < 0) {
      cell.column = 19;
    }

    if (cell.row > 19) {
      cell.row = 0;
    } else if (cell.row < 0) {
      cell.row = 19;
    }

    return cell;
  }

  getFoodPosition() {
    return {
      column: Math.floor(Math.random() * 20),
      row: Math.floor(Math.random() * 20),
    }
  }

  render() {
    return (
      <div className="box">
        {this.draw()}
      </div>
    );
  }

  draw() {
    let items = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (j === this.state.food.column && i === this.state.food.row)
          items.push(<Item className='food'></Item>);
        else {
          items.push(<Item className='item'></Item>);
        }
      }
    }

    for (let i = 0; i < this.state.segments.length; i++) {
      let segment = this.state.segments[i];
      items[segment.row * 20 + segment.column] = <Item className='snake' />
    }

    return items;
  }
}

export default App;