export const dontThinkList = [
  'Rupert Murdoch',
  'Outliving your parents',
  'Daniel Radcliffe',
  'Bop It Extreme',
  'The Cosby thing',
  'Nepotism',
  'The Trans-Pacific Partnership',
  'Aleppo',
  'Space-time',
  'BENGHAZI',
  'The one that got away',
  'Eternity',
  'Syria',
  'Escape from Monkey Island',
  'Scabies',
  'Your parents having sex',
  'Mustard',
  'Friends forgetting about you',
  'Eating. Praying. Loving.',
  'Who won the World Series in 2004, and how',
  'Charlie and the Chocolate Factory',
  'You’ll probably get cancer at some point',
  'Traffic on 38th St',
  'Imminent death',
  'AOL Instant Messenger',
  'Who let the dogs out?',
  'The cure to Saturday Night Fever',
  'Whether or not your co-workers like you',
  'Diabetics',
  'The systematic biases of the criminal justice system',
  'Your bitten-up cuticles',
  'Giving your doorman a tip at Christmas',
  'The 2020 Tokyo Olympics',
];

export default function getRandomDontThink() {
  return dontThinkList[Math.floor(Math.random()*dontThink.length)];
}
