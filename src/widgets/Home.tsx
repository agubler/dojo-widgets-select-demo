import { tsx, create } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import Select from '@dojo/widgets/select';

import * as css from './styles/Home.m.css';

const factory = create({ icache });

export default factory(function Profile({ middleware: { icache } }) {
	const value = icache.getOrSet('value', 'foo');
	return (
		<div classes={[css.root]}>
			<h1>Home Page</h1>
			<div>
				<Select
					classes={{
						'@dojo/widgets/select': {
							trigger: [css.selectBackground],
						},
						'@dojo/widgets/listbox': {
							option: [css.selectBackground],
						},
					}}
					value={value}
					onChange={(value) => {
						icache.set('value', value);
					}}
					options={['foo', 'bar', 'baz']}
				></Select>
			</div>
		</div>
	);
});
