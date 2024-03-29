import { MAP_MATERIALS, GRID, TILES, MISCS } from '../../constants.js';

export default {
  dirt: true,
  water: true,
  rocks: true,
  hero: { position: GRID[3][22] },
  monsters: [],
  winningBlock: {
    position: GRID[49][4],
    dimensions: { width: 16, height: 16 * 6 },
  },
  materials: [
    // TILES
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][0],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][2],
      backgroundPosition: TILES.normal.green[1][2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][10],
      backgroundPosition: TILES.normal.green[0][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][10],
      backgroundPosition: TILES.normal.green[1][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][12],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][12],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][14],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][14],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][16],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][16],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][18],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][18],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][20],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][20],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][22],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][22],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][24],
      backgroundPosition: TILES.reversed.green[2][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][24],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][26],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // DECOR
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.arrowPlateRight,
      position: GRID[40][8],
    },

    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[45][9],
    },

    {
      ...MAP_MATERIALS.woodenPlate,
      position: GRID[6][22],
    },

    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[0][23],
    },
    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[6][23],
    },
    {
      ...MAP_MATERIALS.grass,
      position: GRID[10][23],
    },
    {
      ...MAP_MATERIALS.grass,
      position: GRID[14][23],
    },
    {
      ...MAP_MATERIALS.bigflowers,
      position: GRID[18][23],
    },
    {
      ...MAP_MATERIALS.flowers,
      position: GRID[20][23],
    },
    {
      ...MAP_MATERIALS.bigflowers,
      position: GRID[24][23],
    },
    {
      ...MAP_MATERIALS.bigflowers,
      position: GRID[26][23],
    },
    {
      ...MAP_MATERIALS.grass,
      position: GRID[32][23],
    },
    {
      ...MAP_MATERIALS.flowers,
      position: GRID[28][23],
    },

    // WATERFALL
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][0],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][4],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][4],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][8],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][8],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][12],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][12],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][16],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][16],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][20],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][20],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[22][24],
    },
    {
      ...MAP_MATERIALS.waterfall,
      position: GRID[23][24],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.waterfallBottom,
      position: GRID[22][25],
    },
    {
      ...MAP_MATERIALS.waterfallBottom,
      position: GRID[23][25],
    },
  ],

  // MISCS
  // --------------------------------------------------

  miscs: [
    {
      name: MISCS.coin,
      position: GRID[38][19],
    },
    {
      name: MISCS.coin,
      position: GRID[38][15],
    },
    {
      name: MISCS.coin,
      position: GRID[38][11],
    },
    {
      name: MISCS.mushroom,
      position: GRID[38][22],
    },
  ],
};
