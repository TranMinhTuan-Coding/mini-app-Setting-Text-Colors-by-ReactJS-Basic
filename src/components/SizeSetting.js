import React from "react";

class SizeSetting extends React.Component{

    // Hàm quản lý chức năng tăng/ giảm cỡ chữ
    settingFontSizeFunc = (x) => {
        this.props.settingFontSizeMainFunc(x)
    }

    render(){
        return(
            <div className='size-setting-box'>
                <p className='size-setting-box-title'>Size: {this.props.fontSize} px</p>

                <div className='size-setting-box-buttons'>
                    <button
                        // Thiếu () => : lỗi chương trình luôn !
                        onClick={() => this.settingFontSizeFunc(1)}
                    >Up</button>
                    <button
                        onClick={() => this.settingFontSizeFunc(-1)}
                    >Down</button>
                </div>
            </div>
        )
    }
}
export default SizeSetting;