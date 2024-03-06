import React, { useState } from "react";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

function Calculator() {
  const [result, setResult] = useState("0");
  const [evaluated , setEvaluated] = useState("")
  const et = evaluated.trim()

  const operators = (value) => /[*/+-]/.test(value)

  const handleButtons = (value) => {
    if (value === 'clear') {
      setResult("")
      setEvaluated("0")
    } else if (operators(value)) {
      setEvaluated(et + " " + value + " ")
    } else if (value === "=") {
      calculate()
    } else if (value === '0') {
      if (evaluated.charAt(0) !== "0") {
        setEvaluated(evaluated + value)
      }
    } else if (value === '.') {
      const lastNum = evaluated.split(/[-+/*]/g).pop()

      if (!lastNum) return
      console.log('Last Number :>> ', lastNum);

      if (lastNum?.includes('.')) return
      setEvaluated(evaluated + value)
    } else {
      if (evaluated.charAt(0) === "0") {
        setEvaluated(evaluated.slice(1) + value)
      } else {
        setEvaluated(evaluated + value)
      }
    }
  }

  const calculate = () => {
    if (operators(et.charAt(et.length - 1))) return

    const parts = et.split(' ')
    const newParts = []

    for (let i = parts.length -1; i >= 0; i--) {
      if (['*', '/', '+'].includes(parts[i]) && operators(parts[i - 1])) {
        newParts.unshift(parts[i])
        let j = 0
        let k = i -1

        while (operators(parts[k])) {
          k--
          j++
        }
        i -= j
      } else {
        newParts.unshift(parts[i])
      }
    }

    const newEvaluated = newParts.join(' ')

    if (operators(newEvaluated.charAt(0))) {
      setResult(eval(result + newEvaluated))
    } else {
      setResult(eval(newEvaluated))
    }
    setEvaluated((''))
  }
  

  return (
    <>
      <main>
        <Screen result={result} evaluated={evaluated} />
        <Pad btnclick={handleButtons}/>
      </main>
    </>
  );
}

export default Calculator;
