ServerEvents.recipes(event => {
event.shaped(
  Item.of('mek_inf:flux_dust_block'),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'fluxnetworks:flux_dust',
    B: 'minecraft:stone_bricks'
  }
)
event.shaped(
  Item.of('mek_inf:sugar_cube'),
  [
    'AAA',
    'CBC',
    'AAA'
  ],
  {
    A: 'minecraft:sugar',
    B: 'mek_inf:flux_water_bucket',
    C: 'allthecompressed:sand_1x'
  }
).replaceIngredient('mek_inf:flux_water_bucket', 'minecraft:bucket')
event.shaped(
  Item.of('mek_inf:bio_cube'),
  [
    'AAA',
    'CBC',
    'AAA'
  ],
  {
    A: 'mekanism:bio_fuel',
    B: 'mek_inf:flux_water_bucket',
    C: 'allthecompressed:dirt_1x'
  }
).replaceIngredient('mek_inf:flux_water_bucket', 'minecraft:bucket')

})