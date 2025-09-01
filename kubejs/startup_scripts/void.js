ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityLeaveLevelEvent", (event) => {
    const { entity, level } = event;
    if (level.clientSide || !entity.item || entity.item != "mekanismadditions:black_plastic_glow" || entity.y > level.minBuildHeight) return;
    const resultCount = entity.item.count;
    const resultEntity = entity.block.createEntity("item");

    resultEntity.item = "minecraft:coal_ore";
    resultEntity.item.count = resultCount;
    resultEntity.y = level.minBuildHeight - 20;
    resultEntity.spawn();
    resultEntity.setDeltaMovement(new Vec3d(0, (entity.fallDistance - 43) / 50, 0));
    resultEntity.setNoGravity(true);
    resultEntity.setGlowing(true);
});
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityLeaveLevelEvent", (event) => {
    const { entity, level } = event;
    if (level.clientSide || !entity.item || entity.item != "mekanismadditions:white_plastic_glow" || entity.y > level.minBuildHeight) return;
    const resultCount = entity.item.count;
    const resultEntity = entity.block.createEntity("item");

    resultEntity.item = "minecraft:iron_ore";
    resultEntity.item.count = resultCount;
    resultEntity.y = level.minBuildHeight - 20;
    resultEntity.spawn();
    resultEntity.setDeltaMovement(new Vec3d(0, (entity.fallDistance - 43) / 50, 0));
    resultEntity.setNoGravity(true);
    resultEntity.setGlowing(true);
});
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityLeaveLevelEvent", (event) => {
    const { entity, level } = event;
    if (level.clientSide || !entity.item || entity.item != "minecraft:bucket" || entity.y > level.minBuildHeight) return;
    const resultCount = entity.item.count;
    const resultEntity = entity.block.createEntity("item");

    resultEntity.item = "minecraft:water_bucket";
    resultEntity.item.count = resultCount;
    resultEntity.y = level.minBuildHeight - 20;
    resultEntity.spawn();
    resultEntity.setDeltaMovement(new Vec3d(0, (entity.fallDistance - 43) / 50, 0));
    resultEntity.setNoGravity(true);
    resultEntity.setGlowing(true);
});
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityLeaveLevelEvent", (event) => {
    const { entity, level } = event;
    if (level.clientSide || !entity.item || entity.item != "kubejs:sugar_cube" || entity.y > level.minBuildHeight) return;
    const resultCount = entity.item.count;
    const resultEntity = entity.block.createEntity("item");

    resultEntity.item = "minecraft:sugar_cane";
    resultEntity.item.count = resultCount;
    resultEntity.y = level.minBuildHeight - 20;
    resultEntity.spawn();
    resultEntity.setDeltaMovement(new Vec3d(0, (entity.fallDistance - 43) / 50, 0));
    resultEntity.setNoGravity(true);
    resultEntity.setGlowing(true);
});

