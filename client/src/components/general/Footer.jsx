import React, { Component } from 'react'
import '../../stylesheets/footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Website designed by @elba
        <a href="https://github.com/elba3184" target="_blank"><img src="../images/github-logo.svg" /></a>
        <a href="https://www.linkedin.com/in/elbachimilio/" target="_blank"><img src="../images/linkedin-logo.svg" /></a>
        <a href="mailto:emchimilio@gmail.com" target="_blank"><img src="../images/gmail-logo.svg" /></a>
        Resources:
          <p className="resources">GitHub Icon made by
          <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a>
          from www.flaticon.com
          </p>
        <p className="resources">Linkedin Icon made by
          <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>
          from www.flaticon.com
          </p>
        <p className="resources">Gmail Icon made by
          <a href="https://www.flaticon.com/authors/google" target="_blank">Google</a>
          from www.flaticon.com
          </p>
      </div>
    )
  }
}

export default Footer;
