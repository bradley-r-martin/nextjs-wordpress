/* global fetch */
import React from 'react'
import Config from './Core/config'

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps (args) {
      const headerMenuRes = await fetch(
        `${Config.api}/wp-json/menus/v1/menus/header-menu`
      )
      const headerMenu = await headerMenuRes.json()
      return {
        headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      }
    }

    render () {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper
