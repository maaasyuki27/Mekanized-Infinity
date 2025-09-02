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
})