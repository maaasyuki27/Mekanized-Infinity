ServerEvents.recipes(event => {
    [
        'mekanismgenerators:solar_generator',
        'mekanism:steel_casing',
        'integrateddynamics:squeezer'
    ].forEach((name) => {
        event.remove({output: name})
    })
})