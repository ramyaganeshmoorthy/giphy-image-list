import React from "react";
import '../../Css/Image.css';

class ImageRender extends React.Component { 
 
  disp = () =>
    this.props.im.map((d) => {
      return (
        <div key={d.id} className="card">
          <img src={d.images.downsized.url} alt={d.title} />
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
