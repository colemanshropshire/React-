import React, { Component } from "react";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "",
      postion: "",
      url: "",
      thumb_image_url: "",
      banner_image_url: "",
      logo_url: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handleChange", event);
  }

  render() {
    return (
      <div>
        <h1>PortfolioForm</h1>
        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.postion}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
