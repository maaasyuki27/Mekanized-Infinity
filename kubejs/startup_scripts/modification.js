ItemEvents.modification(event => {
    event.modify('mek_inf:creosote_oil_bucket', item => {
        item.burnTime = 3200;
        item.craftingRemainder = Item.of('minecraft:bucket');
    })
})