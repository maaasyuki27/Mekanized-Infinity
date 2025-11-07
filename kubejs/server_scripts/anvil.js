EntityEvents.hurt(event => {
    const entity = event.entity;
    if (entity.type === 'minecraft:item') {
        if (event.source.type === 'anvil') {
            const x = entity.x;
            const y = entity.y;
            const z = entity.z;
            const level = entity.level;
            const count = itemStack.count;
            const ironSheetStack = Item.of('', count);
            entity.remove();
            level.spawnItemEntity(x, y, z, ironSheetStack);
            level.playSound(null, x, y, z, 'minecraft:block.anvil.land', 'blocks', 0.5, 1.0);
            event.cancel();
        }
    }
})