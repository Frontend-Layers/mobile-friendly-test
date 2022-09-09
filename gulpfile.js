/**
 * Gulp Test
 */
import gulp from 'gulp'
const { parallel } = gulp

import mobileFriendlyTest from './index.js'

const apiKey = ''
const url = 'https://www.spacejam.com/1996/'


const mobileTestRes = () =>
  mobileFriendlyTest(url, apiKey)

export default
  parallel(
    mobileTestRes
  )


