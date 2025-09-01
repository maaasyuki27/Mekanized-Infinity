ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:crafting_table'),
  [
    'AB',
    'BA'
  ],
  {
    A: 'mekanismadditions:black_plastic_glow',
    B: 'mekanismadditions:white_plastic_glow'
  }
)
event.shaped(
  Item.of('minecraft:furnace'),
  [
    'AAA',
    'A A',
    'AAA'
  ],
  {
    A: 'mekanismadditions:white_plastic_glow'
  }
)
event.shaped(
  Item.of('kubejs:flux_dust_block'),
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
event.custom({
    "type": "integrateddynamics:squeezer",
    "item": {
      "item": "allthecompressed:gravel_1x"
    },
      "result": {
        "items": [
          {
            "item": {
              "item": "minecraft:sand",
              "count": 5
            }
          },
          {
            "item": {
              "item": "minecraft:sand",
              "count": 2
            },
            "chance": 0.5
          },
          {
            "item": {
              "item": "minecraft:sand",
              "count": 2
            },
            "chance": 0.5
          }
        ]
      }
  })
event.custom({
    "type": "integrateddynamics:squeezer",
    "item": {
      "item": "mekanismadditions:white_plastic_glow"
    },
      "result": {
        "items": [
          {
            "item": {
              "item": "minecraft:sugar"
            }
          }
        ]
      }
  })
event.shaped(
  Item.of('kubejs:sugar_cube'),
  [
    'AAA',
    'CBC',
    'AAA'
  ],
  {
    A: 'minecraft:sugar',
    B: 'kubejs:flux_water_bucket',
    C: 'allthecompressed:sand_1x'
  }
).replaceIngredient('kubejs:flux_water_bucket', 'minecraft:bucket')
event.shaped(
  Item.of('kubejs:bio_cube'),
  [
    'AAA',
    'CBC',
    'AAA'
  ],
  {
    A: 'mekanism:bio_fuel',
    B: 'kubejs:flux_water_bucket',
    C: 'allthecompressed:dirt_1x'
  }
).replaceIngredient('kubejs:flux_water_bucket', 'minecraft:bucket')

})