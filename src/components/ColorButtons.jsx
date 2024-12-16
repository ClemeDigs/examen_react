/**
 *
 * @param {Object} props
 * @param {number[]} props.buttonColors
 * @param {string[]} props.colors
 * @param {string} props.size
 * @param {boolean} props.isDisabled
 * @param {function} props.onClick
 * @returns {JSX.Element}
 */
export default function ColorButtons({
  buttonColors,
  colors,
  size,
  isDisabled,
  onClick,
}) {
  /**
   * @type {JSX.Element[]}
   */
  const buttons = [];

  for (let i = 0; i < 16; i++) {
    buttons.push(
      <ColorButton
        key={i}
        color={colors[buttonColors[i]]}
        size={size}
        isDisabled={isDisabled}
        onClick={() => onClick(i)}
      />
    );
  }

  return <div className="grid grid-cols-4 gap-4">{buttons}</div>;
}

/**
 *
 * @param {Object} props
 * @param {string} props.color
 * @param {string} props.size
 * @param {boolean} props.isDisabled
 * @param {function} props.onClick
 * @returns {JSX.Element}
 */
function ColorButton({ color, size, isDisabled, onClick }) {
  return (
    <button
      className={`${color} ${size} ${
        isDisabled ? "pointer-events-none" : ""
      } rounded-full`}
      onClick={onClick}
    ></button>
  );
}
