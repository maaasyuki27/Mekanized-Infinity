ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:crafting_table'),
        [
            'AA',
            'BB'
        ], {
            A: 'minecraft:flint',
            B: '#minecraft:logs'
        }
    )
    event.shapeless(
        Item.of('minecraft:crafting_table'),
        [
            'crafting_on_a_stick:crafting_table'
        ]
    )
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: '#minecraft:logs',
            B: '#minecraft:planks',
            C: 'minecraft:flint'
        }
    )
})