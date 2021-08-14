
import classnames from 'classnames';
// import { Button } from 'antd';

import './index.css';
function ButtonGroup(props) {
  const {
    classContainer,
    onCancel,
    onConfirm
  } = props;
  return (
    <div className={classnames('container', classContainer)}>
      <button className={classnames('btn', 'cancel')} onClick={onCancel}>取消</button>
      <button className={classnames('btn', 'confirm')} onClick={onConfirm}>确定</button>
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;