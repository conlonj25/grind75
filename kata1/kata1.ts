export const formatTimezone = (timezone: string): string => {
	return 'UTC' + timezone.split(':')
		.map(Number)
		.reduce((acc, cv, i) => {
			if (i === 0) {
				return cv >= 0 ? `+${cv}` : `${cv}`;
			}

			return cv > 0 ? `${acc}H${cv}` : `${acc}`;
		}, '');
};