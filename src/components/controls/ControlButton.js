import './ControlButton.css';

/**
 * Render a rounded button with light pink/cyan background
 * @param {string|JSX.Element} children - the content to render inside the button
 * @param {object} rest - other attributes to pass on to the <button /> component (mostly the onClick attribute)
 * @returns {JSX.Element}
 * @constructor
 */
const ControlButton = ({children, ...rest}) => {
    return (
        <button
            {...rest}
            className="w-full border-2 border-cyan-600 px-4 py-1 md:p-2 rounded-full bg-gradient-to-r
            from-pink-300 to-cyan-400 text-cyan-900 text-sm md:text-md
            active:to-pink-900  active:to-cyan-900 relative hover:-top-1 transition-all duration-300

            "
        >
            {children}
        </button>
    );
}

export default ControlButton;