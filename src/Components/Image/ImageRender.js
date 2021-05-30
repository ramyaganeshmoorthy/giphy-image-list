import React from "react";
import '../../Css/Image.css';

class ImageRender extends React.Component { 
 
  disp = () =>
    this.props.im.map((d) => {
      return (
        <div className="ui medium centered rounded image"  key={d.id}>
          <img src={d.images.downsized.url} alt={d.title} loading="lazy" />
        </div>
      );
    });



  render() {
    console.log(this.props.im);
    return (
        <div className="tile">
            {this.disp()}
        </div>
    );
  }
}

export default ImageRender;
