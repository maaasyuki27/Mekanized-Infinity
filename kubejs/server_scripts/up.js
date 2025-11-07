ItemEntityEvents.tick(event => {
    const entity = event.entity;
    const item = entity.item;
    const level = entity.level;
    const INPUT_ITEM = 'minecraft:iron_ingot';
    const OUTPUT_ITEM = 'minecraft:diamond';
    const LIQUID_ID = 'minecraft:water';
    const FLOAT_HEIGHT = 3.0;
    const LEVITATION_AMPLIFIER = 0;
    const PARTICLE_EFFECT = 'minecraft:totem_of_undying';
    const SOUND_EFFECT = 'minecraft:item.totem.use';

    if (item.id !== INPUT_ITEM) {
        return;
    }
    const fluidState = level.getFluidState(entity.blockPosition());
    if (fluidState.is(LIQUID_ID)) {
        if (!entity.persistentData.isTransforming) {
            entity.persistentData.isTransforming = true;
            entity.persistentData.startY = entity.y;
            entity.setGlowing(true);
            entity.addEffect('minecraft:levitation', 200, LEVITATION_AMPLIFIER, false, false);
        }

        else {
            entity.setGlowing(true);
            const startY = entity.persistentData.startY;
            if (entity.y > startY + FLOAT_HEIGHT) {
                entity.removeEffect('minecraft:levitation');
                entity.setNoGravity(true);
                entity.setDeltaMovement(0, 0, 0);
                level.spawnParticles(PARTICLE_EFFECT, entity.x, entity.y + 0.25, entity.z, 0.3, 0.3, 0.3, 0.5, 15);
                level.playSound(null, entity.x, entity.y, entity.z, SOUND_EFFECT, 'players', 0.5, 1.0);
                const count = item.count;
                entity.item = Item.of(OUTPUT_ITEM, count);

            }
        }
    }

    else if (entity.persistentData.isTransforming) {
        entity.persistentData.isTransforming = false;
        entity.setGlowing(false);
        entity.removeEffect('minecraft:levitation');
    }
});