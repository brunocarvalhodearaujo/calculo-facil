/**
 * Copyright (c) 2020-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Link as BaseLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #eeeef4;
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
  margin-bottom: 1.45rem;
`

const Link = styled(BaseLink)`
  color: #000000;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
`

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to='/'>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
