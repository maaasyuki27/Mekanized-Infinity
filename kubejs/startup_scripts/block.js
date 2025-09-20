StartupEvents.registry('block', event => {
  event.create('mek_inf:flux_dust_block')
    .soundType('stone')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .textureAll('kubejs:block/flux_dust_block')
    let typesa = ["bronze","infused","reinforced","atomic","hypercharged","subatomic","singular","exoversal","creative"]
    typesa.forEach(type => {
      event.create(`mek_inf:${type}_casing`)
      .soundType(`metal`)
      .requiresTool(true)
      .tagBlock(`minecraft:mineable/pickaxe`)
      .textureAll(`kubejs:item/${type}_casing`)
    })
    let typesb = ["bronze","steel"]
    typesb.forEach(type => {
      event.create(`mek_inf:${type}_machine_hull`)
      .soundType(`metal`)
      .requiresTool(true)
      .tagBlock(`minecraft:mineable/pickaxe`)
      .textureAll(`kubejs:item/${type}_machine_hull`)
    })
})