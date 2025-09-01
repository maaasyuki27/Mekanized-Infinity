ServerEvents.recipes(event => {
event.shaped(
  Item.of('mekanismgenerators:wind_generator'),
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'mekanismadditions:white_plastic_glow',
    B: 'mekanismadditions:black_plastic_glow'
  }
)
event.custom({
    "type": "integrateddynamics:squeezer",
    "item": {
      "item": "minecraft:sugar_cane"
    },
      "result": {
        "items": [
          {
            "item": {
              "item": "mekanism:bio_fuel"
            }
          }
        ]
      }
  })
event.shaped(
  Item.of('mekanism:steel_casing'),
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: '#forge:ores/osmium',
    B: '#forge:glass/silica',
    C: 'mekanism:basic_control_circuit'
  }
)
})