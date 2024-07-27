// // import { assert } from "chai";
// // import { formatTimezone } from "./solution";

// import { formatTimezone } from "./kata2";

// const replicatedLogic = (tz) => {
// 	const [h, m] = tz.split(':').map(Number);
// 	return `UTC${h>=0?'+':''}${h}${m?`H${m}`:''}`;
// }

// const getRandomTimezone = () => {
// 	const sign = Math.random()>0.5 ? '+' : '-';
// 	const hours = Math.floor(Math.random() * 100).toString().padStart(2, '0');
// 	const minutes = Math.floor(Math.random() * 100).toString().padStart(2, '0');

// 	return `${sign}${hours}:${minutes}`
// }

// const everyTimezoneOnEarth = [
// 	['+00:00', 'UTC+0'],
// 	['+01:00', 'UTC+1'],
// 	['+02:00', 'UTC+2'],
// 	['+03:00', 'UTC+3'],
// 	['+04:00', 'UTC+4'],
// 	['+05:00', 'UTC+5'],
// 	['+06:00', 'UTC+6'],
// 	['+07:00', 'UTC+7'],
// 	['+08:00', 'UTC+8'],
// 	['+09:00', 'UTC+9'],
// 	['+10:00', 'UTC+10'],
// 	['+11:00', 'UTC+11'],
// 	['+12:00', 'UTC+12'],
// 	['+13:00', 'UTC+13'],
// 	['+14:00', 'UTC+14'],
// 	['-01:00', 'UTC-1'],
// 	['-02:00', 'UTC-2'],
// 	['-03:00', 'UTC-3'],
// 	['-04:00', 'UTC-4'],
// 	['-05:00', 'UTC-5'],
// 	['-06:00', 'UTC-6'],
// 	['-07:00', 'UTC-7'],
// 	['-08:00', 'UTC-8'],
// 	['-09:00', 'UTC-9'],
// 	['-10:00', 'UTC-10'],
// 	['-11:00', 'UTC-11'],
// 	['-12:00', 'UTC-12'],
// 	['+03:30', 'UTC+3H30'],
// 	['+04:30', 'UTC+4H30'],
// 	['+05:30', 'UTC+5H30'],
// 	['+05:45', 'UTC+5H45'],
// 	['+06:30', 'UTC+6H30'],
// 	['+08:45', 'UTC+8H45'],
// 	['+09:30', 'UTC+9H30'],
// 	['+10:30', 'UTC+10H30'],
// 	['+13:45', 'UTC+13H45'],
// 	['-09:30', 'UTC-9H30'],
// 	['-02:30', 'UTC-2H30'],
// ];

// it("should correctly format every timezone on earth", function() {
//   everyTimezoneOnEarth.forEach(([input, output]) => assert.equal(formatTimezone(input), output));
// });

// it("should correctly format every random timezone", function() {
// 	[...Array(100).keys()].forEach(() => {
// 		const tz = getRandomTimezone();
// 		expect(formatTimezone(tz)).toBe(replicatedLogic(tz))
// 	})
// });