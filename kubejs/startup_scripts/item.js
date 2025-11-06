StartupEvents.registry('item', event => {
    event.create('mek_inf:mainlogo').texture('kubejs:item/mek')
    event.create('mek_inf:sugar_cube').texture('kubejs:item/sugar_cube')
    event.create('mek_inf:bio_cube').texture('kubejs:item/bio_cube')
    event.create('mek_inf:simple_control_circuit').texture('kubejs:item/simple_control_circuit')

    let types = ["simple","basic","advanced","elite","ultimate","overclocked","quantum","dense","multiversal","creative"]
    types.forEach(type => {
      event.create(`mek_inf:${type}_resister`).texture(`kubejs:item/${type}_resister`)
      event.create(`mek_inf:${type}_motor`).texture(`kubejs:item/${type}_motor`)
    })
    let coal = [
        ["sugar_charcoal", 400],
        ["cactus_charcoal", 400],
        ["cactus_coke", 800],
        ["sugar_coke", 800],
        ["coal_coke", 3200]]
    coal.forEach(item => {
      var type = item[0]
      var burnTime = item[1]
      event.create(`mek_inf:${type}`).texture(`kubejs:item/${type}`).burnTime(burnTime).tag(`minecraft:coals`)
    })
})