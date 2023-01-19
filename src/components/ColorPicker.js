import React from "react";

class ColorPicker extends React.Component{

    constructor(props){
        super(props)
        this.state={
            colorsArray: ['blue', 'green', 'yellow', 'orange', 'pink', 'gray', 'red', 'black', 'brown', 'purple'],
        };
    }

    // Hàm quản lý chức năng màu sắc mặc định
    setColorsList = (x) => {
        return{
            backgroundColor: x
        };
    }

    // Hàm quản lý chức năng thay đổi màu sắc chữ
    settingColorFunc = (x) => {
        this.props.settingColorMainFunc(x)
    }

    render(){
        return(
            <div className='color-picker-box'>
                <p className='color-picker-box-title'>Text Color Picker: {this.props.color}</p>
                        
                <div className='colors-list-box'>
                    {this.state.colorsArray.map((singleColor, index) => {
                        return  <span 
                                    key={index}
                                    style={this.setColorsList(singleColor)}
                                    className={this.props.color === singleColor? 'chosen-color' : ''}
                                    onClick={() => this.settingColorFunc(singleColor)}
                                >

                                </span>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ColorPicker;