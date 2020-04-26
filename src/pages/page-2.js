/**
 * Copyright (c) 2020-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react'
import { Link } from 'gatsby'
import { Layout, SEO } from '../components'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
