import React from "react";

class Content extends React.Component{

    constructor(props){
        super(props)
        this.state={
            valueInput: "",
        }
    }

    // Hàm quản lý chức năng thay đổi màu, cỡ chữ
    settingColorFunc00 = () => {
        return{
            color: this.props.color,
            fontSize: this.props.fontSize,
        }
    }

    // Hàm quản lý input
    inputValueFunc = (e) => {
        this.setState({
            valueInput: e.target.value,
        });
    }

    // Hàm quản lý chức năng clear
    clearContentButtonFunc = () => {
        this.setState({
            valueInput: "",
        });
    }

    render(){
        return(
                <div className='content-box'>
                    <p className='content-box-color-title'>Color: {this.props.color}</p>
                    <p className='content-box-font-size-title'>Font-size: {this.props.fontSize} px</p>

                    <button
                        className="clear-content-button"
                        onClick={this.clearContentButtonFunc}
                    >
                        Clear Content!
                    </button>

                    <div className='content-box-input'>
                        <input  
                                onChange={this.inputValueFunc}
                                value={this.state.valueInput}
                                style={this.settingColorFunc00()}
                        />

                    </div>
                </div>
        )
    }
}
export default Content;