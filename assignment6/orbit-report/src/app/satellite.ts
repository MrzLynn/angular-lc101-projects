import { type } from "os";

export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
this.name = name;
this.type = type;
this.launchDate = launchDate;
this.orbitType = orbitType;
this.operational = operational;
}
}
function shouldShowWarning () {
if(satellite.type.value.toLowerCase() === 'Space Debris'){    
    return true
   } else {
    return false
   }
}