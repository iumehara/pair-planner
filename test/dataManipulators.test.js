import React from 'react'
import {
  rotateLeft,
  rotateRight,
  shufflePair
} from '../src/js/dataManipulators'

describe('dataManipulators', () => {
  describe('rotateLeft', () => {
    it('rotates array to the left', () => {
      const rowBefore = ['aa', 'bb', 'cc']

      const rowAfter = rotateLeft(rowBefore)

      expect(rowAfter).toEqual(['bb', 'cc', 'aa'])
    })
  })

  describe('rotateRight', () => {
    it('rotates array to the right', () => {
      const rowBefore = ['aa', 'bb', 'cc']

      const rowAfter = rotateRight(rowBefore)

      expect(rowAfter).toEqual(['cc', 'aa', 'bb'])
    })
  })
  describe('shufflePair', () => {
    it('rotates track 1', () => {
      const rowsBefore = {
        left: ['aa', 'bb', 'cc'],
        right: ['xx', 'yy', 'zz']
      }

      const rowsAfter = shufflePair(0, rowsBefore)

      expect(rowsAfter).toEqual({
        left: ['xx', 'bb', 'cc'],
        right: ['aa', 'yy', 'zz']
      })
    })

    it('rotates track 2', () => {
      const rowsBefore = {
        left: ['aa', 'bb', 'cc'],
        right: ['xx', 'yy', 'zz']
      }

      const rowsAfter = shufflePair(1, rowsBefore)

      expect(rowsAfter).toEqual({
        left: ['aa', 'yy', 'cc'],
        right: ['xx', 'bb', 'zz']
      })
    })

    it('rotates track 3', () => {
      const rowsBefore = {
        left: ['aa', 'bb', 'cc'],
        right: ['xx', 'yy', 'zz']
      }

      const rowsAfter = shufflePair(2, rowsBefore)

      expect(rowsAfter).toEqual({
        left: ['aa', 'bb', 'zz'],
        right: ['xx', 'yy', 'cc']
      })
    })
  })
})
