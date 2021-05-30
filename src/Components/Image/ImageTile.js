import React from 'react';


class ImageTile extends React.Component{
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
        this.state={
            spans:0
        }
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan=()=>{
        const height= this.imageRef.current.clientHeight;
        const span=Math.ceil(height/10)+1;
        console.log(span);
        this.setState({spans:span});

    }
    render(){
        const {images, title}=this.props.image;
        return(
            <div  className="content">
                <img style={{gridRowGap:`span ${this.state.spans}`}} ref={this.imageRef}
                src={images.downsized.url} 
                alt={title} 
                />
            </div>
            
        );
    }
}

export default ImageTile;