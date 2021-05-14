import { FunctionComponent } from 'react';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
export const Flag: FunctionComponent = () => {
    const flag =
        <div className={`width-full height-full center c6c6c6-back-color`}>
        <FlagOutlinedIcon style={{color:'red'}}/>
        </div>
    return flag;
}