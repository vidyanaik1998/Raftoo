import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../styles/global.css"

import { Radio } from 'antd';
interface Props {
    setaddfriend: any,
}
const AddFriend: React.FC<Props> = ({
    setaddfriend
}) => {
    const candidates = useSelector((state: any) => state.profile);


    const [value, setValue] = useState(null);
    const onChange = (item: any) => {
        setValue(item.id);
        setaddfriend(item.fullname);
    };

    return (
        <div className='  grid grid-cols-4 gap-4'>
            {candidates?.profile.map((item: any, index: number) => {
                return (
                    <Radio.Group onChange={() => onChange(item)} value={value}>
                        <Radio value={item.id}>
                            <div className={value == item.id ? 'border bg-[#f38065] text-white p-3' : 'border text-white border-[#f38065] p-3'}>
                                <button type='submit' className='bg-[#f38065] border-[#f38065]  text-white border px-3 py-1'>Add Friend</button>
                                <div className='flex mb-4 text-left items-center gap-3'>
                                    <img className='w-[30%] h-[40%]' src={item.img} alt={item.img} />
                                    <div>
                                        <h4>{item.fullname}</h4>
                                        <h4>{item.phonenumber}</h4>
                                    </div>
                                </div>
                                <h2 className=' '>{item.fullname} is friend of {item.friend}</h2>
                            </div>
                        </Radio>
                    </Radio.Group>
                );
            })}
        </div>
    );
}

export default AddFriend;
