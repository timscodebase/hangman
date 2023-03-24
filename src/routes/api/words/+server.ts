import type { RequestHandler } from '@sveltejs/kit'

// /api/newsletter GET

export const GET: RequestHandler = async () => {
  const options: ResponseInit = {
    status: 418,
    headers: {
      X: 'Gon give it to ya',
    }
  }

  const adjectives = ['swift', 'puffy', 'satisfying', 'overconfident', 'troubled', 'solid', 'overwrought', 'dazzling', 'muddled', 'gentle', 'cheap', 'momentous', 'best', 'average', 'marked', 'tremendous', 'straight', 'parched', 'clean', 'magenta', 'sore', 'imperfect', 'resolute', 'adventurous', 'perpetual', 'longing', 'chief', 'wholesale', 'round', 'precious', 'aboriginal', 'synonymous', 'brash', 'gaudy', 'painstaking', 'purple', 'impartial', 'psychotic', 'naive', 'healthy', 'diligent', 'demonic', 'nasty', 'jaded', 'fascinated', 'truculent', 'illustrious', 'proud', 'hideous', 'even']

  const nouns = ['afternoon', 'bike', 'muscle', 'price', 'spoon', 'snow', 'push', 'volcano', 'hair', 'yoke', 'soup', 'party', 'minister', 'teaching', 'rat', 'meat', 'ladybug', 'doctor', 'birds', 'number', 'toy', 'behavior', 'channel', 'rub', 'cast', 'amusement', 'activity', 'window', 'detail', 'cent', 'men', 'head', 'army', 'invention', 'flight', 'underwear', 'cherry', 'gold', 'snake', 'spring', 'tank', 'comparison', 'reading', 'eye', 'mailbox', 'duck', 'language', 'argument', 'sweater', 'range']

  const verbs = ['flow', 'box', 'hug', 'stay', 'kneel', 'prick', 'crush', 'bat', 'notice', 'divide', 'confess', 'alert', 'irritate', 'ignore', 'coil', 'crash', 'appreciate', 'reproduce', 'brake', 'listen', 'dislike', 'crack', 'pick', 'squeak', 'injure', 'remain', 'step', 'plug', 'replace', 'bare', 'remember', 'disappear', 'face', 'add', 'risk', 'connect', 'attend', 'deserve', 'appear', 'rescue', 'milk', 'shrug', 'murder', 'form', 'empty', 'rinse', 'hover', 'rot', 'tour', 'call']

  const allWords = [...adjectives, ...nouns, ...verbs]

  const body = JSON.stringify({ adjectives, allWords, nouns, verbs })

  return new Response(body, options)
}