import React from 'react';

import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import ResetButton from './ResetButton';
import Content from './Content';

class MainApp extends React.Component{

    // Khai báo state để set lựa chọn mặc định cho app
    constructor(props){
        super(props)
        this.state={
            defaultColor: 'blue',
            defaultFontSize: 20,
        }
    }

    // Hàm quản lý chức năng thay đổi màu sắc chữ
    settingColorMainFunc = (x) => {
        this.setState({
            defaultColor: x,
        });
    }

    // Hàm quản lý chức năng tăng/ giảm cỡ chữ
    settingFontSizeMainFunc = (x) => {
        if (this.state.defaultFontSize + x >= 15 && this.state.defaultFontSize + x <= 100) {
            this.setState({
                defaultFontSize: this.state.defaultFontSize + x,
            });
        } else {
            this.setState({
                defaultFontSize: this.state.defaultFontSize + 0,
            });
        }
    }

    // Hàm quản lý chức năng reset button
    resetButtonMainFunc = (x) => {
        this.setState({
            defaultColor: 'blue',
            defaultFontSize: 20,
        });
    }

    render(){
        return(
            <div>
                <div className='main-setting-box'>
                    <ColorPicker
                        color={this.state.defaultColor}
                        settingColorMainFunc={this.settingColorMainFunc}
                    />

                    <SizeSetting
                        fontSize={this.state.defaultFontSize}
                        settingFontSizeMainFunc={this.settingFontSizeMainFunc}
                    />

                    <ResetButton 
                        resetButtonMainFunc={this.resetButtonMainFunc}
                    />

                </div>

                <Content
                    fontSize={this.state.defaultFontSize}
                    color={this.state.defaultColor}
                />
            </div>
        )
    }
}

export default MainApp;