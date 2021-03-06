/**
 * Copyright (c) 2020-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react'
import { Link } from 'gatsby'
import { Layout, Image, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
