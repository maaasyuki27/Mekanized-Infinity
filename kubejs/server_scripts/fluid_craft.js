let default_sound_block = 'minecraft:block.bubble_column.whirlpool_ambient'
EntityEvents.spawned('minecraft:item', event => {
    //example conversion of crushed ice in water -> ice block
    if(event.entity.item.id == 'minecraft:coal')
        attemptSetBlock(30, event.entity, 'minecraft:water', 'minecraft:lava')
    if(event.entity.item.id == 'minecraft:lava_bucket')
        attemptSetBlock(30, event.entity, 'minecraft:water', 'minecraft:redstone_block')
    if(event.entity.item.id == 'kubejs:flux_dust_block')
        attemptSetBlock(30, event.entity, 'minecraft:lava', 'kubejs:flux_water')
    if(event.entity.item.id == 'extendedcrafting:redstone_ingot_block')
        attemptSetBlock(30, event.entity, 'kubejs:flux_water', 'mekanism:block_raw_osmium')
    if(event.entity.item.id == 'kubejs:bio_cube')
        attemptSetBlock(30, event.entity, 'kubejs:flux_water', 'kubejs:bio_juice')
    if(event.entity.item.id == 'minecraft:sugar_cane')
        attemptSetBlock(30, event.entity, 'kubejs:bio_juice', 'minecraft:oak_sapling')

})
//simple lazy helper if we don't care about, or can't bother to find, a sound to play
let attemptSetBlock = (interval, entity, target, result) => {attemptSetBlockWithSound(interval, entity, target, result, default_sound_block)}
/**
 * @param {integer} interval The time until execution
 * @param {ItemEntity} entity The ItemEntity that was tossed
 * @param {ResourceLocation} target The mod:id of the fluid it should be tossed into
 * @param {ResourceLocation} result The mod:id of the fluid/block that `target` should turn into
 * @param {ResourceLocation} sound The mod:block.type.action that should be played
 */
let attemptSetBlockWithSound = (interval, entity, target, result, sound) => {
    //set pickup delay so that it cannot be picked up during this attempt
    entity.setPickUpDelay(interval*2)
    //schedule the block check and execution to happen after (interval) ticks
    //If we don't schedule it, then the code will attempt to run at the exact moment the ItemEntity spawns, which would be where it pops into existence, often by ~player-hand
    entity.server.scheduleInTicks(interval, () => {
        //If the ItemEntity no longer exist, then do nothing
        if(!entity)
            return
        let {level, server } = entity
        //the Field blockPosition returns a completely different value compared to the Method blockPosition(). Must use the Method/Function for proper location
        let bpos = entity.blockPosition()
        let liquid = level.getBlock( bpos )

        //Is the entity submerged, and is it the correct liquid
        if(entity.isInFluidType() && liquid.id == target){
            //set the block
            level.getBlock(bpos).set(result)
            //play for all players within 10 blocks
            level.players.forEach(player => {
                if(Math.sqrt(entity.distanceToSqr(player)) <= 10)
                    server.runCommandSilent(`playsound ` + sound + ` block ` + player.username + ` ${bpos.x} ${bpos.y} ${bpos.z} 1 1`)
            })
            //A stack with size > 1 may have been dropped. Let's remove 1 rather than cull the entire entity
            entity.item.count--
        }
    })
}
let attemptConvertItem = (interval, entity, target, result) => {
    entity.setPickUpDelay(interval*2)
    entity.server.scheduleInTicks(interval, () => {
        if(!entity)
            return
        let {level, server } = entity
        let bpos = entity.blockPosition()
        let liquid = level.getBlock( bpos )
        if(entity.isInFluidType() && liquid.id == target){
            let oldStack = entity.getItem()
            entity.setItem(Item.of(result, oldStack.count))
            level.players.forEach(player => {
                if(Math.sqrt(entity.distanceToSqr(player)) <= 10)
                    server.runCommandSilent(`playsound minecraft:item.bucket.fill block ` + player.username + ` ${bpos.x} ${bpos.y} ${bpos.z} 1 1`)
            })
        }
    })
}