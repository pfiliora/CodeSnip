import React, { Component } from 'react'
import { Grid, Menu, Container, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'
import { loginUser } from '../actions'

export default class LoginForm extends Component {

  state = { email: '', password: '', submittedEmail: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    e.preventDefault()
    const { store } = this.context;
    const { email, password } = this.state
    this.setState({ submittedEmail: email, submittedPassword: password })
    store.dispatch(loginUser(
      email,
      password
    ));
  }

  render() {
    // const { store } = this.context;
    const { email, password } = this.state

    return (
      <div>
        <Menu size='massive' color='teal'>
          <Menu.Item>
            <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2FScriptUpLogo.png?alt=media&token=a3ab1422-2cfb-4c39-b01f-c7c4e85ca886' />
          </Menu.Item>

             <Menu.Item name='home' href='/' />
           </Menu>

      <Container>
        <Grid centered verticalAlign="middle">
          <Grid.Column textAlign="center">
            <br />
            <Header as='h2' color='teal'>
              <Image src='https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2FScriptUpLogo.png?alt=media&token=a3ab1422-2cfb-4c39-b01f-c7c4e85ca886' />
              Log-in to your account
            </Header>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment >
                <Form.Field>
                  <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' value={email} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input fluid icon='lock' iconPosition='left' placeholder='Password' name='password' type="password" value={password} onChange={this.handleChange} />
                </Form.Field>
                <Button fluid color="teal" size="large">LOGIN</Button>
              </Segment>
              <Message>
                New to Storey? <a href="/SignUp">Sign Up Here</a>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    )
  }
}

LoginForm.contextTypes = {
    store: React.PropTypes.object
};
