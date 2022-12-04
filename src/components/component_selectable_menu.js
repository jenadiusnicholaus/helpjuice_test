import React from 'react';
import {matchSorter} from 'match-sorter'
import { allowedTags, MENU_HEIGHT } from '../app_data/data_selectable_block_type.js'
import '../styles/selectable_menu.css'


class ComponentSelectableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.state = {
      command: "",
      items: allowedTags,
      selectedItem: 0
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const command = this.state.command;
    if (prevState.command !== command) {
      const items = matchSorter(allowedTags, command, { keys: ["tag"] });
      this.setState({ items: items });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler(e) {
    const items = this.state.items;
    const selected = this.state.selectedItem;
    const command = this.state.command;

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        this.props.onSelect(items[selected].tag);
        break;
  
      default:
        this.setState({ command: command + e.key });
        break;
    }
  }

  render() {
    const x = this.props.position.x;
    const y = this.props.position.y - MENU_HEIGHT;
    const positionAttributes = { top: y, left: x };

    return (
      <div className="SelectMenu" style={positionAttributes}>
        
        <div className="Items">
           <div className='SeletableItemHeader'>
                  <h4>Add block</h4>
                  <p>Type /1 to filter a Block-Type you want to use</p>
                </div>
          {this.state.items.map((item, key) => {
            const selectedItem = this.state.selectedItem;
            const isSelected = this.state.items.indexOf(item) === selectedItem;
            return (
              <div
                id='item-content-container'
                className={isSelected ? "Selected" : null}
                key={key}
                role="button"
                tabIndex="0"
                onClick={() => this.props.onSelect(item.tag)}
              > 
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-fonts" viewBox="0 0 16 16">
                  <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
                </svg>
                <div className="Item-text">
                  <p>{item.label}</p>
                  <small>{item.instructions}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ComponentSelectableMenu;