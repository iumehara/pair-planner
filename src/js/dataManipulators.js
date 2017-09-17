
export const shufflePair = (trackIndex, originalRows) => {
  const newLeftArray = [...originalRows.left]
  const newRightArray = [...originalRows.right]
  const originalRightValue = newRightArray[trackIndex]
  const originalLeftValue = newLeftArray[trackIndex]
  newLeftArray[trackIndex] = originalRightValue
  newRightArray[trackIndex] = originalLeftValue
  return {
    left: newLeftArray,
    right: newRightArray
  }
}

export const rotateLeft = (originalRow) => {
  const newRow = []
  newRow[0] = originalRow[1]
  newRow[1] = originalRow[2]
  newRow[2] = originalRow[0]
  return newRow
}

export const rotateRight = (originalRow) => {
  const newRow = []
  newRow[0] = originalRow[2]
  newRow[1] = originalRow[0]
  newRow[2] = originalRow[1]
  return newRow
}
