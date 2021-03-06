import checkForDupes from '../utils/checkForDupes.js';
import checkForComputedKeys from '../utils/checkForComputedKeys.js';

export default function components ( validator, prop ) {
	if ( prop.value.type !== 'ObjectExpression' ) {
		validator.error( `The 'components' property must be an object literal`, prop.start );
		return;
	}

	checkForDupes( validator, prop.value.properties );
	checkForComputedKeys( validator, prop.value.properties );

	prop.value.properties.forEach( component => {
		const char = component.key.name[0];
		if ( char === char.toLowerCase() ) {
			validator.warn( `Component names should be capitalised`, component.start );
		}
	});
}
