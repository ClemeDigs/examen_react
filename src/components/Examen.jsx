import { useState, useEffect } from "react";
import ColorButtons from "./ColorButtons";

/**
 *
 * @returns {JSX.Element}
 */
export default function Examen() {
  /**
   * @type {string[]}
   */
  const colors = ["bg-cyan-400", "bg-pink-400", "bg-orange-400"];
  /**
   * @type {number[]}
   */
  const [buttonColors, setButtonColors] = useState(initializeColors);
  /**
   * @type {number[]}
   */
  const [miniatureColors, setMiniatureColors] = useState([]);

  /**
   * @returns {number[]}
   */
  function initializeColors() {
    const allColorsIndex = [];
    for (let i = 0; i < 16; i++) {
      allColorsIndex.push(0);
    }
    return allColorsIndex;
  }

  /**
   * @param {number} index
   * @returns {void}
   */
  function changeColor(index) {
    /**
     * @type {number[]}
     */
    const newColors = [...buttonColors];
    if (newColors[index] < colors.length - 1) {
      newColors[index] += 1;
    } else {
      newColors[index] = 0;
    }
    setButtonColors(newColors);
  }

  /**
   * @returns {void}
   */
  function savePattern() {
    const oldPatterns = JSON.parse(localStorage.getItem("savedPattern")) || [];
    const allPatterns = [...oldPatterns, buttonColors];
    localStorage.setItem("savedPattern", JSON.stringify(allPatterns));
    setMiniatureColors([...allPatterns]);
  }

  /**
   * @returns {void}
   */
  function resetPattern() {
    setButtonColors(initializeColors());
  }

  /**
   * @returns {void}
   */
  function loadPattern() {
    if (localStorage.getItem("savedPattern")) {
      const savedPattern = JSON.parse(localStorage.getItem("savedPattern"));
      setButtonColors(savedPattern[savedPattern.length - 1]);
      setMiniatureColors(savedPattern);
    } else {
      setButtonColors(initializeColors());
      setMiniatureColors([]);
    }
  }

  useEffect(() => {
    loadPattern();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 gap-20">
      <div className="flex flex-col gap-8">
        <ColorButtons
          buttonColors={buttonColors}
          colors={colors}
          size="w-20 h-20"
          onClick={changeColor}
        />
        <div className="flex justify-between w-full">
          <button
            onClick={savePattern}
            className="bg-white border-2 border-orange-500 text-orange-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:text-orange-700 transition"
          >
            Sauvegarder
          </button>
          <button
            onClick={resetPattern}
            className="bg-white border-2 border-orange-500 text-orange-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:text-orange-700 transition"
          >
            Réinitialiser
          </button>
        </div>
      </div>
      <div>
        {miniatureColors.map((pattern, index) => (
          <ColorButtons
            key={index}
            buttonColors={pattern}
            colors={colors}
            size="w-8 h-8"
            isDisabled={true}
          />
        ))}
      </div>
    </div>
  );
}
