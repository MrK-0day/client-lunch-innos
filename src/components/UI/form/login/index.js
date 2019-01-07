import React from 'react'
import { Form, Input, Button, Icon } from 'antd'
import logo from '../../../../assets/images/logo.png'

class UIFormLogin extends React.PureComponent {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  hasErrors (fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values)
      }
    })
  }
  render () {
    const { getFieldDecorator, getFieldsError } = this.props.form
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <img alt='INNOS' style={{ width: '100%' }} src={logo} />
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'Vui lòng nhập tài khoản!',
                validator: (rule, value, callback) => {
                  value === '' ? callback(new Error(true)) : callback()
                }
              }]
            })(
              <Input
                size='large'
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} type='text' placeholder='Tài khoản'
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
                validator: (rule, value, callback) => {
                  value === '' ? callback(new Error(true)) : callback()
                }
              }]
            })(
              <Input
                size='large'
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Mật khẩu'
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button size='large' disabled={this.hasErrors(getFieldsError())} htmlType='submit' style={{ width: '100%' }} type='primary'>
              <Icon type='login' /> Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={() => {
              this.props.onLoginFB()
            }} size='large' style={{ width: '100%' }} type='primary'>
              <Icon type='facebook' /> Đăng nhập với Facebook
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    )
  }
}

const WrappedUILoginForm = Form.create()(UIFormLogin)

export { WrappedUILoginForm }
