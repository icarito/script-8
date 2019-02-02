// TODO: consolidate - avoid duplication

const triplets = [
  [220, 245, 255],
  [230, 200, 110],
  [100, 185, 100],
  [80, 140, 215],
  [215, 115, 85],
  [100, 105, 100],
  [85, 65, 95],
  [0, 0, 0]
]

// const hexes = [
//   '#f6d6bd',
//   '#c3a38a',
//   '#997577',
//   '#816271',
//   '#4e495f',
//   '#20394f',
//   '#0f2a3f',
//   '#08141e'
// ]

const colors = {
  rgb (i) {
    var t = triplets[i % triplets.length]
    return 'rgb(' + t[0] + ',' + t[1] + ',' + t[2] + ')'
  },
  triplet (i) {
    return triplets[i % triplets.length]
  }
}

export default colors
