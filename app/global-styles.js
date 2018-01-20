import { injectGlobal } from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  /* Darken Bootstrap's modal backdrop (note: styling outside html and body here is not recommended by API creators) */
  .modal-backdrop.show {
    opacity: 0.85;
  }
`;
