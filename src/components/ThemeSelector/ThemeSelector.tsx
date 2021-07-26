import React from 'react';
import './ThemeSelector.css';

// External variable
import { META_THEME_COLOR } from '../../utils/metaColor';

type ThemeSelectorProps = {
	code: string;
	classname: string;
	theme: string;
	setTheme: any;
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
	code,
	classname,
	theme,
	setTheme,
}) => {
	const handleChangeTheme = () => {
		META_THEME_COLOR.setAttribute('content', code);
		document.documentElement.setAttribute('data-theme', classname);
		setTheme(classname);
	};

	return (
		<button
			className={`at-theme-selector ${
				theme === classname ? 'active' : ''
			}`.trim()}
			onClick={handleChangeTheme}
		>
			<span className={classname}></span>
		</button>
	);
};

export default ThemeSelector;
