import {coordinateCalc, sunCalc} from '../utils';
import AstronomicalObject from '../astronomicalObject/AstronomicalObject';
import IEquatorialSphericalCoordinates from '../coordinates/interfaces/IEquatorialSphericalCoordinates';
import IEclipticSphericalCoordinates from '../coordinates/interfaces/IEclipticSphericalCoordinates';
import IRectangularCoordinates from "../coordinates/interfaces/IRectangularCoordinates";

export default class Sun extends AstronomicalObject {
    public getGeocentricEclipticSphericalCoordinates(): IEclipticSphericalCoordinates {
        const lon = sunCalc.getApparentLongitude(this.T);
        const lat = sunCalc.getLatitude(this.T);
        const radiusVector = sunCalc.getRadiusVector(this.T);

        return {lat, lon, radiusVector};
    }

    public getGeocentricEquatorialSphericalCoordinates(): IEquatorialSphericalCoordinates {
        const rightAscension = sunCalc.getApparentRightAscension(this.T);
        const declination = sunCalc.getApparentDeclination(this.T);
        const radiusVector = sunCalc.getRadiusVector(this.T);

        return {rightAscension, declination, radiusVector}
    }

    public getGeocentricEquatorialRectangularCoordinates(): IRectangularCoordinates {
        const {rightAscension, declination, radiusVector} = this.getGeocentricEquatorialSphericalCoordinates();

        return coordinateCalc.spherical2rectangular(rightAscension, declination, radiusVector);
    }

    public getDistanceToEarth(): number {
        return sunCalc.getDistanceToEarth(this.T);
    }
}
