import React, {useRef, useEffect, useState} from 'react';
import Styles from './style.module.scss';

const DropDown = props => {

    const dropDownRef = useRef(null);
    const {data, selectedData, onChange} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(selectedData);

    const detectOutsideClick = e => {
        if(!dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(()=> {
      document.addEventListener('click', detectOutsideClick);
      return () => {
          document.removeEventListener('click', detectOutsideClick);
      }
    }, []);

    useEffect(() => {
        setSelected(selectedData);
    }, [selectedData]);

    const {display} = selected;

    const handleDropDownClick = e=> {
        e.stopPropagation();
        setIsOpen(true);
    };

    const handleDropDownRowClick = (data) => {
        setSelected(data);
        setIsOpen(false);
        onChange(data);
    };

    const isSelectedElement = el =>
        JSON.stringify(el) === JSON.stringify(selected);

    return (
        <div className={Styles.dropDownContainer} ref={dropDownRef}>
            <div
                className={`${Styles.dropDownDisplayContainer} background-style`}
                onClick={handleDropDownClick}
            >
                <div className={Styles.displayTextStyle}>
                { display }
                </div>
                <div className={Styles.arrowDown} />
            </div>
            { isOpen
                &&  <div className={`${Styles.dropDownListContainer} background-style`}>
                {
                    data.map(el =>
                        <div
                            className={`${isSelectedElement(el)
                                ? Styles.selectedRow: ''} ${Styles.rowContainer}`}
                            onClick={()=> handleDropDownRowClick(el)}
                        >
                            { el.display }
                        </div>
                    )
                }
            </div>
            }
        </div>
    )
};

export default DropDown;