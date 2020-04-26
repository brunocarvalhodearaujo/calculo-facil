/**
 * Copyright (c) 2020-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    Copyright © {new Date().getFullYear()}
    {' '}
    <a href='https://www.gatsbyjs.org'>{siteTitle}</a>
    {' '} | Todos os direitos reservados.
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ''
}

export default Footer
