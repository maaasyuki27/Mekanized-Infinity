let default_sound_block = 'minecraft:block.bubble_column.whirlpool_ambient'
EntityEvents.spawned('minecraft:item', event => {
    if(event.entity.item.id == 'minecraft:coal')
        attemptSetBlock(30, event.entity, 'minecraft:water', 'minecraft:lava')

})
let attemptSetBlock = (interval, entity, target, result) => {attemptSetBlockWithSound(interval, entity, target, result, default_sound_block)}
/**
 * @param {integer} interval
 * @param {ItemEntity} entity
 * @param {ResourceLocation} target
 * @param {ResourceLocation} result
 * @param {ResourceLocation} sound
 */
let attemptSetBlockWithSound = (interval, entity, target, result, sound) => {
    entity.setPickUpDelay(interval*2)
    entity.server.scheduleInTicks(interval, () => {
        if(!entity)
            return
        let {level, server } = entity
        let bpos = entity.blockPosition()
        let liquid = level.getBlock( bpos )

        if(entity.isInFluidType() && liquid.id == target){
            level.getBlock(bpos).set(result)
            level.players.forEach(player => {
                if(Math.sqrt(entity.distanceToSqr(player)) <= 10)
                    server.runCommandSilent(`playsound ` + sound + ` block ` + player.username + ` ${bpos.x} ${bpos.y} ${bpos.z} 1 1`)
            })
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