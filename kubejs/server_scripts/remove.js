ServerEvents.recipes(event => {
    [
        'minecraft:crafting_table'
    ].forEach((name) => {
        event.remove({output: name})
    })
    event.remove({output: 'minecraft:chest', input: '#minecraft:planks'})
})