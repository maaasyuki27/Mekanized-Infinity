ServerEvents.recipes(event => {
event.shaped(
  Item.of('integrateddynamics:squeezer'),
  [
    'ABA',
    'A A',
    'CCC'
  ],
  {
    A: 'minecraft:crafting_table',
    B: 'mek_inf:flux_dust_block',
    C: '#forge:ingots/osmium'
  }
)
})