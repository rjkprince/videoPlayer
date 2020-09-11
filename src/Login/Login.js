import React, { Component } from 'react';
import classes from './Login.module.css';
export default class Login extends Component {
  state = {
    name: '',
    password: '',
    age: '',
    role: '',
    recommendation: '',
    application: '',
    suggestion: [],
    Comments: '',
  };
  handleChangeInput = (e, name) => {
    switch (name) {
      case 'name':
        this.setState({
          name: e.target.value,
        });
        break;
      case 'password':
        this.setState({
          password: e.target.value,
        });
        break;
      case 'age':
        this.setState({
          age: e.target.value,
        });
        break;
      case 'role':
        this.setState({
          role: e.target.value,
        });
        break;
      case 'recommendation':
        this.setState({
          recommendation: e.target.value,
        });
        break;
      case 'application':
        this.setState({
          application: e.target.value,
        });
        break;
      case 'suggestion':
        if (this.state.suggestion.indexOf(e.target.value) !== -1) {
          let temp = [...this.state.suggestion];
          temp.splice(temp.indexOf(e.target.value), 1);
          this.setState({
            suggestion: temp,
          });
        } else {
          this.setState({
            suggestion: [...this.state.suggestion, e.target.value],
          });
        }

        break;
      case 'Comments':
        this.setState({
          Comments: e.target.value,
        });
        break;
      default:
        console.log('name not found');
    }
  };
  render() {
    return (
      <div className={classes.Login}>
        <form className={classes.Form}>
          <label htmlFor='name' className={classes.Label}>
            Name
          </label>
          <input
            type='text'
            id='name'
            className={classes.Input}
            placeholder='Name'
            value={this.state.name}
            onInput={(e) => this.handleChangeInput(e, 'name')}
          />
          <label htmlFor='email' className={classes.Label}>
            Email
          </label>
          <input
            type='Password'
            id='email'
            className={classes.Input}
            placeholder='password'
            value={this.state.password}
            onInput={(e) => this.handleChangeInput(e, 'password')}
          />
          <label htmlFor='age' className={classes.Label}>
            Age (Optional)
          </label>
          <input
            type='text'
            id='age'
            className={classes.Input}
            placeholder='Enter Your Age'
            value={this.state.password}
            onInput={(e) => this.handleChangeInput(e, 'age')}
          />
          <label htmlFor='role' className={classes.Label}>
            Which option describes you the best?
          </label>
          <select
            name=''
            id='role'
            onInput={(e) => this.handleChangeInput(e, 'role')}
          >
            <option value='default'>Your current role</option>
            <option value='Professional'>Professional</option>
            <option value='Student'>Student</option>
            <option value='Job searcher'>Job searcher</option>
          </select>
          <label htmlFor='recommendation' className={classes.Label}>
            Would you recommend this to your friend?
          </label>
          <div>
            <input
              type='radio'
              id='Definetly'
              value='Definetly'
              name='recommendation'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='Definetly'>Definetly</label>
          </div>
          <div>
            <input
              type='radio'
              id='May be'
              value='May be'
              name='recommendation'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='May be'>May be</label>
          </div>
          <div>
            <input
              type='radio'
              id='Not sure'
              value='Not sure'
              name='recommendation'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='Not sure'>Not sure</label>
          </div>
          <label htmlFor='application' className={classes.Label}>
            What is your favourite application?
          </label>
          <select
            name=''
            id='application'
            onInput={(e) => this.handleChangeInput(e, 'application')}
          >
            <option value='default'>Choose an option</option>
            <option value='Photoshop'>Photoshop</option>
            <option value='Illustrator'>Illustrator</option>
            <option value='Premium Pro'>Premium Pro</option>
            <option value='After Effects'>After Effects</option>
          </select>
          <label htmlFor='suggestion' className={classes.Label}>
            What would you like to be self improved?
          </label>
          <div>
            <input
              type='checkbox'
              id='Projects'
              value='Projects'
              name='suggestion'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'suggestion')}
            />
            <label htmlFor='Projects'>Projects</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Assesments'
              value='Assesments'
              name='suggestion'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'suggestion')}
            />
            <label htmlFor='Assesments'>Assesments</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Mentorship'
              value='Mentorship'
              name='suggestion'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'suggestion')}
            />
            <label htmlFor='Mentorship'>Mentorship</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Live sessions'
              value='Live sessions'
              name='suggestion'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'suggestion')}
            />
            <label htmlFor='Live sessions'>Live sessions</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Practice Problems'
              value='Practice Problems'
              name='suggestion'
              className={classes.Input}
              onInput={(e) => this.handleChangeInput(e, 'suggestion')}
            />
            <label htmlFor='Practice Problems'>Practice Problems</label>
          </div>
          <label htmlFor='Comments'>Live sessions</label>
          <textarea
            name='comments'
            id='Comments'
            cols='30'
            rows='10'
            className={`${classes.Input} ${classes.TextArea}`}
            placeholder='It might help us improve...'
            onInput={(e) => this.handleChangeInput(e, 'Comments')}
          ></textarea>
          <input
            type='submit'
            value='Submit'
            className={`${classes.Input} ${classes.SubmitBtn}`}
          />
        </form>
      </div>
    );
  }
}
