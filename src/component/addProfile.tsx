import React, { useEffect, useState } from 'react';
import { Alert, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../services/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddFriend from './addFriend';
import { useNavigate } from 'react-router-dom';



function AddProfile() {

    const [profileImg, setprofileImg] = useState<any>('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const [addfriend, setaddfriend] = useState(null)
    const dispatch = useDispatch();
    const candidates = useSelector((state: any) => state.profile);

    const onFinish = (values: any) => {
        const data = {
            id: candidates.profile.length + 1,
            img: profileImg,
            fullname: values.name,
            phonenumber: values.phone,
            friend: addfriend === null ? '' : addfriend
        }
        console.log('Success:', data, addfriend);
        dispatch(add(data));
        setNavigate(true);
        setTimeout(function () {
            navigatepage('/');

        }, 1000);
    };

    const navigatepage = useNavigate();
    const [navigate, setNavigate] = useState(false);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    const imageHandler = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setprofileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    };

    return (
        <>
            <div className="p-20 App">
                <h3 className=' text-white text-[30px] font-bold'>Add Profile</h3>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className='py-5 text-right'>
                        <button className='text-white border border-white px-8 py-3 font-bold' type='submit'>Add</button>
                    </div>
                    <div className='pb-10 '>
                        <Form.Item
                            label="Username"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="phone number"
                            name="phone"
                            rules={[
                                {
                                    max:10 ,
                                    min:10 ,
                                    required: true,
                                    message: 'Please enter valid  phone number!',
                                },
                            ]}
                        >
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item
                            label="Upload image"
                            name="profileimg"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload profile pic!',
                                },
                            ]}
                        >
                            <div className="page">
                                <div className="container">
                                    <div className="img-holder h-[30%] mb-4 w-[30%]">
                                        <img src={profileImg} alt="" id="img" className="img" />
                                    </div>
                                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

                                </div>
                            </div>
                        </Form.Item>
                    </div>
                    <AddFriend setaddfriend={setaddfriend} />
                </Form>
            </div>
            {navigate ?
                (
                    <Alert onClose={() => setNavigate(false)} closable banner={true} message="Profile  Details has been added" type="success" />

                ) : null}
        </>
    );
}

export default AddProfile;
