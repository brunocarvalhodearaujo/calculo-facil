/**
 * Copyright (c) 2020-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react'
import { Layout, SEO } from '../components'
import { Container, Row, Col } from 'react-grid-system'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row>
        <Col sm={12}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
        <Col sm={6}>
          One of three columns
        </Col>
        <Col sm={6}>
          One of three columns
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
