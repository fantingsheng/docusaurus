import { useState, useEffect, useRef } from "react"

export class TypeWritter {

  constructor(
    typeFinish
  ) {
    this.dummyQueue = []
    this.eventQueue = []
    this.typeFinish = typeFinish
  }

  restartTypeWriter() {
    this.memoWord = this.nextWord
    this.eventQueue = this.nextWord ? this.nextWord.split('') : []
    this.erasing = false
    return ''
  }

  /**
   * Main process function
   * typing
   *    |-- writing
   *    |-- erasing
   *    |-- restartWrite
   *
   * @returns
   * @memberof TypeWritter
   */
  typing() {
    // earsing to last character, start write next word
    if (this.erasing && !this.word) {
      return this.restartTypeWriter()
    }
    // earsing
    if (this.erasing && this.word) {
      return this.erase()
    }
    // write end
    if (this.word === this.memoWord) {
      this.typeFinish && this.typeFinish();
      return this.word
    }
    // writing
    const el = this.eventQueue.shift()
    this.dummyQueue.push(el)
    this.word = this.dummyQueue.join('')
    return this.word
  }

  startTypeWord(str) {
    this.erasing = true
    this.nextWord = str
    this.dummyQueue.pop()
    this.word = this.dummyQueue.join('')
    return this.word
  }

  erase() {
    this.dummyQueue.pop()
    this.word = this.dummyQueue.join('')
    return this.word
  }

  rd() {
    const r = Math.random()
    return r > 0.1 || r < 0.07
      ? this.rd()
      : r * 1000
  }

}

export default function useTypeWriter(str, speed = null, endCb) {
  const [word, setWord] = useState(null)
  const intervalRef = useRef({})
  const strRef = useRef({})
  const writerInstRef = useRef(new TypeWritter(function () {
    clearInterval(intervalRef.current);
    endCb && endCb();
  }))

  useEffect(() => {
    strRef.current = setWord(writerInstRef.current.startTypeWord(str))
  }, [str])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWord(writerInstRef.current.typing())
    }, speed || writerInstRef.current.rd())
    return function clear() {
      clearInterval(intervalRef.current)
    }
  }, [word])

  return word
}
