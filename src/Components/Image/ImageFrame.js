import React from "react";
import axios from "axios";
import ImageRender from "./ImageRender";


class ImageFrame extends React.Component {
    state = {
        details: [],
        path:''
      };

    componentDidMount() {
        axios
          .get("https://api.giphy.com/v1/gifs/trending", {
            params: {
              api_key: "o2Fjl0U28LlsHMJYYIBE58YSGSNXo8h1",
              limit: 10,
            },
          })
          .then((response) => {
            this.setState({ details: response.data.data });
          });
      }

  render() {
    return (
       <ImageRender im={this.state.details} getSrc={this.handleClick}/>
    );
  }
}

export default ImageFrame;
