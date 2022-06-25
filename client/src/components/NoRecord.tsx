import * as React from 'react';
type Props = {
  message: string
}
const defaultProps = {
  message: ""
}
const NoRecord = (props: Props) => {
  if (props.message) {
    return (
      <div className='no-record-found-container'>
        <img className="no-record-img" src={require('../assets/404.png')} alt="no record found" />
      </div>
    )
  } else {
    return null;
  }
}
NoRecord.defaultProps = defaultProps;
export default NoRecord;
