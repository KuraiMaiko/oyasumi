import { h } from 'preact';
import classNames from 'Utils/classNames';

require.context('Sprites', true, /^\.\/.*\.svg$/);

/**
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default (
    {
        name,
        classes,
        width,
        height,
        isRTL = false,
        sprites = {},
        store = {},
        viewBox,
        icons,
        ...otherProps
    },
) => {
    const defaultSize = '30';
    const xlinkHref = `sprites.svg#${name}`;

    return (
        <svg
            {...otherProps}
            {...(viewBox ? { viewBox } : {})}
            class={classNames('ic', classes)}
            width={width || defaultSize}
            height={height || defaultSize}
        >
            <use xlinkHref={xlinkHref} />
        </svg>
    );
};
