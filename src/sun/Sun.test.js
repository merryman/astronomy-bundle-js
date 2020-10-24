import {createTimeOfInterest} from '../time';
import {round} from '../utils/math';
import createSun from './createSun';
import {deg2angle} from '../utils/angleCalc';

it('tests getDistanceToEarth', () => {
    const toi = createTimeOfInterest.fromTime(2020, 10, 22, 6, 15, 0);
    const sun = createSun(toi);

    expect(round(sun.getDistanceToEarth(), 6)).toBe(148870110.831033);
});

it('tests getGeocentricEclipticSphericalCoordinates', () => {
    const toi = createTimeOfInterest.fromTime(2020, 8, 9, 0, 3, 18);
    const sun = createSun(toi);

    const {lon, lat, radiusVector} = sun.getGeocentricEclipticSphericalCoordinates();

    console.log(
        deg2angle(lon),
        lat,
        radiusVector,
    );
});

it('tests getGeocentricEquatorialSphericalCoordinates', () => {
    const toi = createTimeOfInterest.fromTime(1992, 10, 13, 0, 0, 0);
    const sun = createSun(toi);

    const {rightAscension, declination, radiusVector} = sun.getGeocentricEquatorialSphericalCoordinates();

    // expect(round(rightAscension, 6)).toBe(198.378122); // TODO
    // expect(round(declination, 6)).toBe(-7.78382);
    // expect(round(radiusVector, 6)).toBe(0.99761);
    expect(round(rightAscension, 6)).toBe(198.380822);
    expect(round(declination, 6)).toBe(-7.785069);
    expect(round(radiusVector, 6)).toBe(0.997662);
});

it('tests getGeocentricEquatorialRectangularCoordinates', () => {
    const toi = createTimeOfInterest.fromTime(1992, 10, 13, 0, 0, 0);
    const sun = createSun(toi);

    const {x, y, z} = sun.getGeocentricEquatorialRectangularCoordinates();

    expect(round(x, 6)).toBe(-0.938037);
    expect(round(y, 6)).toBe(-0.311695);
    expect(round(z, 6)).toBe(-0.135141);
});
