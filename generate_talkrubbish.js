
function randomNumbers(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return randomIndex
}
const task = {
  engineer: {
    name: '工程師',
    phrase: ['加個按鈕', '加新功能', '切個版', '改一點 code']
  },
  designer: {
    name: '設計師',
    phrase: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  },
  entrepreneur: {
    name: '創業家',
    phrase: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function generateTalkrubbish(options) {
  let collection = []
  if (!options.selectTarget) {
    return '還沒選擇喔喔喔'
  }
  if (options.selectTarget === 'engineer') {
    collection = task.engineer
  }

  if (options.selectTarget === 'designer') {
    collection = task.designer
  }

  if (options.selectTarget === 'entrepreneur') {
    collection = task.entrepreneur
  }

  const selectTask = collection.phrase[randomNumbers(collection.phrase)]
  const randomPhrase = phrase[randomNumbers(phrase)]
  const result = `${collection.name} ${selectTask} ${randomPhrase}`

  return result
}


module.exports = generateTalkrubbish
