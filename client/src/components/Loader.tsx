import React from "react";
type Props = {
    loading: boolean
}
const defaultProps = {
    loading: false
}
const Loader = (props: Props) => {
    if (props.loading) {
        return (

            <div className="loading-container">
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            </div>
        );
    } else return null;
}
Loader.defaultProps = defaultProps;
export default Loader;