import React from 'react';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactForm: React.FC = () => {
  return (
    <div className='contact-form'>
      <Form
        name='basic'
        // labelCol={{ span: 8 }}
        //  wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        //  onFinishFailed={onFinishFailed}
        autoComplete='off'
        className='form'
      >
        <div className='form-name'>
          <Form.Item
            name='name'
            //  rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type='text' placeholder='Your Name' className='inputTag' />
          </Form.Item>

          <Form.Item
            name='email'
            // rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type='email' placeholder='Your Email' className='inputTag' />
          </Form.Item>
        </div>
        <Form.Item
          name='subject'
          className='form-sub'
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input type='text' placeholder='Subject' className='inputTag' />
        </Form.Item>

        <Form.Item name='message' className='form-sub'>
          <TextArea rows={6} placeholder='Message' className='inputTag' />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='primary' htmlType='submit' className='submit'>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
