import React from "react";

class ResetButton extends React.Component{

    // Hàm quản lý chức năng reset
    resetButtonFunc = () => {
        this.props.resetButtonMainFunc()
    }

    render(){
        return(
            <div >
                <button 
                    className='reset-button'
                    onClick={() => this.resetButtonFunc()}
                >
                            Reset
                </button>
            </div>
        )
    }
}
export default ResetButton;